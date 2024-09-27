from app import db

class StudentTeam(db.Model):
    student_id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, primary_key = True)
    def to_dict(self):
        return {
            'student_id': self.student_id,
            'team_id': self.team_id,
        }