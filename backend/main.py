from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_word():
    data = { "content": "Hello World", "message": "success"}
    return data, 200
