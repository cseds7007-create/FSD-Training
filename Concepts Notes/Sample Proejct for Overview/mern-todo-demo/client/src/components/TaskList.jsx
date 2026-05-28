import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ user, onLogout }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');
  const headers = { Authorization: `Bearer ${token}` };

  // Fetch tasks
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/tasks', { headers });
      setTasks(response.data);
    } catch (err) {
      setError('Failed to fetch tasks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Create task
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    try {
      const response = await axios.post(
        '/api/tasks',
        { title: newTaskTitle, description: newTaskDesc },
        { headers }
      );
      setTasks([response.data, ...tasks]);
      setNewTaskTitle('');
      setNewTaskDesc('');
    } catch (err) {
      setError('Failed to create task');
    }
  };

  // Toggle task completion
  const handleToggleTask = async (taskId, completed) => {
    try {
      const response = await axios.put(
        `/api/tasks/${taskId}`,
        { completed: !completed },
        { headers }
      );
      setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  // Delete task
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`/api/tasks/${taskId}`, { headers });
      setTasks(tasks.filter((t) => t._id !== taskId));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div style={{ marginBottom: '20px' }}>
          <button className="btn btn-small btn-danger logout-btn" onClick={onLogout}>
            Logout
          </button>
        </div>

        <div className="header">
          <h1>📝 My Tasks</h1>
          <p>Welcome, {user?.name}!</p>
        </div>

        {error && <div className="error">{error}</div>}

        {/* Add Task Form */}
        <form onSubmit={handleAddTask} style={{ marginBottom: '30px' }}>
          <div className="form-group">
            <label>Add New Task</label>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Enter task title..."
              required
            />
          </div>

          <div className="form-group">
            <label>Description (Optional)</label>
            <textarea
              value={newTaskDesc}
              onChange={(e) => setNewTaskDesc(e.target.value)}
              placeholder="Enter task description..."
              rows="2"
            ></textarea>
          </div>

          <button type="submit" className="btn">
            + Add Task
          </button>
        </form>

        {/* Tasks List */}
        <div>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>
            Tasks ({tasks.length})
          </h3>

          {loading ? (
            <p className="no-tasks">Loading tasks...</p>
          ) : tasks.length === 0 ? (
            <p className="no-tasks">No tasks yet. Create one to get started! 🚀</p>
          ) : (
            tasks.map((task) => (
              <div key={task._id} className="task-item">
                <div className="task-content">
                  <div
                    className={`task-title ${
                      task.completed ? 'task-completed' : ''
                    }`}
                  >
                    {task.completed ? '✓' : '○'} {task.title}
                  </div>
                  {task.description && (
                    <div className="task-description">{task.description}</div>
                  )}
                </div>
                <div className="task-actions">
                  <button
                    className="btn btn-small btn-success"
                    onClick={() => handleToggleTask(task._id, task.completed)}
                  >
                    {task.completed ? 'Undo' : 'Done'}
                  </button>
                  <button
                    className="btn btn-small btn-danger"
                    onClick={() => handleDeleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
