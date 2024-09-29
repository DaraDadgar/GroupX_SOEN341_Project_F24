from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from app.routes.auth_routes import auth_bp
from app.routes.teacher_routes import teacher_bp
from app.routes.student_routes import student_bp
from app.routes.team_routes import team_bp

app = Flask(__name__)
CORS(app, origins="*")

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://db_user:db_password@db/db_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app.models import student_team, students, teachers, teams
# Register blueprints
app.register_blueprint(auth_bp)
app.register_blueprint(teacher_bp)
app.register_blueprint(student_bp)
app.register_blueprint(team_bp)

@app.route('/', methods=['GET'])
def test():
    return "test"

if __name__ == '__main__':
    app.run(debug=False, port=8081, host='0.0.0.0')
