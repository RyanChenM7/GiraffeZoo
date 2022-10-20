from re import M
from flask import Flask
from flask_cors import CORS
from flaskext.mysql import MySQL
import csv

app = Flask(__name__)
CORS(app)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = ''
app.config['MYSQL_DATABASE_DB'] = 'testDB'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'
mysql.init_app(app)
conn = mysql.connect()
cursor =conn.cursor()

query_users = ("CREATE TABLE IF NOT EXISTS users("
            "id INT NOT NULL, "
            "username VARCHAR(500), "
            "password VARCHAR(500), "
            "fname VARCHAR(100), "
            "lname VARCHAR(100), "
            "phone VARCHAR(20), "
            "mail VARCHAR(500), "
            "PRIMARY KEY (id))"
)
query_listing = ("CREATE TABLE IF NOT EXISTS listings("
            "id INT NOT NULL, "
            "user_id INT NOT NULL, "
            "address VARCHAR(1000), "
            "city VARCHAR(300), "
            "province VARCHAR(300), "
            "rooms INT, "
            "bathrooms INT, "
            "feet INT, "
            "heating INT, "
            "water INT, "
            "hydro INT, "
            "type VARCHAR(300), "
            "parking INT, "
            "price INT, "
            "months INT, "
            "comment VARCHAR(2000), "
            "PRIMARY KEY (id), "
            "FOREIGN KEY (user_id) REFERENCES users(id))"
)
cursor.execute(query_users)
cursor.execute(query_listing)

# check if tables are already populated
select_check = "SELECT * FROM users"
cursor.execute(select_check)
res = cursor.fetchall()
if len(res) == 0: # if unpopulated
    with open('sample_users.csv') as csv_file:    
        csv_users = csv.reader(csv_file, delimiter=',')
        for row in csv_users:
            insert_query = "INSERT INTO users VALUES \
                ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')".format(*row)
            cursor.execute(insert_query)

select_check = "SELECT * FROM listings"
cursor.execute(select_check)
res = cursor.fetchall()
if len(res) == 0:
    with open('sample_listings.csv') as csv_file:
        csv_listings = csv.reader(csv_file, delimiter=',')
        for row in csv_listings:
            insert_query = 'INSERT INTO listings VALUES (\
            "{0}", "{1}", "{2}", "{3}", "{4}", "{5}", "{6}", \
                "{7}", "{8}", "{9}", "{10}", "{11}", "{12}", "{13}", "{14}", "{15}")'.format(*row)
            cursor.execute(insert_query)


conn.commit()


# check data
cursor.execute('SELECT * FROM listings')
data = cursor.fetchall()
print("listings rows: ", len(data))
for row in data:
    print(row)

cursor.execute('SELECT * FROM users')
data = cursor.fetchall()
print("Users rows: ", len(data))
for row in data:
    print(row)


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

@app.route("/fetchListings")
def get_Listings():
    conn = mysql.connect()
    cursor =conn.cursor()
    cursor.execute("SELECT * from listings")
    data = cursor.fetchall()

    return {"data": data}, 200