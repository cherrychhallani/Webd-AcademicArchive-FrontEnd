import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import SearchResults from './components/SearchResults';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/student-dashboard/*" element={<StudentDashboard />} />
        <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
