from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))

    def repr(self):
        return f'{self.name}'
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password 
        }


class Teachers(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password 
        }

class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class StudentTeam(db.Model):
    student_id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, primary_key = True)
    def to_dict(self):
        return {
            'student_id': self.student_id,
            'team_id': self.team_id,
        }