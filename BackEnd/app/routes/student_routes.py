from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required

from app.models import Student
from app.extensions import db

# Create a Blueprint for the routes
student_bp = Blueprint('student_bp', __name__)

@student_bp.route('/students', methods=['GET'])
def get_students():
    try:
        students = Student.query.all()  # Query all students
        return jsonify([student.to_dict() for student in students]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500