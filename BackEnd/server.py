from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = "hello"
cors = CORS(app, origins ="*")
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'


db = SQLAlchemy(app)
with app.app_context():
    db.create_all()



@app.route('/')
def home():
    return "Welcome to the Flask Server!"

@app.route('/login', methods = ['GET'])
def hello():
    name = "deer"
    return jsonify(name)

if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


