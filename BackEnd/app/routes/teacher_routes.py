from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required

from app.models import Teacher
from app.extensions import db

# Create a Blueprint for the routes
teacher_bp = Blueprint('teacher_bp', __name__)

@teacher_bp.route('/teachers', methods=['GET'])
def get_teachers():
    try:
        teachers = Teacher.query.all()  # Query all students
        return jsonify([teacher.to_dict() for teacher in teachers]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500