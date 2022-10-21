# WaterlooRentals

A website that helps students find housing rentals in Waterloo.

<h2>Currently supported features:</h2>
Registering an account -> allows you to make a listing<br />
Logging in -> will allow you to see your own listings as well as deleting them<br />
Deleting your account -> will remove your account along with all associated listings<br />
Creating a Listing -> allows users to put a listing up for viewing.<br />
Deleting your own Listing -> allows the users to take their own listing down.<br />
Viewing all Listings -> displays a list of all currently existing listings. Displays info such as location, price and length of contract as well as contact info<br />



<h2>For the backend:</h2>
To boot up your local development server on Windows, first export the following ENV vars:
```$env:FLASK_APP="backend/main.py"```

For UNIX based systems, run:

```export FLASK_APP="backend/main.py"```
Use `flask run` to boot up the server.

```pip3 install -r requirements.txt```

<h2>For the frontend:</h2>

```npm install -g npm```

```node version needs to be v16.17.1```

```npm version needs to be v8.19.2```

cd frontend
run the following command: "npm ci"
to run the frontend locally you must do the following
"""
cd frontend
npm run
"""

<h2>Loading sample data:</h2>
Data is loaded to MySQL through Flask, so MySQL must be installed as well as all requirements in the given txt file should be satisfied in order to connect to the database. Use XAMPP to run and view updates in the MySQL server for simplicity. All data will be loaded to a db called "testdb". Navigate to the phpMyAdmin tab to see changes being made.

![image](https://user-images.githubusercontent.com/77525898/196856753-ea6ab3d3-91e1-437d-b96e-a295f97bcd20.png)

The sample data is loaded when the Flask Server is booted up. The data come from sample_listings.csv and sample_users.csv and are inserted row by row into the tables. Note that there are checks for the tables and data, if the table is not empty, sample data is not inserted row by row. To reset and reinitialize the tables, a method of the DB class "initialize_database" is called, where data is wiped and the tables can be repopulated with the sample data.

Otherwise, the endpoints `createAccount, deleteAccount, createListing, deleteListing` can be hit with requests to modify the tables.


