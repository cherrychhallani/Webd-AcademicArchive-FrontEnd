import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/ApprovedPublications.css';

function ApprovedPublications() {
  const [approvedDocs, setApprovedDocs] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const docs = JSON.parse(localStorage.getItem('approvedDocuments')) || [];
    setApprovedDocs(docs);
  }, []);

  const handleStudentClick = (studentId) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.id === studentId);
    setSelectedStudent(user);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="approved-publications-container">
      <h2>Approved Publications</h2>
      {approvedDocs.length > 0 ? (
        <ul>
          {approvedDocs.map((doc, index) => (
            <li key={index}>
              <i className="fas fa-book"></i>
              <span className="doc-name">{doc.name}</span> by__<span 
              className="student-id" onClick={() => handleStudentClick(doc.studentId)} 
              style={{ cursor: 'pointer', color: 'blue' }}> {doc.studentId}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No approved publications yet.</p>
      )}

      {selectedStudent && (
        <div className="student-popup">
          <button onClick={handleClosePopup}>Close</button>
          <h2>Student Information</h2>
          <p><b>ID:</b> {selectedStudent.id}</p>
          <p><b>Name:</b> {selectedStudent.name}</p>
          <p><b>Semester: </b>{selectedStudent.semester || 'N/A'}</p>
          <p><b>CG: </b>{selectedStudent.cg || 'N/A'}</p>
          <p><b>Clubs: </b>{selectedStudent.clubs || 'N/A'}</p>
        </div>
      )}
    </div>
  );
}

export default ApprovedPublications;
