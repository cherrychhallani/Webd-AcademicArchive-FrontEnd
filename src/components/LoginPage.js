import React, { useState } from 'react';
import './styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { authenticateUser, getUserRole } from '../utils/auth';

function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authenticateUser(id, password)) {
      const role = getUserRole(id);
      console.log(`Redirecting to ${role}-dashboard`);
      navigate(`/${role}-dashboard`);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-page">
      <h1 class="heading">Welcome to NotesHub<p>(as Chagpt had no better name suggestions!)</p></h1>
      
      <div className="login-container">
        <h2 className="login-header"><b><u>Login </u></b><p>Using your LDAP credentials</p></h2>
        <input
          className="login-input"
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" style={{ backgroundColor: '#38A3A5' }} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
