import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TaskList from './components/TaskList';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoginMode, setIsLoginMode] = useState(true);

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleRegisterSuccess = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setCurrentUser(null);
    setIsLoginMode(true);
  };

  // User is authenticated
  if (currentUser) {
    return <TaskList user={currentUser} onLogout={handleLogout} />;
  }

  // Show auth pages
  return isLoginMode ? (
    <div>
      <Login onLoginSuccess={handleLoginSuccess} />
      <div className="text-center" style={{ color: 'white', marginTop: '20px' }}>
        <p>
          Don't have an account?{' '}
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setIsLoginMode(false)}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  ) : (
    <div>
      <Register onRegisterSuccess={handleRegisterSuccess} />
      <div className="text-center" style={{ color: 'white', marginTop: '20px' }}>
        <p>
          Already have an account?{' '}
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => setIsLoginMode(true)}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
