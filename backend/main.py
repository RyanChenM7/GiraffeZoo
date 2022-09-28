from re import M
from flask import Flask
from flask_cors import CORS
from flaskext.mysql import MySQL

app = Flask(__name__)
CORS(app)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Noodl3s!'
app.config['MYSQL_DATABASE_DB'] = 'testDB'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor =conn.cursor()

cursor.execute("SELECT * from student")
data = cursor.fetchone()
print("data", data)

@app.route("/")
def hello_word():
    data = { "content": "Hello World", "message": "success"}
    return data, 200

@app.route("/testsql")
def get_Data():
    conn = mysql.connect()
    cursor =conn.cursor()

    cursor.execute("SELECT * from student")
    data = cursor.fetchone()
    print("data", data)
    data = { "content": data, "message": "success"}
    return data, 200