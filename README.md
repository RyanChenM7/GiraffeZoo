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
The sample data is currently autoloaded when the backend starts running. The data is coming from sample_listings.csv and sample_users.csv where the data is processed and inserted into the tables. Note that there are checks for the tables and data: if the tables already exist, new tables are not created. Similarly if data already exists in the tables, we will not load the sample data in to prevent duplicate rows.


