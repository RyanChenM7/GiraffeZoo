# WaterlooRentals

A website that helps students find housing rentals in Waterloo.

<h2>For the backend:</h2>
To boot up your local development server on Windows, first export the following ENV vars:
```$env:FLASK_APP="backend/main.py"```

For UNIX based systems, run:

```export FLASK_APP="backend/main.py"```
Use `flask run` to boot up the server.

```pip3 install -r backend/requirements.txt```

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

The sample data is currently autoloaded when the backend is run. The data is coming from sample_listings.csv and sample_users.csv where the data is processed and inserted into the tables. Note that there are checks for the tables and data: if the tables already exist, new tables are not created. Similarly if data already exists in the tables, we will not load the sample data in to prevent duplicate rows.


