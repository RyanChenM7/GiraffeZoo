from re import M
from flask import Flask, request
from flask_cors import CORS
from backend.RentalsDB import RentalsDB

app = Flask(__name__)
CORS(app)
PATH = "backend/data/"


db = RentalsDB(app)
db.initialize_database()
db.populate_database()


# print(db.get_listings())

default_acc = {
    "user": "billy", "pass": "bob",
    "first": "Billy", "last": "Bob",
    "phone": "911",
    "email": "billybob@gmail.com"
}

db.create_account(default_acc)

@app.route("/fetchListings", methods=["GET"])
def fetchListings():
    data = db.get_listings()

    return {"data": data}, 200


@app.route("/createAccount", methods=["POST"])
def createAccount():
    req = request.get_json()
    
    result = db.create_account(req)

    if result == 0:
        return {"status": "ERROR", "message": "Account already exists!"}, 400
    if result == 1:
        return {"status": "SUCCESS"}, 200


@app.route("/deleteAccount", methods=["DELETE"])
def deleteAccount():

    return 200

@app.route("/createListing", methods=["POST"])
def createListing():

    return 200


@app.route("/deleteListing", methods=["DELETE"])
def deleteListing():

    return 200




if __name__ == '__main__':
    app.run()