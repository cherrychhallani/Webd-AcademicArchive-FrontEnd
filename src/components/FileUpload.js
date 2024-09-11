import React, { useState } from 'react';
import './styles/FileUpload.css';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [docName, setDocName] = useState('');

  const studentId = JSON.parse(localStorage.getItem('currentUser') || '{}').id;

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDocNameChange = (e) => {
    setDocName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!file || !docName) {
      alert('Please provide a file and a document name.');
      return;
    }

    const pendingDocs = JSON.parse(localStorage.getItem('pendingDocuments')) || [];
    pendingDocs.push({ name: docName, file: file.name, studentId });
    localStorage.setItem('pendingDocuments', JSON.stringify(pendingDocs));

    alert('File uploaded successfully for admin approval!');
    setFile(null);
    setDocName('');
  };

  return (
    <div className="file-upload-container">
      <h2>Upload a File</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="docName">Enter Document Name:</label>
          <input
            type="text"
            id="docName"
            value={docName}
            onChange={handleDocNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="file">Choose File:</label>
          <input type="file" id="file" onChange={handleFileChange} required />
        </div>
        <button type="submit" style={{ backgroundColor: '#38A3A5' }}>Submit for Approval</button>
      </form>
    </div>
  );
}

export default FileUpload;
