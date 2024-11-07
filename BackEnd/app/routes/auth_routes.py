from flask import Blueprint, request, jsonify
from flask_jwt_extended import (
    create_access_token, jwt_required, get_jwt_identity, get_jwt
)
from datetime import datetime, timedelta, timezone
from app.models import StudentTeam, Students, Teachers, Teams, Assessments, BlacklistedToken
from app.extensions import db

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    email = request.json.get('email')
    password = request.json.get('password')
    user_type = request.json.get('type')

    # Determine the table based on user type
    table = Students if user_type == "student" else Teachers
    user = table.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({"Response": "ERROR", "type": "None", "Message": "User does not exist"}), 401
    else:
        # Generate JWT token
        access_token = create_access_token(identity={"user_id": user.id, "user_type": user_type, "user_name": user.name}, expires_delta=timedelta(hours=2))
        return jsonify({"Response": "VALID", "type": user_type, "token": access_token}), 202

@auth_bp.route('/signup', methods=['POST'])
def signup():
    email = request.json.get('email')
    password = request.json.get('password')
    user_type = request.json.get('type')
    name = request.json.get('name')

    # Choose the correct table
    table = Students if user_type == "student" else Teachers
    if table.query.filter_by(email=email).first() is None:
        # Create new user
        new_user = table(email=email, password=password, name=name)
        db.session.add(new_user)
        db.session.commit()
        
        # Generate JWT token upon signup
        access_token = create_access_token(identity={"user_id": new_user.id, "user_type": user_type}, expires_delta=timedelta(hours=2))
        return jsonify({"Response": "VALID", "type": user_type, "token": access_token}), 201
    else:
        return jsonify({"Response": "ERROR", "type": "None", "Message": "Email already in use"}), 400

# Logout route with JWT blacklisting
@auth_bp.route('/logout', methods=['GET'])
@jwt_required()
def logout():
    # Get the unique JWT ID (jti) from the current JWT token
    jti = get_jwt()['jti']
    expires = datetime.now(timezone.utc) + timedelta(hours=2)
    
    # Add the jti to the blacklist
    blacklisted_token = BlacklistedToken(jti=jti, expires_at=expires)
    db.session.add(blacklisted_token)
    db.session.commit()
    
    return jsonify({"Response": "LOGGED OUT"}), 200

# Token-protected test route
@auth_bp.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    user_identity = get_jwt_identity()
    return jsonify(logged_in_as=user_identity), 200

@auth_bp.route('/', methods=['GET'])
def test():
    return "test"