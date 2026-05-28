# Quick Start Guide

## 🚀 Run Locally in 3 Steps

### Step 1: Install Dependencies
```bash
# Terminal 1 - Backend
cd server
npm install

# Terminal 2 - Frontend (new terminal)
cd client
npm install
```

### Step 2: Start Backend
```bash
# In server folder
npm run dev
```
✅ Should show: "Server is running on http://localhost:5000"

### Step 3: Start Frontend
```bash
# In client folder (new terminal)
npm start
```
✅ Browser opens automatically at http://localhost:3000

---

## 📋 Sample Test Credentials

You can register with any email/password, or use these for quick testing:

**Email:** demo@example.com  
**Password:** demo123

---

## 🎯 Testing the App

1. **Register a new user** → Fill form and submit
2. **Add a task** → Type title and click "+ Add Task"
3. **Mark complete** → Click "Done" button
4. **Delete task** → Click "Delete" button
5. **Logout** → Click "Logout" button

---

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Port 5000 in use | `npx kill-port 5000` or change PORT in .env |
| Module not found | Run `npm install` in both folders |
| MongoDB connection error | Check internet, verify .env credentials |
| Blank screen | Check browser console (F12) for errors |

---

## 📚 File Summary

| File | Purpose |
|------|---------|
| `server.js` | Main server entry point |
| `User.js` | MongoDB user schema |
| `Task.js` | MongoDB task schema |
| `authController.js` | Register/Login logic |
| `taskController.js` | CRUD task operations |
| `App.jsx` | React main component |
| `TaskList.jsx` | Dashboard component |

---

## ⚡ What This Teaches

✅ Full-stack web development  
✅ NoSQL database design  
✅ RESTful API principles  
✅ JWT authentication  
✅ React hooks & state management  
✅ Component composition  
✅ Error handling  
✅ CORS & middleware  

Enjoy! 🎉
