import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import FileUpload from './FileUpload';
import ApprovedPublications from './ApprovedPublications';
import Profile from './Profile';
import HomePage from './HomePage';  

function StudentDashboard() {
  return (
    <div className="student-dashboard">
      <Header isAdmin={false} />  
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />  
          <Route path="home" element={<HomePage />} />
          <Route path="file-upload" element={<FileUpload />} />
          <Route path="approved-publications" element={<ApprovedPublications />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default StudentDashboard;
