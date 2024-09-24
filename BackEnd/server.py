from flask import Flask, jsonify, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from models import Students, StudentTeams, Teachers, Teams, db


app = Flask(__name__)
app.secret_key = "hello"
cors = CORS(app, origins ="*")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'




db.init_app(app)

with app.app_context():
    db.create_all()



@app.route('/')
def home():
    return "Welcome to the Flask Server!"

@app.route('/login', methods = ['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.json['email']
        password = request.json['password']
        student = Students.query.filter_by(email=email).first()
        if student is None:

            return "hello"
        else:
            print("exists")
            return "exists"
        
        return "posted"
    else:

        student = Students.query.filter_by(email="hello").first()
        print(student)
        return "getted"
    

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

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    return "a"

if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


