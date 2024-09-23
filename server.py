from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins ="*")


@app.route('/')
def home():
    return "Welcome to the Flask Server!"

@app.route('/login', methods = ['GET'])
def hello():
    name = "deer"
    return jsonify(name)

if __name__ == '__main__':
    app.run(debug=True)  # Run the server in debug mode


