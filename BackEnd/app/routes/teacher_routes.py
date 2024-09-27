from flask import Blueprint, jsonify
from app.models.teachers import Teachers

teacher_bp = Blueprint('teacher_bp', __name__)

@teacher_bp.route('/teachers', methods=['GET'])
def get_teachers():
    teachers = Teachers.query.all()
    teachers_list = [{"id": teacher.id, "name": teacher.name, "email": teacher.email} for teacher in teachers]
    return jsonify(teachers_list), 200
