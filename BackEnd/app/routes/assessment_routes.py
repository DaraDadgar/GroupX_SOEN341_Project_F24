from flask import Blueprint, jsonify, request
from app.extensions import db
from app.models import Assessments, Students, StudentTeam

assessment_bp = Blueprint('assessment_bp', __name__)

@assessment_bp.route('/assessments', methods=['GET'])
def get_assessments():
    assessments = Assessments.query.all()
    assessments_list = [assessment.to_dict() for assessment in assessments]
    return jsonify(assessments_list), 200

@assessment_bp.route('/assessments/<int:id>', methods=['GET'])
def get_assessment(id):
    assessment = Assessments.query.get(id)
    if not assessment:
        return jsonify({"Response": "INVALID", "Reason": "Assessment not found"}), 404
    return jsonify(assessment.to_dict()), 200

@assessment_bp.route('/assessments', methods=['POST'])
def create_assessment():
    data = request.json
    sender_id = data['sender_id']
    receiver_id = data['receiver_id']
    
    # Check if both students are in the same team
    if not check_students_in_same_team(sender_id, receiver_id):
        return jsonify({"Response": "INVALID", "Reason": "Students are not in the same team."}), 400

    # Check if the sender has already assessed the receiver
    existing_assessment = Assessments.query.filter_by(sender_id=sender_id, receiver_id=receiver_id).first()
    if existing_assessment:
        return jsonify({"Response": "INVALID", "Reason": "You have already assessed this student."}), 400

    # Validate scores
    scores = [
        data.get('cooperation_score'),
        data.get('conceptual_contribution_score'),
        data.get('practical_contribution_score'),
        data.get('work_ethic_score')
    ]
    if any(score < 0 or score > 5 for score in scores):
        return jsonify({"Response": "INVALID", "Reason": "Scores must be between 0 and 5."}), 400
    
    new_assessment = Assessments(
        receiver_id=receiver_id,
        sender_id=sender_id,
        cooperation_score=data.get('cooperation_score'),
        conceptual_contribution_score=data.get('conceptual_contribution_score'),
        practical_contribution_score=data.get('practical_contribution_score'),
        work_ethic_score=data.get('work_ethic_score'),
        comments=data.get('comments', '')
    )
    db.session.add(new_assessment)
    db.session.commit()
    return jsonify(new_assessment.to_dict()), 201

@assessment_bp.route('/assessments/<int:id>', methods=['PUT'])
def update_assessment(id):
    assessment = Assessments.query.get(id)
    if not assessment:
        return jsonify({"Response": "INVALID", "Reason": "Assessment not found."}), 404

    # Ensure receiver and sender IDs are not changed
    sender_id = assessment.sender_id
    receiver_id = assessment.receiver_id

    data = request.json

    # Validate scores
    scores = [
        data.get('cooperation_score', assessment.cooperation_score),
        data.get('conceptual_contribution_score', assessment.conceptual_contribution_score),
        data.get('practical_contribution_score', assessment.practical_contribution_score),
        data.get('work_ethic_score', assessment.work_ethic_score)
    ]
    if any(score < 0 or score > 5 for score in scores):
        return jsonify({"Response": "INVALID", "Reason": "Scores must be between 0 and 5."}), 400

    # Update only the scores and comments
    assessment.cooperation_score = data.get('cooperation_score', assessment.cooperation_score)
    assessment.conceptual_contribution_score = data.get('conceptual_contribution_score', assessment.conceptual_contribution_score)
    assessment.practical_contribution_score = data.get('practical_contribution_score', assessment.practical_contribution_score)
    assessment.work_ethic_score = data.get('work_ethic_score', assessment.work_ethic_score)
    assessment.comments = data.get('comments', assessment.comments)

    db.session.commit()
    return jsonify(assessment.to_dict()), 200

@assessment_bp.route('/assessments/<int:id>', methods=['DELETE'])
def delete_assessment(id):
    assessment = Assessments.query.get(id)
    if not assessment:
        return jsonify({"Response": "INVALID", "Reason": "Assessment not found"}), 404

    db.session.delete(assessment)
    db.session.commit()
    return jsonify({"Response": "VALID", "Reason": "Assessment deleted successfully"}), 200

def check_students_in_same_team(sender_id, receiver_id):
    # Check if both students are in the same team
    sender_team = StudentTeam.query.filter_by(student_id=sender_id).first()
    receiver_team = StudentTeam.query.filter_by(student_id=receiver_id).first()

    return sender_team and receiver_team and sender_team.team_id == receiver_team.team_id
