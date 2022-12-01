from re import M
from flask import Flask, request, make_response
from flask_cors import CORS
from backend.RentalsDB import RentalsDB

app = Flask(__name__)
CORS(app)
PATH = "backend/data/"


db = RentalsDB(app)
db.initialize_database()
db.populate_database()


# print(db.get_listings())

# default_acc = {
#     "user": "billy", "pass": "bob",
#     "first": "Billy", "last": "Bob",
#     "phone": "911",
#     "email": "billybob@gmail.com"
# }

# default_acc1 = {
#     "user": "billy1", "pass": "bob",
#     "first": "Billy", "last": "Bob",
#     "phone": "911",
#     "email": "billybob@gmail.com"
# }

# db.create_account(default_acc)
# db.create_account(default_acc1)

# db.delete_account({"user": "test2"})


# db.create_listing({"user_id": 1, "address": "415 Keats Way"})
# db.delete_listing({"id": 2})

# print(db.login({"user_or_email": "test1", "pass": "password1"}))
# print(db.login({"user_or_email": "bob@gmail.com", "pass": "password0"}))
# print(db.login({"user_or_email": "test1", "pass": "password2"}))
# print(db.login({"user_or_email": "test2", "pass": "password1"}))
# print(db.get_listings())
# req = {"user": 1}
# print(db.get_listings_by_id(req))

@app.route("/fetchListings", methods=["GET"])
def fetchListings():
    data = db.get_listings()

    return {"data": data}, 200


@app.route("/createAccount", methods=["POST"])
def createAccount():
    req = request.get_json()
    
    result = db.create_account(req)

    if result == 0:
        return {"status": "ERROR", "message": "Username already used!"}, 400
    if result == -1:
        return {"status": "ERROR", "message": "Email already used!"}, 400
    if result == 1:
        return {"status": "SUCCESS"}, 200


@app.route("/deleteAccount", methods=["POST"])
def deleteAccount():
    req = request.get_json()
    print("req: for dlete", req)
    result = db.delete_account(req)

    if result == 0:
        return {"status": "ERROR", "message": "Account does not exist!"}, 400
    else:
        return {"status": "SUCCESS"}, 200


@app.route("/createListing", methods=["POST"])
def createListing():
    req = request.get_json()
    id = db.create_listing(req)

    return {"status": "SUCCESS", "message": f"Created new listing with ID={id}"}, 200


@app.route("/deleteListing", methods=["POST"])
def deleteListing():
    req = request.get_json()
    res = db.delete_listing(req)
    if res == 0:
        return {"status": "ERROR", "message": "Listing does not exist!"}, 400
    else:
        return  {"status": "SUCCESS"}, 200


@app.route("/login", methods=["POST"])
def login():
    req = request.get_json()
    ret = db.login(req)
    exist = ret[0]
    res = ret[1]
    user = ret[2]

    if not exist:
        resp = make_response({"status": "ERROR", "message": "Username/Email Doesn't Exist!"}, 400)
    if not res:
        resp = make_response({"status": "ERROR", "message": "Wrong Password to Username/Email!"}, 400)
    else:
        resp = make_response({"status": "SUCCESS!", "user": user}, 200)
    return resp

@app.route("/fetchListingsById", methods=["POST"])
def fetchListingsById():
    req = request.get_json()
    data = db.get_listings_by_id(req)
    return {"data": data}, 200


@app.route("/fetchListingByListingId", methods=["POST"])
def fetchListingByListingId():
    req = request.get_json()
    data = db.get_listing_by_listing_id(req)
    return {"data": data}, 200


@app.route("/updateListingByListingId", methods=["POST"])
def updateListingByListingId():
    req = request.get_json()
    res = db.modify_listing(req)

    if not res:
        resp = make_response({"status": "ERROR", "message": "Listing does not exist under specified user!"}, 400)
    else:
        resp = make_response({"status": "SUCCESS!"}, 200)

    return resp


if __name__ == '__main__':
    app.run()