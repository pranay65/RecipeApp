
# Recipe Application

This project is a comprehensive web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a user-friendly interface for authentication, content creation, uploading, and managing saved recipes.

## Functionalities:

**User Registration and Authentication:**
Users can register for an account and log in securely. Sessions are managed using JWT (JSON Web Tokens) for a safe, scalable login experience.

**Content Management:**
Once logged in, users can create new content and upload relevant files or media.

**Personal Saved Items:**
Users have access to a saved items page where they can manage content they’ve saved for later reference.

## Tech Stack:

### Frontend (React)
**Navigation:** A dynamic navigation bar for switching between Home, Login, Register, Upload, and Saved pages.

**Routing:** React Router enables smooth navigation between pages without full reloads.

### Backend (Express and Node.js)
**RESTful API:** CRUD operations are supported for creating, reading, updating, and deleting user content.

**Authentication:** Secured routes to ensure only authenticated users can access sensitive data.

**Data Validation:** Input data is validated to prevent inconsistencies and security vulnerabilities.

### Database (MongoDB)

**Data Storage:** All user data, content, and saved items are stored in a MongoDB database, allowing for easy data retrieval and management.

**Document-Based Model:** MongoDB’s flexible schema supports the evolving needs of a content management application.



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URI`

`PORT`

`JWT_SECRET`


The app will be accessible at:

#### Frontend: `http://localhost:3000`

#### Backend API: `http://localhost:5000`
