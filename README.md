# Task Management API

A simple backend API built using Node.js, Express.js, MongoDB, and Mongoose.

This project was created as part of a Full Stack internship @DecodeLabs to understand backend development concepts such as REST APIs, CRUD operations, database integration, and server-side logic.

---

## Features

- Create a new task
- Fetch all tasks
- update existing tasks
- Delete tasks
- MongodDB database integration
- Input Validation
- RESTful API strucuture

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Dotenv

---

## Installation

Clone the repository:

```bash
git clone <https://github.com/atiya-inayat/Decodelab-Task-3.git>
```

Move into project folder:

```bash
cd DecodeLabs-Task-3
```

Install dependencies"

```bash
npm install
```

create a `.env` file and add:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Start the server:

```bash
npm run dev
```

---

## API Endpoints

### Create Task

```http
POST /api/tasks/newTask
```

### Get All Tasks

```http
GET /api/tasks/allTasks
```

### Update Task

```http
PUT /api/tasks/updateTask/:id
```

### Delete Task

```http
DELETE /api/tasks/deleteTask/:id
```

---

## Author

Developed by Atiya Inayat
