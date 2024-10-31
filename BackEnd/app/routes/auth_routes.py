from flask import Blueprint, request, jsonify, session
from app.models import StudentTeam, Students, Teachers, Teams, Assessments
from app.extensions import db

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route("/testpost", methods=['POST'])
def test_post():
    session['email'] = "testemail"
    return jsonify(["testamil"]), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    user_type = request.json['type']

    table = Students if user_type == "student" else Teachers
    user = table.query.filter_by(email=email, password=password).first()
    if user is None:
        return jsonify({"Response": "ERROR", "type": "None", "Message": "User does not exist"}), 401
    else:
        session['email'] = email
        session['id'] = user.id
        session['user_type'] = user_type
        return jsonify({"Response": "VALID", "type": user_type, "user" : user.password}), 202

@auth_bp.route('/signup', methods=['POST'])
def signup():
    email = request.json['email']
    password = request.json['password']
    user_type = request.json['type']
    name = request.json['name']

    if user_type == "student":
        new_user = Students(email=email, password=password, name=name, is_available=True)
    else:
        new_user = Teachers(email=email, password=password, name=name)

    table = Students if user_type == "student" else Teachers
    if table.query.filter_by(email=email).first() is None:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"Response": "VALID", "type": user_type}), 201
    else:
        return jsonify({"Response": "ERROR", "type": "None", "Message": "Email already in use"}), 400

@auth_bp.route('/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({"Response": "LOGGED OUT"}), 200


@auth_bp.route('/session', methods=['GET'])
def get_session():
    if(session.get('email') is None):
        return jsonify({"Response" : "no session", "Type" : "none"}), 401
    else:
        return jsonify({"Response" : "active session", "Type" : session['user_type']}), 201

@auth_bp.route('/test', methods=['GET'])
def test():
    session['email'] = "math@hotmail.com"

    return "test"