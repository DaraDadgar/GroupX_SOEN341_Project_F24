"""
This module sets up the Flask application with necessary extensions,
routes, and configurations.
"""
import os
from app.extensions import db, migrate, cors, jwt
from app.routes.auth_routes import auth_bp
from app.routes.teacher_routes import teacher_bp
from app.routes.student_routes import student_bp
from app.routes.team_routes import team_bp
from app.routes.assessment_routes import assessment_bp
from app.models import BlacklistedToken
from flask import Flask

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://db_user:db_password@db/db_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = app.config['SECRET_KEY']

cors.init_app(app, supports_credentials=True, origins=["http://localhost:3000"])
db.init_app(app)
migrate.init_app(app, db)
jwt.init_app(app)

# Token blacklist check
@jwt.token_in_blocklist_loader
def check_if_token_is_blacklisted(jwt_payload):
    """
    Check if the given JWT token is blacklisted.

    Args:
        jwt_header (dict): The JWT header dictionary.
        jwt_payload (dict): The JWT payload dictionary, containing the token information.

    Returns:
        bool: True if the token is blacklisted, False otherwise.
    """
    jti = jwt_payload['jti']
    return BlacklistedToken.query.filter_by(jti=jti).first() is not None

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(teacher_bp)
app.register_blueprint(student_bp)
app.register_blueprint(team_bp)
app.register_blueprint(assessment_bp)

if __name__ == '__main__':
    app.run(debug=False, port=8081, host='0.0.0.0')
