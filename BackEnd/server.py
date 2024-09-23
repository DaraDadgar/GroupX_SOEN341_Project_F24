from flask import Flask, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

from models import Students, StudentTeams, Teachers, Teams, db


app = Flask(__name__)
app.secret_key = "hello"
cors = CORS(app, origins ="*")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'




db.init_app(app)

with app.app_context():
    db.create_all()



@app.route('/')
def home():
    return "Welcome to the Flask Server!"

@app.route('/login', methods = ['GET', 'POST'])
def login():
    return "a"
    

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    return "a"

if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


