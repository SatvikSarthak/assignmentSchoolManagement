

```markdown
# School Management API

This project provides a set of APIs for managing school data, including adding new schools and retrieving schools sorted by proximity to a user's location. The system is built with **Node.js** and **Express.js**.

---

## Table of Contents
- [Features](#features)
- [Technology Stack](#technology-stack)
- [API Endpoints](#api-endpoints)
  - [Add School](#add-school)
  - [List Schools by Proximity](#list-schools-by-proximity)
- [Setup Instructions](#setup-instructions)
- [Live API URLs](#live-api-urls)
- [Validation Rules](#validation-rules)
- [Error Handling](#error-handling)
- [Deployment](#deployment)
- [Postman Collection](#postman-collection)

---

## Features
- Add new schools with name, address, and geographical coordinates.
- Retrieve all schools sorted by proximity to the user's location.
- Input validation for all fields.
- Geographical distance calculations.

---

## Technology Stack
- **Backend**: Node.js with Express.js
- **Database**: MySQL
- **Libraries**:
  - `mysql2`: MySQL database driver
  - `geolib`: For geographical distance calculations
  - `cors`: Cross-Origin Resource Sharing
  - `dotenv`: Environment variables management

---

## API Endpoints

### Add School
This endpoint is used to add a new school to the system.

#### **Request Body**
```json
{
  "name": "Test School 11",
  "address": "Society, Old Area",
  "latitude": 22.704,
  "longitude": 74.1024
}
```

#### **Response**
```json
{
  "message": "School added successfully",
  "schoolId": 101
}
```

#### **Example**
- **Method**: `POST`
- **Endpoint**: `/api/addSchool`
- **Body**:
  ```json
  {
    "name": "Test School 11",
    "address": "Society, Old Area",
    "latitude": 22.704,
    "longitude": 74.1024
  }
  ```

---

### List Schools by Proximity
This endpoint retrieves a list of schools based on the provided latitude and longitude.

#### **Request Query Parameters**
- `lat` (number): The latitude coordinate.
- `lng` (number): The longitude coordinate.

#### **Response**
```json
{
  "total": 5,
  "nearestSchool": {
    "id": 1,
    "name": "Example School",
    "address": "Example Address",
    "latitude": 22.703,
    "longitude": 74.102,
    "distanceKm": 1.2
  },
  "results": [
    {
      "id": 1,
      "name": "Example School",
      "address": "Example Address",
      "latitude": 22.703,
      "longitude": 74.102,
      "distanceKm": 1.2
    },
    {
      "id": 2,
      "name": "Another School",
      "address": "Another Address",
      "latitude": 22.705,
      "longitude": 74.101,
      "distanceKm": 2.3
    }
  ]
}
```

#### **Example**
- **Method**: `GET`
- **Endpoint**: `/api/listSchools`
- **Query Parameters**: `?lat=22.704&lng=74.102`

---

## Setup Instructions
Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/SatvikSarthak/assignmentSchoolManagement.git
   ```

2. Install dependencies:
   ```bash
   npm install express mysql2 geolib cors dotenv
   ```

3. Create a `.env` file with your database credentials:
   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   PORT=your_port_number
   ```

4. Start the server:
   ```bash
   node server.js
   ```

---

## Live API URLs
- **Add School**: [https://assignmentschoolmanagement.onrender.com/api/addSchool]
- **List Schools by Proximity**: [https://assignmentschoolmanagement.onrender.com/api/listSchools?lat=xxx&lng=xxx]

---

## Validation Rules
- All fields (`name`, `address`, `latitude`, `longitude`) are **required**.
- `name` and `address` must be non-empty strings.
- `latitude` and `longitude` must be valid numbers.

---

## Error Handling
The API provides meaningful error messages for:
- Missing required fields.
- Invalid data types.
- Database connection issues.

---

## Deployment
- **Backend**: Deployed on [Render](https://render.com)
- **Database**: Hosted on [Railway (MySQL)](https://railway.app)

---

## Postman Collection
A Postman collection is available for testing the APIs. It includes example requests for both endpoints with documented expected responses.

---

Feel free to contribute or raise issues if you encounter any problems!
```
