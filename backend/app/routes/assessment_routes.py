from flask import Blueprint, jsonify, request
from app.extensions import db
from app.models import Assessments, Students, StudentTeam, StudentEval
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

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
        int(data.get('cooperation_score')),
        int(data.get('conceptual_contribution_score')),
        int(data.get('practical_contribution_score')),
        int(data.get('work_ethic_score'))
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

    new_eval = StudentEval(
        receiver_id = receiver_id,
        sender_id = sender_id,
        has_reviewed = True
    )
    
    db.session.add(new_eval)
    db.session.add(new_assessment)
    db.session.commit()
    return jsonify(new_assessment.to_dict()), 201

@assessment_bp.route('/assessments/<int:id>', methods=['PUT'])
@jwt_required()
def update_assessment(id):
    assessment = Assessments.query.get(id)
    user_identity = get_jwt_identity()
    user_claims = get_jwt()
    if user_claims.get("user_type") != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only student can access this route"}), 403
    if (user_claims.get("user_id") != assessment.sender_id):
        return jsonify({"Response" : "INVALID", "Reason": "Assessment update is not allowed by current logged in student"}), 403

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
@jwt_required()
def delete_assessment(id):
    user_identity = get_jwt_identity()

    user_claims = get_jwt()
    if user_claims.get("user_type") != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only student can access this route"}), 403
    if (user_claims.get("user_id") != assessment.sender_id):
        return jsonify({"Response" : "INVALID", "Reason": "Assessment update is not allowed by current logged in student"}), 403
    assessment = Assessments.query.get(id)
    if not assessment:
        return jsonify({"Response": "INVALID", "Reason": "Assessment not found"}), 404
    db.session.delete(assessment)
    db.session.commit()
    return jsonify({"Response": "VALID", "Reason": "Assessment deleted successfully"}), 200


#mod mathieu
#Get asssesments for receiver
@assessment_bp.route('/assessments/receiver', methods=['GET'])
@jwt_required()
def get_receiver_assessments():
    user_identity = get_jwt_identity()
    user_claims = get_jwt()
    if user_claims.get("user_type") != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only student can access this route"}), 403

    assessments = Assessments.query.filter_by(receiver_id = user_identity["user_id"]).all()
    return jsonify({"Response" : "VALID", "Assessments" : [assessment.to_dict() for assessment in assessments]}), 200


#Marc
#Get assessments for a student 
@assessment_bp.route('/assessments/student/<int:id>', methods=['GET'])
@jwt_required()
def get_student_assessments(id):
    assessments = Assessments.query.filter_by(receiver_id = id).all()

    if len(assessments) == 0:
        return jsonify({"Response": "Valid", "Assessments": []}),200

    return jsonify({"Response" : "VALID", "Assessments" : [assessment.to_dict() for assessment in assessments]}), 200



#Get assemssment for receiver - Instructor
@assessment_bp.route('/assessments/receiver/<int:student_id>', methods=['GET'])
@jwt_required()
def get_sender_assessments_id(student_id):
    user_identity = get_jwt_identity()

    user_claims = get_jwt()
    if user_claims.get("user_type") != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only student can access this route"}), 403

    assessments = Assessments.query.filter_by(receiver_id = student_id).all()
    return jsonify({"Response" : "VALID", "Assessments" : assessments.to_dict()}), 200


#get assessments for sender (which should be the current student that is logged in)
@assessment_bp.route('/assessments/sender', methods=['GET'])
@jwt_required()
def get_sender_assessments():
    user_identity = get_jwt_identity()

    user_claims = get_jwt()
    if user_claims.get("user_type") != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only student can access this route"}), 403
    
    
    assessments = Assessments.query.filter_by(sender_id = user_identity["user_id"]).all()
    return jsonify({"Response" : "VALID", "Assessments" : assessments.to_dict()}), 200

# @assessment_bp.route('/assessments/sender/<int:student_id>', methods=['GET'])
# @jwt_required()
# def get_sender_assessments_id(student_id):
#     user_identity = get_jwt_identity()

#     if user_identity["user_type"] != "teacher":
#         return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    
#     assessments = Assessments.query.filter_by(sender_id = student_id).all()
#     return jsonify({"Response" : "VALID", "Assessments" : assessments.to_dict()}), 200

# @assessment_bp.route('/assessments/receiver/<int:student_id>', methods=['GET'])
# @jwt_required()
# def get_sender_assessments_id(student_id):
#     user_identity = get_jwt_identity()

#     if user_identity["user_type"] != "teacher":
#         return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    
#     assessments = Assessments.query.filter_by(receiver_id = student_id).all()
#     return jsonify({"Response" : "VALID", "Assessments" : assessments.to_dict()}), 200



def check_students_in_same_team(sender_id, receiver_id):
    # Check if both students are in the same team
    sender_team = StudentTeam.query.filter_by(student_id=sender_id).first()
    receiver_team = StudentTeam.query.filter_by(student_id=receiver_id).first()

    return sender_team and receiver_team and sender_team.team_id == receiver_team.team_id
