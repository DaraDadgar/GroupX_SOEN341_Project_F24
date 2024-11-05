from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import jwt_required

from app.extensions import db, cors, jwt
from app.models import Student, Teacher, Course, Team

from app.routes.auth_routes import auth_bp  # Import the Blueprint
from app.routes.student_routes import student_bp
from app.routes.teacher_routes import teacher_bp

import random

app = Flask(__name__)
cors.init_app(app)

app.config['JWT_SECRET_KEY'] = 'XAEA-II'  # Change this to a secure key
jwt.init_app(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


# Register the Blueprint
app.register_blueprint(auth_bp)
app.register_blueprint(student_bp)
app.register_blueprint(teacher_bp)


# Testing functions
def test_models():
    with app.app_context():
        db.session.remove()
        db.drop_all()
        db.create_all()
        student_data = [
            {"first_name": "Alice", "last_name": "Smith", "username": "asmith", "email": "asmith@example.com", "password": "password"},
            {"first_name": "Bob", "last_name": "Jones", "username": "bjones", "email": "bjones@example.com", "password": "password"},
            {"first_name": "Charlie", "last_name": "Brown", "username": "cbrown", "email": "cbrown@example.com", "password": "password"},
        ]

        teacher_data = [
            {"first_name": "John", "last_name": "Doe", "username": "jdoe", "email": "jdoe@example.com", "password": "password"},
            {"first_name": "Jane", "last_name": "Doe", "username": "janedoe", "email": "janedoe@example.com", "password": "password"},
        ]

        course_data = [
            {"code": "MATH101", "title": "Calculus I", "description": "Introduction to calculus concepts."},
            {"code": "PHYS101", "title": "Physics I", "description": "Basic principles of physics."},
            {"code": "CS101", "title": "Intro to Programming", "description": "Learn the basics of programming in Python."},
        ]

        team_data = [
            {"name": "Team Alpha"},
            {"name": "Team Beta"},
            {"name": "Team Gamma"},
        ]

        # Populate teachers
        teachers = []
        for data in teacher_data:
            teacher = Teacher(**data)
            db.session.add(teacher)
            teachers.append(teacher)

        # Populate students
        students = []
        for data in student_data:
            student = Student(**data)
            db.session.add(student)
            students.append(student)

        # Populate courses and assign each to a teacher
        courses = []
        for idx, data in enumerate(course_data):
            course = Course(**data, teacher=teachers[idx % len(teachers)])  # Assign teachers in round-robin fashion
            db.session.add(course)
            courses.append(course)

        # Commit students, teachers, and courses
        db.session.commit()

        # Associate students with courses
        for course in courses:
            selected_students = random.sample(students, 2)  # Each course gets 2 random students
            for student in selected_students:
                student.courses.append(course)
        db.session.commit()

        # Populate teams and assign each to a course
        for idx, data in enumerate(team_data):
            team = Team(**data, course=courses[idx % len(courses)])  # Assign teams to courses in round-robin fashion
            db.session.add(team)

            # Add students to teams ensuring one student per team per course
            selected_students = random.sample(students, 2)
            for student in selected_students:
                team.students.append(student)
        db.session.commit()

        # Output some data to verify
        print("Teachers:")
        for teacher in teachers:
            print(teacher.to_dict())

        print("\nCourses:")
        for course in courses:
            print(f"{course.title}: {[student.username for student in course.students]}")

        print("\nTeams:")
        for team in Team.query.all():
            print(f"{team.name} in {team.course.title}: {[student.username for student in team.students]}")


if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # Create the database tables
        # Add a test student (optional)
        if Student.query.count() == 0:
            test_student = Student(first_name="Marc", last_name="Hab", username="MarcHab123", email="marchab@gmail.com", password="1")
            db.session.add(test_student)
            db.session.commit()
    test_models();
    app.run(debug=True)
