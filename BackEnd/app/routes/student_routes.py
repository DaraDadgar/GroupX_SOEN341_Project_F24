from flask import Blueprint, jsonify
from models.students import Students

student_bp = Blueprint('student_bp', __name__)

@student_bp.route('/students', methods=['GET'])
def get_students():
    students = Students.query.all()
    students_list = [{"id": student.id, "name": student.name, "email": student.email} for student in students]
    return jsonify(students_list), 200
