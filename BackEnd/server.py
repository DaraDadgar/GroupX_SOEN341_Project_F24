from flask import Flask, jsonify, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import timedelta

from models import Students, StudentTeams, Teachers, Teams, db


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

If a student logs in: @returns "STUDENT"
If a teacher logs in: @returns "TEACHER"
if invalid login    : @returns "ERROR"

Expects a form with email and password
"""
@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        student = Students.query.filter_by(email=email, password=password).first()


        if student is None:
            return "INVALID STUDENT"
        else:
            session['email'] = email


            return "VALID STUDENT"
    else:
        return "INVALID USER"
    

"""
SIGNUP ROUTE

If a student signs up: @returns "STUDENT"
If a teacher signs up: @returns "TEACHER"
if invalid login    : @returns "ERROR"

Expects a form with email and password
"""
@app.route('/signup', methods = ["POST"])
def signup():
    return 0


"""
CREATE TEAM ROUTE

Expects a form with two attributes:
name: team name
students: array of students to be included in team

Expects a form with email and password
"""
@app.route('/createTeam', methods = ["POST"])
def createTeam():
    return 0

"""
DISPLAY TEAM ROUTE

Returns a JSON object of all the teams                                                                                                                                                                                                                                                                                          ``````` `

Expects a form with email and password
"""
@app.route('/displayTeams', methods = ['GET'])
def displayTeams():
    teams = Teams.query.all()
    student_seperated_in_teams = []
    for team in teams:
        students_in_team_id = StudentTeams.query.filter_by(team_id = team.id).all()
        student_emails = []
        for student in students_in_team_id:
            students_in_team = Students.query.filter_by(id = student.student_id).all()
            student_emails.append(students_in_team.email)
        
        curr_team_with_students = {"tid": team.id, "students": student_emails}
        student_seperated_in_teams.append(curr_team_with_students)
    
    return student_seperated_in_teams

    


@app.route('/logout')
def logout():
    session.clear()
    return "LOGGED OUT"
    


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


