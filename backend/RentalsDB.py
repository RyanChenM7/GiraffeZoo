
import csv
from flaskext.mysql import MySQL

mysql = MySQL()

PATH = "backend/data/"


user_schema = {
    "id": "INT NOT NULL,",
    "username": "VARCHAR(500),",
    "password": "VARCHAR(500),",
    "fname": "VARCHAR(100),",
    "lname": "VARCHAR(100),",
    "phone": "VARCHAR(20),",
    "mail": "VARCHAR(500),",
}

listing_schema = {
    "id": "INT NOT NULL, ",
    "user_id": "INT NOT NULL, ",
    "address": "VARCHAR(1000), ",
    "city": "VARCHAR(300), ",
    "province": "VARCHAR(300), ",
    "rooms": "INT, ",
    "bathrooms": "INT, ",
    "feet": "INT, ",
    "heating": "INT, ",
    "water": "INT, ",
    "hydro": "INT, ",
    "type": "VARCHAR(300), ",
    "parking": "INT, ",
    "price": "INT, ",
    "months": "INT, ",
    "comment": "VARCHAR(2000), ",
}


class RentalsDB:
    def __init__(self, app, user_schema=user_schema, listing_schema=listing_schema):
        self.app = app
        app.config['MYSQL_DATABASE_USER'] = 'root'
        app.config['MYSQL_DATABASE_PASSWORD'] = ''
        app.config['MYSQL_DATABASE_DB'] = 'testDB'
        app.config['MYSQL_DATABASE_HOST'] = 'localhost'
        mysql.init_app(app)

        self.conn = mysql.connect()
        self.cursor = self.conn.cursor()

        self.user_schema = user_schema
        self.listing_schema = listing_schema

    def get_connection(self):
        return self.conn, self.cursor


    """
    Creates new USERS and LISTINGS databases.
    """
    def initialize_database(self):
        self.cursor.execute("DROP TABLE IF EXISTS listings")
        self.cursor.execute("DROP TABLE IF EXISTS users")

        temp = "".join(key + " " + val + " " for key, val in self.user_schema.items())
        CREATE_USERS = "CREATE TABLE IF NOT EXISTS users (" + temp + "PRIMARY KEY (id))"

        temp = "".join(key + " " + val for key, val in self.listing_schema.items())
        CREATE_LISTING = "CREATE TABLE IF NOT EXISTS listings (" + temp \
            + "PRIMARY KEY (id), FOREIGN KEY (user_id) REFERENCES users(id))"

        self.cursor.execute(CREATE_USERS)
        self.cursor.execute(CREATE_LISTING)

        # self.cursor.execute("ALTER TABLE users AUTO_INCREMENT=10;")
        # self.cursor.execute("ALTER TABLE listings AUTO_INCREMENT=10;")

        self.conn.commit()

    """
    Populates the USERS and LISTINGS tables with default dummy data.
    """
    def populate_database(self):
        
        # Check if tables are already populated
        self.cursor.execute("SELECT * FROM users")
        res = self.cursor.fetchall()
        if len(res) == 0: # if unpopulated
            with open(PATH + 'sample_users.csv') as csv_file:    
                csv_users = csv.reader(csv_file, delimiter=',')
                for row in csv_users:
                    insert_query = """INSERT INTO users VALUES
                        ('{0}', '{1}', '{2}', '{3}', '{4}', '{5}', '{6}')""".format(*row)
                    self.cursor.execute(insert_query)

        select_check = "SELECT * FROM listings"
        self.cursor.execute(select_check)
        res = self.cursor.fetchall()
        if len(res) == 0:
            with open(PATH + 'sample_listings.csv') as csv_file:
                csv_listings = csv.reader(csv_file, delimiter=',')
                for row in csv_listings:
                    insert_query = '''INSERT INTO listings VALUES (
                        "{0}", "{1}", "{2}", "{3}", "{4}", "{5}", "{6}", 
                        "{7}", "{8}", "{9}", "{10}", "{11}", "{12}", "{13}", "{14}", "{15}")'''.format(*row)
                    self.cursor.execute(insert_query)

        self.conn.commit()

    def get_listings(self):
        self.cursor.execute("SELECT * from listings")
        columns = [column[0] for column in self.cursor.description]

        data = [dict(zip(columns, row)) for row in self.cursor.fetchall()]

        return data

    def create_account(self, request):
        """ Schema is:
        {
            "user": w,
            "pass": x,
            "first": a,
            "last": b,
            "phone": y,
            "email": z,
        }
        """

        user = list(request.values())[0]

        self.cursor.execute(f"SELECT * FROM users WHERE username='{user}'")
        if self.cursor.fetchall():
            return 0

        self.cursor.execute("SELECT COUNT(*) as c FROM users")
        id = int(self.cursor.fetchall()[0][0])

        q = f"INSERT INTO users VALUES {(id, *request.values())}"

        self.cursor.execute(q)
        self.conn.commit()

        return 1


