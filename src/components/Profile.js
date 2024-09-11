import React, { useState } from 'react';
import './styles/Profile.css'; 

function Profile() {
  const [user] = useState(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  const [showPassword, setShowPassword] = useState(false); 

  const handlePasswordClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p><b>Name:</b> {user.name || 'N/A'}</p> 
      <p><b>ID:</b> {user.id}</p>
      <p className="password" onClick={handlePasswordClick}>
        <b>Password:</b> {showPassword ? user.password : '•'.repeat(user.password.length)}
      </p>
      <p><b>Semester: </b>{user.semester || 'N/A'}</p>
      <p><b>CG: </b>{user.cg || 'N/A'}</p>
      <p><b>Clubs: </b>{user.clubs || 'N/A'}</p>
    </div>
  );
}

export default Profile;
