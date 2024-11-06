from flask import Blueprint, jsonify, request
from app.extensions import db
from app.models import StudentTeam, Students, Teachers, Teams, Assessments
from flask_jwt_extended import jwt_required, get_jwt_identity

team_bp = Blueprint('team_bp', __name__)

@team_bp.route('/teams', methods=['GET'])
@jwt_required()
def get_teams():
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    teams = Teams.query.all()
    team_list = [team.to_dict() for team in teams]
    return jsonify(team_list), 200

@team_bp.route('/teams/<int:id>', methods=['GET'])
@jwt_required()
def get_team(id):
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    students_in_team = StudentTeam.query.filter_by(team_id=id).all()
    students = [Students.query.get(student.student_id).to_dict() for student in students_in_team]
    return jsonify(students), 200

@team_bp.route('/teams', methods=['POST'])
@jwt_required()
def create_team():
    team_name = request.json['name']
    students_emails = request.json['student_emails']
    
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403

    existing_team = Teams.query.filter_by(name=team_name).first()
    if existing_team:
        return jsonify({"Response": "INVALID", "Reason": "Team name already exists"}), 400

    new_team = Teams(name=team_name)
    db.session.add(new_team)

    for email in students_emails:
        student = Students.query.filter_by(email=email).first()
        if student:
            if student.is_available:
                new_student_team = StudentTeam(student_id=student.id, team_id=new_team.id)
                db.session.add(new_student_team)
                student.is_available = False
            else:
                db.session.rollback()
                return jsonify({"Response": "INVALID", "Reason": f"Student {email} is not available"}), 400
        else:
            db.session.rollback()
            return jsonify({"Response": "INVALID", "Reason": f"Student {email} not found"}), 400

    db.session.commit()
    return jsonify({"Response": "VALID"}), 201

@team_bp.route('/teams/<int:id>', methods=['DELETE'])
@jwt_required()
def delete_team(id):
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    
    team = Teams.query.get(id)
    if not team:
        return jsonify({"Response": "INVALID", "Reason": "Team not found"}), 404

    student_teams = StudentTeam.query.filter_by(team_id=id).all()
    for student_team in student_teams:
        student = Students.query.get(student_team.student_id)
        if student:
            student.is_available = True

    StudentTeam.query.filter_by(team_id=id).delete()
    db.session.delete(team)
    db.session.commit()

    return jsonify({"Response": "VALID", "Reason": "Team deleted successfully"}), 200

@team_bp.route('/teams/<int:id>', methods=['PUT'])
@jwt_required()
def update_team(id):
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403

    team = Teams.query.get(id)
    if not team:
        return jsonify({"Response": "INVALID", "Reason": "Team not found"}), 404

    team_name = request.json.get('name')
    if team_name:
        existing_team = Teams.query.filter_by(name=team_name).first()
        if existing_team and existing_team.id != id:
            return jsonify({"Response": "INVALID", "Reason": "Team name already exists"}), 400
        team.name = team_name

    students_emails = request.json.get('student_emails')
    if students_emails is not None:
        current_student_teams = StudentTeam.query.filter_by(team_id=id).all()
        for student_team in current_student_teams:
            student = Students.query.get(student_team.student_id)
            if student:
                student.is_available = True

        StudentTeam.query.filter_by(team_id=id).delete()

        for email in students_emails:
            student = Students.query.filter_by(email=email).first()
            if student:
                new_student_team = StudentTeam(student_id=student.id, team_id=team.id)
                db.session.add(new_student_team)
                student.is_available = False
            else:
                db.session.rollback()
                return jsonify({"Response": "INVALID", "Reason": f"Student {email} not found"}), 400

    db.session.commit()
    return jsonify({"Response": "VALID", "Reason": "Team updated successfully"}), 200

@team_bp.route('/teams/<int:id>/students', methods=['GET'])
@jwt_required()
def get_students_from_team(id):
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    
    student_teams = StudentTeam.query.filter_by(team_id=id).all()
    student_ids = [student_team.student_id for student_team in student_teams]
    students = Students.query.filter(Students.id.in_(student_ids)).all()

    student_list = [student.to_dict() for student in students]
    return jsonify(student_list), 200
