from app.models import db

class Teams(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
        }