from flask import Flask, jsonify, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from datetime import timedelta



from models import Students, StudentTeam, Teachers, Teams, db


app = Flask(__name__)
app.secret_key = "super_secret_thang"
cors = CORS(app, supports_credentials = True)
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
        session['type'] = type
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
    name = request.json['first-name'] + " " + request.json['last-name']
    email = request.json['email']
    password = request.json['password']
    type = request.json['type']
    
    
    table = Students if type == "student" else Teachers
    new_user = table(email = email, password = password, name = name)
    
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
    return jsonify([student.to_dict() for student in students]), 201

@app.route('/teams', methods = ["GET"])
def teams():
    teams = Teams.query.all()
    return jsonify([team.to_dict() for team in teams]), 201

@app.route('/teams/<id>')
def get_team(id):
    students_inST = StudentTeam.query.filter_by(team_id = id).all()
    students = []
    for student_inST in students_inST:
        student = Students.query.filter_by(id = student_inST.student_id).first()
        students.push(student)
    return jsonify(students)

@app.route("/student_team")
def student_team():
    student_team = StudentTeam.query.all()
    return jsonify([st.to_dict() for st in student_team])

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
    students = request.json['students']
    team_name = request.json['name']
    
    new_team = Teams(name = team_name)
    db.session.add(new_team)
    db.session.commit()

    for id in students:
        new_student_team = StudentTeam(student_id = id, team_id = new_team.id)
        db.session.add(new_student_team)
        db.session.commit()
    
    response = {"Response":"VALID"}, 201
    return jsonify(response)


"""
DISPLAY MY TEAM ROUTE

To look at the current logged in student and his team
"""

@app.route('/display_my_team')
def display_my_team():
    team_id = StudentTeam.query.filter_by(student_id = session['id']).first().team_id
    students_in_my_team_inST = StudentTeam.query.filter_by(team_id = team_id).all()
    students_in_my_team = []
    for student_inST in students_in_my_team_inST:
        student_id = student_inST.student_id
        student = Students.query.filter_by(id = student_id).first()
        students_in_my_team.append(student.to_dict())

    response = {"team_id": team_id, "students": students_in_my_team}
    print(response)
    return jsonify(response), 201
        


@app.route('/teams/<int:id>/students', methods=['GET'])
def get_students_from_team():
    student_teams = StudentTeam.query.filter_by(team_id=id).all()

    student_ids = [student_team.student_id for student_team in student_teams]

    students = Students.query.filter(Students.id.in_(student_ids)).all()

    student_list = [{"id": student.id, "name": student.name, "email": student.email} for student in students]

    return jsonify(student_list), 200 
        

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










@app.route('/test2', methods = ['GET'])
def test2():
    session['hello'] = "hi"
    return jsonify(session)

@app.route('/test', methods = ['GET'])
def test():
    print(session)
    return jsonify(session)
if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


