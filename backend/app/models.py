from app.extensions import db
from datetime import datetime

class StudentTeam(db.Model):
    """
    Represents the association between students and teams.

    Attributes:
        student_id (int): The unique identifier for a student.
        team_id (int): The unique identifier for a team.
    """

    student_id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, primary_key=True)

    def to_dict(self):
        """
        Converts the StudentTeam instance to a dictionary.

        Returns:
            dict: A dictionary representation of the StudentTeam instance.
        """
        return {
            'student_id': self.student_id,
            'team_id': self.team_id,
        }

class Students(db.Model):
    """
    Represents a student entity in the system.

    Attributes:
        id (int): The unique identifier for the student.
        name (str): The name of the student (maximum length of 120 characters).
        email (str): The email address of the student, must be unique.
        password (str): The hashed password for the student.
        is_available (bool): Indicates whether the student is available. Defaults to True.
    """

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))
    is_available = db.Column(db.Boolean, default=True)

    def __repr__(self):
        return f'{self.name}'

    def to_dict(self):
        """
        Converts the Students instance to a dictionary.

        Returns:
            dict: A dictionary representation of the Students instance, including
                  the id, name, email, and availability status.
        """
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'is_available': self.is_available
        }

class Teachers(db.Model):
    """
    Represents a teacher entity in the system.

    Attributes:
        id (int): The unique identifier for the teacher.
        name (str): The name of the teacher (maximum length of 120 characters).
        email (str): The email address of the teacher, must be unique.
        password (str): The hashed password for the teacher.
    """

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))

    def to_dict(self):
        """
        Converts the Teachers instance to a dictionary.

        Returns:
            dict: A dictionary representation of the Teachers instance, including
                  the id, name, and email.
        """
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email
        }


class Teams(db.Model):
    """
    Represents a team entity in the system.

    Attributes:
        id (int): The unique identifier for the team.
        name (str): The name of the team, must be unique (maximum length of 120 characters).
    """

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True)

    def to_dict(self):
        """
        Converts the Teams instance to a dictionary.

        Returns:
            dict: A dictionary representation of the Teams instance, including
                  the id and name.
        """
        return {
            'id': self.id,
            'name': self.name,
        }


class Assessments(db.Model):
    """
    Represents an assessment given by one student to another in the system.

    Attributes:
        id (int): The unique identifier for the assessment.
        receiver_id (int): The ID of the student receiving the assessment.
        sender_id (int): The ID of the student providing the assessment.
        cooperation_score (float): The score given for cooperation, required.
        conceptual_contribution_score (float): The score given for conceptual contributions, 
        required.
        practical_contribution_score (float): The score given for practical contributions, required.
        work_ethic_score (float): The score given for work ethic, required.
        comments (str, optional): Optional text comments provided by the sender.
    """

    id = db.Column(db.Integer, primary_key=True)
    receiver_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False)
    cooperation_score = db.Column(db.Float, nullable=False)
    conceptual_contribution_score = db.Column(db.Float, nullable=False)
    practical_contribution_score = db.Column(db.Float, nullable=False)
    work_ethic_score = db.Column(db.Float, nullable=False)
    comments = db.Column(db.Text, nullable=True)

    def to_dict(self):
        """
        Converts the Assessments instance to a dictionary.

        Returns:
            dict: A dictionary representation of the Assessments instance, including
                  the id, receiver_id, sender_id, scores for cooperation, conceptual
                  contribution, practical contribution, work ethic, and optional comments.
        """
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
    """
    Represents a token that has been blacklisted, typically for handling logout or 
    invalidated tokens.

    Attributes:
        id (int): The unique identifier for the blacklisted token.
        jti (str): The unique identifier for the JWT (JTI).
        expires_at (datetime): The expiration date and time for the blacklisted token.
    """

    id = db.Column(db.Integer, primary_key=True)
    jti = db.Column(db.String(36), nullable=False, unique=True)
    expires_at = db.Column(db.DateTime, nullable=False)

    def __init__(self, jti, expires_at):
        """
        Initializes a new instance of the BlacklistedToken class.

        Args:
            jti (str): The unique identifier for the JWT (JTI).
            expires_at (datetime): The expiration date and time for the token.
        """
        self.jti = jti
        self.expires_at = expires_at

    def to_dict(self):
        """
        Converts the BlacklistedToken instance to a dictionary.

        Returns:
            dict: A dictionary representation of the BlacklistedToken instance, including
                  the id, jti, and expiration time.
        """
        return {
            'id': self.id,
            'jti': self.jti,
            'expires_at': self.expires_at
        }

class StudentEval(db.Model):
    """
    Represents a student evaluation in the system.

    Attributes:
        sender_id (int): The ID of the student sending the evaluation. This serves as 
        a primary key.
        receiver_id (int): The ID of the student receiving the evaluation. This serves 
        as a primary key.
        has_reviewed (bool): Indicates whether the evaluation has been completed by 
        the sender. Defaults to False.
    """

    sender_id = db.Column(db.Integer, primary_key=True)
    receiver_id = db.Column(db.Integer, primary_key=True)
    has_reviewed = db.Column(db.Boolean, default=False)

    def to_dict(self):
        """
        Converts the StudentEval instance to a dictionary.

        Returns:
            dict: A dictionary representation of the StudentEval instance, including
                  the sender_id, receiver_id, and whether the sender has reviewed.
        """
        return {
            'sender_id': self.sender_id,
            'receiver_id': self.receiver_id,
            'has_reviewed': self.has_reviewed
        }
