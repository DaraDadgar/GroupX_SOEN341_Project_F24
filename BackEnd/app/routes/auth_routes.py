from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token, jwt_required

from app.models import Student, Teacher
from app.extensions import db

# Create a Blueprint for the routes
auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        user_info = Student.query.filter_by(email=data['email']).first() if data['user_type']=="student" else Teacher.query.filter_by(email=data['email']).first()

        if user_info is None:
            return jsonify('The email does not exist. Please sign up.')
        
        if data['password'] != user_info.password:
            return jsonify('Wrong password. Please try again')
        
        if (data.get('user_type')==""):
            return jsonify('Invalid Request. Data type not specified.')

        access_token = create_access_token(identity=data['email'])
        return jsonify({'access_token': access_token,'user_type': user_info.user_type() ,'user_info': user_info.to_dict()}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@auth_bp.route('/signup', methods=['POST'])
def signup():
    try:
        data = request.json
        new_user = Student(first_name=data["first_name"],last_name=data["last_name"],username=data["username"],email=data["email"],
        password=data["password"]) if data['user_type']=="student" else Teacher(first_name=data["first_name"],last_name=data["last_name"],
        username=data["username"],email=data["email"],password=data["password"])
        db.session.add(new_user)
        db.session.commit()
        student = Student.query.get(1)  # Query the student by ID

        if student is None:
            return jsonify({'error': 'Student not added!'}), 404  # Return 404 if not found

        return jsonify({'id': student.id, 'name': student.first_name}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@auth_bp.route('/teachers', methods=['GET'])
def get_teachers():
    try:
        teachers = Teacher.query.all()  # Query all students
        return jsonify([teacher.to_dict() for teacher in teachers]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth_bp.route('/test', methods=['GET'])
def test_connection():
    return jsonify("Request received successfully");

@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify("You broke the CORS ass")