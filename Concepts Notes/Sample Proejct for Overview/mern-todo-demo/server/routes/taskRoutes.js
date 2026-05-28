const express = require('express');
const authMiddleware = require('../middleware/auth');
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

// All task routes require authentication
router.use(authMiddleware);

// Get all tasks
router.get('/', getTasks);

// Create a new task
router.post('/', createTask);

// Update a task
router.put('/:id', updateTask);

// Delete a task
router.delete('/:id', deleteTask);

module.exports = router;
