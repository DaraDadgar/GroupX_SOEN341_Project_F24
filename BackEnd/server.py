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
    user = None
    
    if (type == "student"):
        user = Students.query.filter_by(email=email, password=password).first()
    else:
        user = Teachers.query.filter_by(email=email, password=password).first()

    if user is None:
        response = {"Response" : "ERROR", "type" : "None"}
        return response  
    else:
        session['email'] = email
        response = {"Response": "VALID", "type" : type}
        return response
    

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
        
        response = {"Response": "VALID", "type" : type}
        return response
    else:
        response = {"Response" : "ERROR", "type" : "None"}
        return response
        

"""
CREATE TEAM ROUTE

Expects a form with two attributes:
name: team name
students_emails: array of students' emails to be included in team

If team is created: @returns {Response: "VALID"}
If team contains one student which is already in a team: @returns {Response: "INVALID"}
"""
@app.route('/create_team', methods = ["POST"])
def create_team():
    students_emails =  request.form.getlist('students_emails')
    team_name = request.json['name']
    students_ids = []
    
    #Adds the ids of students in students_ids, or returns invalid response if student is already in team
    for student_email in students_emails:
        added_student = Students.query.filter_by(email = student_email).first()
        added_student_inST = StudentTeam.query.filter_by(student_id = added_student.id).first()
        if (added_student_inST is not None):
            response = {"Response" : "INVALID"}
            return response
        else:
            students_ids.append(added_student.id)

    
    new_team = Teams(name = team_name)
    db.session.add(new_team)
    db.session.commit()
    
    for student_id in students_ids:
        new_student_team = StudentTeam(student_id = student_id, team_id = new_team.id)
        db.session.add(new_student_team)
        db.session.commit()
    
    response = {"Response":"VALID"}
    return response



"""
DISPLAY TEAM ROUTE

Returns a JSON object of all the teams                                                                                                                                                                                                                                                                                          ``````` `
"""
@app.route('/display_teams', methods = ['GET'])
def display_teams():
    teams = Teams.query.all()
    student_seperated_in_teams = []
    for team in teams:
        students_in_team_id = StudentTeam.query.filter_by(team_id = team.id).all()
        student_emails = []
        for student in students_in_team_id:
            students_in_team = Students.query.filter_by(id = student.student_id).all()
            student_emails.append(students_in_team.email)
        
        curr_team_with_students = {"tid": team.id, "students": student_emails}
        student_seperated_in_teams.append(curr_team_with_students)
    
    return student_seperated_in_teams

    
"""
DISPLAY MY TEAM ROUTE

To look at the current logged in student and his team

"""

@app.route('/display_my_team')
def display_my_team():
    return

@app.route('/logout')
def logout():
    session.clear()
    return "LOGGED OUT"
    


##DUMMY ROUTES DONT LOOK TY
@app.route('/addStudent', methods = ['GET'])
def addStudent():
    student = Students(email = "carl@hotmail.com", name = "carl", password = "password1234")
    db.session.add(student)
    db.session.commit()
    return "0"

@app.route('/showAllStudents', methods = ['GET'])
def showStudents():
    students = Students.query.all()
    students_list = [{"id":student.id, "name":student.name, "email":student.email, "password":student.password} for student in students]

    for student in students_list:
        print(student)
    
    return "0"


if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


