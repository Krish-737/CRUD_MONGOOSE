# Mongoose CRUD Operations with Handlebars

## Overview

This project is a simple Node.js application that demonstrates CRUD (Create, Read, Update, Delete) operations using Mongoose for MongoDB interactions and Handlebars for templating. The application manages a collection of `User` documents with basic operations and displays them using Handlebars views.

## Features

- **Create**: Add new users to the database.
- **Read**: List all users and view individual user details.
- **Update**: Edit user details.
- **Delete**: Remove users from the database.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Web framework for building web applications.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Handlebars**: Templating engine for rendering HTML.



## Installation

### Prerequisites

- Node.js
- MongoDB

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/mongoose-crud.git
   cd mongoose-crud
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure MongoDB**

   Ensure MongoDB is running locally or use a remote MongoDB service. Update the MongoDB connection string in `db.js` if necessary.

4. **Start the Application**

   ```bash
   npm start
   ```

   The server will start on `http://localhost:8000`.

