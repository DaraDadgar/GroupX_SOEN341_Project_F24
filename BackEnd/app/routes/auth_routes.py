from flask import Blueprint, request, jsonify, session
from app.models import StudentTeam, Students, Teachers, Teams
from app.extensions import db

auth_bp = Blueprint('auth_bp', __name__)

@auth_bp.route('/login', methods=['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    user_type = request.json['type']

    table = Students if user_type == "student" else Teachers
    user = table.query.filter_by(email=email, password=password).first()

    if user is None:
        return jsonify({"Response": "ERROR", "type": "None"}), 401
    else:
        session['email'] = email
        session['id'] = user.id
        return jsonify({"Response": "VALID", "type": user_type}), 202

@auth_bp.route('/signup', methods=['POST'])
def signup():
    email = request.json['email']
    password = request.json['password']
    user_type = request.json['type']

    table = Students if user_type == "student" else Teachers
    new_user = table(email=email, password=password)

    if table.query.filter_by(email=email).first() is None:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"Response": "VALID", "type": user_type}), 201
    else:
        return jsonify({"Response": "ERROR", "type": "None"}), 400

@auth_bp.route('/logout', methods=['GET'])
def logout():
    session.clear()
    return jsonify({"Response": "LOGGED OUT"}), 200

@auth_bp.route('/', methods=['GET'])
def test():
    return "test"