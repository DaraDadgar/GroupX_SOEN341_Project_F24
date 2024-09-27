from flask import Blueprint, jsonify, request
from app.models.students import Students
from app.models.teams import Teams
from app.models.student_team import StudentTeam
from app import db

team_bp = Blueprint('team_bp', __name__)

@team_bp.route('/teams', methods=['GET'])
def get_teams():
    teams = Teams.query.all()
    team_list = [{"id": team.id, "name": team.name} for team in teams]
    return jsonify(team_list), 200

@team_bp.route('/teams/<int:id>', methods=['GET'])
def get_team(id):
    students_in_team = StudentTeam.query.filter_by(team_id=id).all()
    students = [Students.query.get(student.student_id).to_dict() for student in students_in_team]
    return jsonify(students), 200

@team_bp.route('/teams', methods=['POST'])
def create_team():
    team_name = request.json['name']
    students_emails = request.json['student_emails']

    new_team = Teams(name=team_name)
    db.session.add(new_team)
    db.session.commit()

    for email in students_emails:
        student = Students.query.filter_by(email=email).first()
        if student:
            new_student_team = StudentTeam(student_id=student.id, team_id=new_team.id)
            db.session.add(new_student_team)
            db.session.commit()
        else:
            return jsonify({"Response": "INVALID", "Reason": f"Student {email} not found"}), 400

    return jsonify({"Response": "VALID"}), 201

@team_bp.route('/teams/<int:id>/students', methods=['GET'])
def get_students_from_team():
    student_teams = StudentTeam.query.filter_by(team_id=id).all()
    
    student_ids = [student_team.student_id for student_team in student_teams]

    students = Students.query.filter(Students.id.in_(student_ids)).all()

    student_list = [{"id": student.id, "name": student.name, "email": student.email} for student in students]

    return jsonify(student_list), 200