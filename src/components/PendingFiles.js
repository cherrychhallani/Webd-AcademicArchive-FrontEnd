import React, { useState, useEffect } from 'react';
import './styles/PendingFiles.css';

function PendingFiles() {
  const [pendingDocs, setPendingDocs] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const docs = JSON.parse(localStorage.getItem('pendingDocuments')) || [];
    setPendingDocs(docs);
  }, []);

  const approveDocument = (index) => {
    const approvedDocs = JSON.parse(localStorage.getItem('approvedDocuments')) || [];
    const docToApprove = pendingDocs[index];
    approvedDocs.push(docToApprove);
    localStorage.setItem('approvedDocuments', JSON.stringify(approvedDocs));

    const updatedPendingDocs = pendingDocs.filter((_, i) => i !== index);
    setPendingDocs(updatedPendingDocs);
    localStorage.setItem('pendingDocuments', JSON.stringify(updatedPendingDocs));

    alert('Document approved and added to the approved publications list!');
  };

  const rejectDocument = (index) => {
    const updatedPendingDocs = pendingDocs.filter((_, i) => i !== index);
    setPendingDocs(updatedPendingDocs);
    localStorage.setItem('pendingDocuments', JSON.stringify(updatedPendingDocs));

    alert('Document rejected.');
  };

  const handleStudentClick = (studentId) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.id === studentId);
    setSelectedStudent(user);
  };

  const handleClosePopup = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="pending-files-container">
      <h2>Pending Files for Approval</h2>
      {pendingDocs.length > 0 ? (
        <ul>
          {pendingDocs.map((doc, index) => (
            <li key={index}>
              <div className="doc-info">
                <p><strong>Name:</strong> {doc.name}</p>
                <p><strong>File:</strong> {doc.file}</p>
                <p>
                  <strong>Student ID:</strong>
                  <span
                    className="student-id"
                    onClick={() => handleStudentClick(doc.studentId)}
                  >
                    {doc.studentId} <i className="fa fa-arrow-right"></i>
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button onClick={() => approveDocument(index)}>Approve</button>
                <button onClick={() => rejectDocument(index)}>Reject</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No pending files.</p>
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

export default PendingFiles;
