from app.extensions import db

# Association table for the many-to-many relationship
student_course_association = db.Table('student_course',
    db.Column('student_id', db.Integer, db.ForeignKey('students.id'), primary_key=True),
    db.Column('course_id', db.Integer, db.ForeignKey('courses.id'), primary_key=True),
    db.Column('is_available', db.Boolean, default=True)  # Availability flag for the student in the course
)

# Linking Table for Teams and Students
student_team_association = db.Table('student_team',
    db.Column('student_id', db.Integer, db.ForeignKey('students.id'), primary_key=True),
    db.Column('team_id', db.Integer, db.ForeignKey('teams.id'), primary_key=True),
)


class Student(db.Model):
    __tablename__ = 'students'  # Table name in the database

    id = db.Column(db.Integer, primary_key=True)  # Primary key
    first_name = db.Column(db.String(50), nullable=False)  # First name
    last_name = db.Column(db.String(50), nullable=False)  # Last name
    username = db.Column(db.String(50), unique=True, nullable=False)  # Unique username
    email = db.Column(db.String(100), unique=True, nullable=False)  # Unique email
    password = db.Column(db.String(100), nullable=False)  # Password


    def to_dict(self):
        return {'id': self.id, 'first_name': self.first_name, 'last_name': self.last_name, 'username': self.username, 
                'email': self.email}
    
    def user_type(self):
        return "student";
    
    def __repr__(self):
        return f"<Student {self.email}>"
    

class Teacher(db.Model):
    __tablename__ = 'teachers'  # Table name in the database

    id = db.Column(db.Integer, primary_key=True)  # Primary key
    first_name = db.Column(db.String(50), nullable=False)  # First name
    last_name = db.Column(db.String(50), nullable=False)  # Last name
    username = db.Column(db.String(50), unique=True, nullable=False)  # Unique username
    email = db.Column(db.String(100), unique=True, nullable=False)  # Unique email
    password = db.Column(db.String(100), nullable=False)  # Password


    def to_dict(self):
        return {'id': self.id, 'first_name': self.first_name, 'last_name': self.last_name, 'username': self.username, 
                'email': self.email}
    
    def user_type(self):
        return "teacher";
    
    def __repr__(self):
        return f"<Teacher {self.email}>"
    

class Course(db.Model):
    __tablename__ = 'courses'

    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(10), unique=True, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    teacher_id = db.Column(db.Integer, db.ForeignKey('teachers.id'))

    teacher = db.relationship('Teacher', backref='courses')

    # This line allows you to access the students enrolled in a course
    students = db.relationship('Student', secondary=student_course_association, backref='courses')

    def __repr__(self):
        return f"<Course {self.title}>"
    

class Team(db.Model):
    __tablename__ = 'teams'

    id = db.Column(db.Integer, primary_key=True)  # Primary key
    name = db.Column(db.String(100), nullable=False)  # Team name
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'))  # Reference to the course
    course = db.relationship('Course', backref='teams')  # Relationship to Course
    students = db.relationship('Student', secondary='student_team', backref='teams')  # Many-to-many relationship with Student

