# Salve - Patient Management System


This project consists of a backend service that serves clinic and patient data in CSV files and a frontend web application that displays patients belonging to a selected clinic and allows sorting by date of birth. This README provides instructions on how to set up and run both the backend and frontend applications.


## Backend Setup

1. Clone the project repository onto your local machine.

2. Open a terminal and navigate to the backend directory of the cloned repository.

3. Install the required dependencies using the following command:

```
npm install
```

Start the backend server using the following command:

```
npm run start
```

The backend server will now be running on http://localhost:3001.


## Frontend Setup

1. Open a new terminal window and navigate to the frontend directory of the cloned repository.

2. Install the required dependencies using the following command:

```
npm install
```

Start the frontend development server using the following command:

```
npm run dev
```

The frontend server will now be running on http://localhost:3000.


## Using the Application

1. Open a web browser and navigate to http://localhost:3000.

2. Use the dropdown menu to select a clinic.

3. A list of patients belonging to the selected clinic will be displayed.

4. Click the column header to sort the patient list by selected column header type.


### Stopping the Applications

To stop the backend and frontend applications, simply press `Ctrl+C` in the terminal window where the respective server is running.

### Deps 

#### Api
express: A web framework for Node.js
csv-parser: A library for parsing CSV files
cors: A middleware for enabling Cross-Origin Resource Sharing (CORS)

#### Web
react: A JavaScript library for building user interfaces
next: A framework for building server-rendered React applications
axios: A library for making HTTP requests