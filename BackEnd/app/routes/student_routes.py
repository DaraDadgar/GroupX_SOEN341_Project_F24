from flask import Blueprint, jsonify
from app.models import StudentTeam, Students, Teachers, Teams, Assessments
from sqlalchemy import event
from app.extensions import db

student_bp = Blueprint('student_bp', __name__)

@student_bp.route('/students', methods=['GET'])
def get_students():
    students = Students.query.all()
    students_list = [student.to_dict() for student in students]
    return jsonify(students_list), 200

@student_bp.route('/students/available', methods=['GET'])
def get_available_students():
    available_students = Students.query.filter_by(is_available=True).all()
    students_list = [student.to_dict() for student in available_students]
    return jsonify(students_list), 200

@student_bp.route('/students/<int:id>/team', methods=['GET'])
def get_student_team(id):
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