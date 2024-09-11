import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './styles/Header.css';
import logo from '../assets/logo.png'; 


function Header({ isAdmin }) {  
  const [searchTerm, setSearchTerm] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setUserRole(user.role || '');
  }, []);

  const handleSearch = () => {
    navigate(`/search?query=${searchTerm}`);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleWebsiteNameClick = () => {
    if (isAdmin) {  
      navigate('/admin-dashboard'); 
    } else {
      navigate('/student-dashboard'); 
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        
        <img src={logo} alt="NotesHub Logo" onClick={handleWebsiteNameClick} className="logo" /> 
      </div>

      
      <div className="header-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button style={{backgroundColor:'#C2EDEE' }} onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} /> 
        </button>
      </div>

      
      <nav className="header-nav">
        <ul>
          {isAdmin ? (  
            <>
              <li><Link to="pending-files">Pending files</Link></li>
              <li><Link to="approved-publications">Approved Files</Link></li>
              <li><button style={{ backgroundColor: '#C2EDEE'}} onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="file-upload">Upload a file</Link></li>
              <li><Link to="approved-publications">Approved Files</Link></li>
              <li><Link to="profile">Profile</Link></li>
              <li><button style={{ backgroundColor: '#C2EDEE'}} onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
