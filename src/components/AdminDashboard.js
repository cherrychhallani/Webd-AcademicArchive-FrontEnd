import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header';
import PendingFiles from './PendingFiles';
import ApprovedPublications from './ApprovedPublications';
import HomePage from './HomePage';  

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      {/* Pass isAdmin as true for admin */}
      <Header isAdmin={true} />  
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="home" />} />  {/* Redirect to home */}
          <Route path="home" element={<HomePage />} />
          <Route path="pending-files" element={<PendingFiles />} />
          <Route path="approved-publications" element={<ApprovedPublications />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminDashboard;
