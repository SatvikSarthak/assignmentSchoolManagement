Overview


This project provides a set of APIs for managing school data, including adding new schools and retrieving schools sorted by proximity to a user's location. The system is built with Node.js, Express.js, and MySQL, deployed on Render with the database hosted on Railway.

Features
Add new schools with name, address, and geographical coordinates

Retrieve all schools sorted by proximity to user's location

Input validation for all fields

Geographical distance calculations

Technology Stack
Backend: Node.js with Express.js

Database: MySQL

Libraries:

mysql2: MySQL database driver

geolib: For geographical distance calculations

cors: Cross-Origin Resource Sharing

dotenv: Environment variables management

API Endpoints
1. Add School
This endpoint is used to add a new school to the system.
Request Body
name (string): The name of the school.
address (string): The address of the school.
latitude (number): The latitude coordinate of the school location.
longitude (number): The longitude coordinate of the school location.

Response
message (string): A message indicating the status of the request.
schoolId (number): The unique identifier assigned to the newly added school.

Example

JSON

{
  "name": "Test School 11",
  "address": "Society, Old Area",
  "latitude": 22.704,
  "longitude": 74.1024
}


2. List Schools by Proximity
Endpoint: GET /api/listSchools

This endpoint retrieves a list of schools based on the provided latitude and longitude.
Request
Query Parameters
lat (number): The latitude coordinate.
lng (number): The longitude coordinate.

Response
The response is a JSON object with the following schema:
JSON
{
    "total": number,
    "nearestSchool": {
        "id": number,
        "name": string,
        "address": string,
        "latitude": number,
        "longitude": number,
        "distanceKm": number
    },
    "results": [
        {
            "id": number,
            "name": string,
            "address": string,
            "latitude": number,
            "longitude": number,
            "distanceKm": number
        }
    ]
}

total (number): The total number of schools found.
nearestSchool (object): Information about the nearest school.
id (number): The ID of the nearest school.
name (string): The name of the nearest school.
address (string): The address of the nearest school.
latitude (number): The latitude coordinate of the nearest school.
longitude (number): The longitude coordinate of the nearest school.
distanceKm (number): The distance in kilometers from the provided coordinates to the nearest school.

results (array): An array of school objects with similar properties as nearestSchool.




Live API URLs
Add School: https://assignmentschoolmanagement.onrender.com/api/addSchool

List Schools: https://assignmentschoolmanagement.onrender.com/api/listSchools?lat=xxx&lng=xxx


Setup Instructions
Clone the repository:

bash
git clone [repository-url]
Install dependencies:

bash
npm install express mysql2 geolib cors dotenv
Create a .env file with your database credentials:

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
PORT=your_port_number
Start the server:

bash
node server.js

Postman Collection
A Postman collection is available for testing the APIs. It includes example requests for both endpoints with documented expected responses.
https://www.postman.com/satviksarthak17/workspace/school-management-api-testing/collection/32535496-91055a2f-fa3f-4277-8d1c-1082e6a7c49a?action=share&creator=32535496

Deployment
Backend: Deployed on Render
https://assignmentschoolmanagement.onrender.com
Database: Hosted on Railway(MYSQL)

Validation Rules
All fields (name, address, latitude, longitude) are required
Name and address must be non-empty strings
Latitude and longitude must be valid numbers

Error Handling
The API provides meaningful error messages for:
Missing required fields
Invalid data types
Database connection issues
