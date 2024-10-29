from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os
from app.extensions import db, migrate, cors
from app.routes.auth_routes import auth_bp
from app.routes.teacher_routes import teacher_bp
from app.routes.student_routes import student_bp
from app.routes.team_routes import team_bp
from app.routes.assessment_routes import assessment_bp
from app.models import StudentTeam, Students, Teachers, Teams, Assessments

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY")

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://db_user:db_password@db/db_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

cors.init_app(app, origins="*")
db.init_app(app)
migrate.init_app(app, db)

# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(teacher_bp)
app.register_blueprint(student_bp)
app.register_blueprint(team_bp)
app.register_blueprint(assessment_bp)

if __name__ == '__main__':
    app.run(debug=False, port=8081, host='0.0.0.0')
