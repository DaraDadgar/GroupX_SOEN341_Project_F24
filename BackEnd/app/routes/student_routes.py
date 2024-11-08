from flask import Blueprint, jsonify
from app.models import StudentTeam, Students, Teachers, Teams, Assessments
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy import event
from app.extensions import db

student_bp = Blueprint('student_bp', __name__)

@student_bp.route('/students', methods=['GET'])
@jwt_required()
def get_students():
    students = Students.query.all()
    students_list = [student.to_dict() for student in students]
    return jsonify(students_list), 200

@student_bp.route('/students/available', methods=['GET'])
@jwt_required()
def get_available_students():
    user_identity = get_jwt_identity()
    if user_identity["user_type"] != "teacher":
        return jsonify({"Response": "INVALID", "Reason": "Only teachers can access this route"}), 403
    available_students = Students.query.filter_by(is_available=True).all()
    students_list = [student.to_dict() for student in available_students]
    return jsonify(students_list), 200

@student_bp.route('/students/<int:id>/team', methods=['GET'])
@jwt_required()
def get_student_team(id):
    user_identity = get_jwt_identity()

    if user_identity["user_type"] != "student":
       return jsonify({"Response": "INVALID", "Reason": "Only students can access this route"}), 403

    student = Students.query.get(id)
    if not student:
        return jsonify({"Response": "INVALID", "Reason": "Student not found"}), 404

    student_team = StudentTeam.query.filter_by(student_id=id).first()
    if not student_team:
        return jsonify({"Response": "INVALID", "Reason": "Student is not in a team"}), 404

    team = Teams.query.get(student_team.team_id)
    if not team:
        return jsonify({"Response": "INVALID", "Reason": "Team not found"}), 404

    return jsonify({"Response": "VALID", "Team": team.to_dict()}), 200

@student_bp.route('/students/team', methods=['GET'])
@jwt_required()
def get_student_team_by_token():
    user_identity = get_jwt_identity()
    
    if user_identity["user_type"] != "student":
        return jsonify({"Response": "INVALID", "Reason": "Only students can access this route"}), 403

    student_id = user_identity["user_id"]

    student = Students.query.get(student_id)
    if not student:
        return jsonify({"Response": "INVALID", "Reason": "Student not found"}), 404

    student_team = StudentTeam.query.filter_by(student_id=student_id).first()
    if not student_team:
        return jsonify({"Response": "INVALID", "Reason": "Student is not in a team"}), 404

    team = Teams.query.get(student_team.team_id)
    if not team:
        return jsonify({"Response": "INVALID", "Reason": "Team not found"}), 404

    return jsonify({"Response": "VALID", "Team": team.to_dict()}), 200