from app.extensions import db
from datetime import datetime

class StudentTeam(db.Model):
    student_id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, primary_key = True)
    def to_dict(self):
        return {
            'student_id': self.student_id,
            'team_id': self.team_id,
        }
        
class Students(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))
    is_available = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f'{self.name}'

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'password': self.password,
            'is_available': self.is_available
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
    name = db.Column(db.String(120), unique=True)
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Assessments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    receiver_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    cooperation_score = db.Column(db.Float, nullable=False)
    conceptual_contribution_score = db.Column(db.Float, nullable=False)
    practical_contribution_score = db.Column(db.Float, nullable=False)
    work_ethic_score = db.Column(db.Float, nullable=False)
    comments = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'receiver_id': self.receiver_id,
            'sender_id': self.sender_id,
            'cooperation_score': self.cooperation_score,
            'conceptual_contribution_score': self.conceptual_contribution_score,
            'practical_contribution_score': self.practical_contribution_score,
            'work_ethic_score': self.work_ethic_score,
            'comments': self.comments,
        }
        
class BlacklistedToken(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, unique=True)
    expires_at = db.Column(db.DateTime, nullable=False)
    
    def __init__(self, jti, expires_at):
        self.jti = jti
        self.expires_at = expires_at
    
    def to_dict(self):
        return {
            'id': self.id,
            'jti': self.jti,
            'expires_at': self.expires_at
        }