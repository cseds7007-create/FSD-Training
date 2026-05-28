# 📝 MERN Stack Todo Application - Demo Project

This is a complete **MERN (MongoDB, Express, React, Node.js)** stack demo project for learning how to build a full-stack web application with user authentication and CRUD operations.

## Project Overview

- **Frontend:** React with modern ES6+ and Tailwind CSS styling
- **Backend:** Node.js + Express server
- **Database:** MongoDB (Cloud Atlas - already connected)
- **Authentication:** JWT (JSON Web Tokens)

### Features Included
✅ User Registration & Login  
✅ JWT-based Authentication  
✅ Create, Read, Update, Delete (CRUD) Tasks  
✅ Task Completion Toggle  
✅ Responsive UI Design  
✅ Error Handling  
✅ Secure Password Hashing (bcryptjs)  

---

## Project Structure

```
mern-todo-demo/
├── server/                          # Backend (Node.js + Express)
│   ├── models/
│   │   ├── User.js                 # User schema with password hashing
│   │   └── Task.js                 # Task schema
│   ├── controllers/
│   │   ├── authController.js       # Register & Login logic
│   │   └── taskController.js       # CRUD task operations
│   ├── routes/
│   │   ├── authRoutes.js           # Auth endpoints
│   │   └── taskRoutes.js           # Task endpoints
│   ├── middleware/
│   │   └── auth.js                 # JWT verification middleware
│   ├── server.js                   # Main server file
│   ├── .env                        # Environment variables
│   └── package.json                # Dependencies
│
└── client/                          # Frontend (React)
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/
    │   │   ├── Login.jsx           # Login form component
    │   │   ├── Register.jsx        # Registration form component
    │   │   └── TaskList.jsx        # Main dashboard component
    │   ├── App.jsx                 # Main App component
    │   ├── index.jsx               # React entry point
    │   └── index.css               # Global styles
    └── package.json                # Dependencies
```

---

## Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional)

### Step 1: Install Server Dependencies

```bash
cd mern-todo-demo/server
npm install
```

This installs:
- `express` - Web framework
- `mongoose` - MongoDB ORM
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `nodemon` - Auto-restart during development

### Step 2: Install Client Dependencies

```bash
cd ../client
npm install
```

This installs:
- `react` - UI library
- `axios` - HTTP client
- `react-dom` - React renderer

---

## Running the Application

### Terminal 1: Start the Backend Server

```bash
cd mern-todo-demo/server
npm run dev
```

Expected output:
```
🚀 Server is running on http://localhost:5000
✓ MongoDB connected successfully
```

### Terminal 2: Start the React Frontend

```bash
cd mern-todo-demo/client
npm start
```

This will automatically open `http://localhost:3000` in your browser.

---

## How to Use the App

### 1. **Register**
   - Click "Register here" link
   - Enter Name, Email, and Password
   - You'll be automatically logged in

### 2. **Login**
   - Enter your registered email and password
   - Click "Sign In"

### 3. **Manage Tasks**
   - **Create:** Enter task title and description, click "+ Add Task"
   - **View:** All your tasks appear in the dashboard
   - **Complete:** Click "Done" to mark a task as complete
   - **Delete:** Click "Delete" to remove a task

### 4. **Logout**
   - Click "Logout" button in the top right

---

## API Endpoints

### Authentication Endpoints

**Register User:**
```
POST /api/auth/register
Body: { name, email, password }
```

**Login User:**
```
POST /api/auth/login
Body: { email, password }
```

### Task Endpoints (Require JWT Token)

**Get All Tasks:**
```
GET /api/tasks
Header: Authorization: Bearer <token>
```

**Create Task:**
```
POST /api/tasks
Header: Authorization: Bearer <token>
Body: { title, description }
```

**Update Task:**
```
PUT /api/tasks/:id
Header: Authorization: Bearer <token>
Body: { title, description, completed }
```

**Delete Task:**
```
DELETE /api/tasks/:id
Header: Authorization: Bearer <token>
```

---

## Key Learning Concepts

### 1. **Models & Schema**
- User model with password hashing
- Task model with user reference
- Timestamps for tracking

### 2. **Authentication Flow**
- User registers → Password hashed with bcryptjs
- User logs in → JWT token generated
- Token stored in localStorage
- Every request includes token in headers

### 3. **Middleware**
- `authMiddleware` verifies JWT tokens
- Protects task routes
- Extracts userId from token

### 4. **Controllers**
- Business logic separated from routes
- Error handling
- Database operations

### 5. **React Components**
- State management with `useState`
- Side effects with `useEffect`
- Axios for API calls
- Conditional rendering

---

## MongoDB Connection

The app uses your MongoDB Atlas cluster:
```
mongodb+srv://standout_krishna:4O7V1m1wQl$@cluster0.rmt4r3z.mongodb.net/
```

**Collections created automatically:**
- `users` - Stores user accounts
- `tasks` - Stores user tasks

---

## Troubleshooting

### Error: "Cannot find module 'express'"
```bash
cd server
npm install
```

### Error: "PORT 5000 already in use"
- Kill process: `npx kill-port 5000`
- Or change PORT in `.env` file

### Error: "Cannot connect to MongoDB"
- Check internet connection
- Verify MongoDB URI in `.env`
- Check if credentials are correct

### Error: "CORS error"
- Backend CORS middleware is already configured
- Ensure backend is running on port 5000

---

## Environment Variables (.env)

Located in `server/.env`:
```
MONGO_URI=mongodb+srv://standout_krishna:4O7V1m1wQl$@cluster0.rmt4r3z.mongodb.net/
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

⚠️ **Security Note:** In production, change the `JWT_SECRET` to a unique random string!

---

## Next Steps for Enhancement

After understanding this demo, you can add:

1. **Form Validation** - Validate input on frontend & backend
2. **Task Categories** - Add category field to tasks
3. **Priority Levels** - Add priority (Low, Medium, High)
4. **Due Dates** - Add deadline tracking
5. **Search & Filter** - Search and filter tasks
6. **User Profile** - Edit user information
7. **Task Sharing** - Share tasks with other users
8. **Database Indexing** - Optimize MongoDB queries
9. **Unit Tests** - Write tests for backend & frontend
10. **Deployment** - Deploy to Heroku/Vercel

---

## Learning Resources

- [Express.js Docs](https://expressjs.com/)
- [Mongoose Docs](https://mongoosejs.com/)
- [React Docs](https://react.dev/)
- [JWT.io](https://jwt.io/)
- [MongoDB Docs](https://docs.mongodb.com/)

---

## Questions?

This demo covers:
- ✅ How to structure a MERN project
- ✅ Database schema design
- ✅ RESTful API design
- ✅ Authentication & authorization
- ✅ Component-based UI
- ✅ State management in React
- ✅ HTTP requests with Axios

**Happy Coding! 🚀**
