from flask import Flask, jsonify, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import timedelta

from models import Students, StudentTeam, Teachers, Teams, db


app = Flask(__name__)
app.secret_key = "super_secret_thang"
cors = CORS(app, origins ="*")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'



db.init_app(app)



with app.app_context():
    db.create_all()



@app.route('/')
def home():
    return "Welcome to the Flask Server!"



"""
LOGIN ROUTE

If a student logs in: @returns {response : "VALID", type : "student"}
If a teacher logs in: @returns {response : "VALID", type : "teacher"}
if invalid login    : @returns {response : "ERROR", type : "None"}

Expects a form with email, password and type(for student or instructor)
"""
@app.route('/login', methods = ['POST'])
def login():
    email = request.json['email']
    password = request.json['password']
    type = request.json['type']
    
    table = Students if type == "student" else Teachers
    user = table.query.filter_by(email = email, password = password).first()

    if user is None:
        response = {"Response" : "ERROR", "type" : "None"}, 401
        return jsonify(response)  
    else:
        
        #Can change session attribute later
        session['email'] = email
        session['id'] = user.id
        response = {"Response": "VALID", "type" : type}, 202
        return jsonify(response)
    

"""
SIGNUP ROUTE

If a student signs up: @returns {response: "VALID", type : "student"}
If a teacher signs up: @returns {response: "VALID, type: "teacher"}
if email already exists in db : @returns {response: "ERROR", type: "None"}

Expects a form with email, password and type
"""
@app.route('/signup', methods = ["POST"])
def signup():
    email = request.json['email']
    password = request.json['password']
    type = request.json['type']
    
    
    table = Students if type == "student" else Teachers
    new_user = table(email = email, password = password)
    
    if(table.query.filter_by(email = email).first() is None):
        db.session.add(new_user)
        db.session.commit()
        
        response = {"Response": "VALID", "type" : type}, 201
        return jsonify(response)
    else:
        response = {"Response" : "ERROR", "type" : "None"}, 400
        return jsonify(response)

@app.route('/students', methods=["GET"])
def students():
    students = Students.query.all()
    return jsonify(students), 201

@app.route('/teams', methods = ["GET"])
def teams():
    teams = Teams.query.all()
    return jsonify(teams), 201

@app.route('/teams/<id>')
... (125 lines left)