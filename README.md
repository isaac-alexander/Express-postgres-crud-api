# Express PostgreSQL CRUD API

A simple **CRUD (Create, Read, Update, Delete) API** for managing users, built with **Express.js**, **PostgreSQL**, and **Joi** for input validation.

---

## Features
- Create a new user
- Read all users
- Read a single user by ID
- Update a user
- Delete a user
- Input validation using **Joi**
- Centralized error handling
- PostgreSQL database connection pooling

---

## Technologies
- Node.js
- Express.js
- PostgreSQL
- Joi (for input validation)
- dotenv (environment variables)
- cors
- nodemon (dev dependency)

---

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-folder>
```
2. Install dependencies:
```bash
 npm install 
 ```
3. Create a PostgreSQL database (if you don’t have one yet).

4. Create a .env file in the root of the project with the following variables:

PORT=3001
DB_USER=your_db_user
DB_HOST=localhost
DB_DATABASE=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432

5. Ensure your database is running and accessible.

### Running the Project

Start the server:
```bash
npm run dev
```

You should see:
``` bash
Server is running on http://localhost:3001
Connection pool established with Database
User table created if not exists
```
### API Endpoints


POST - /api/user - Creates a new user - Request Body(JSON){}

GET	- /api/user	- Gets all users

GET	- /api/user/:id - Gets a single user by ID	

PUT - /api/user/:id - Update a user by ID - Request Body(JSON){}

DELETE - /api/user/:id - Delete a user by ID