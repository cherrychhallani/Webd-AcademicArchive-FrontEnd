import React, { useState, useEffect } from 'react';
import './styles/HomePage.css'; 

function HomePage() {
  const [approvedPublications, setApprovedPublications] = useState([]);

  useEffect(() => {
    
    const approvedDocs = JSON.parse(localStorage.getItem('approvedDocuments')) || [];
    setApprovedPublications(approvedDocs.slice(-4).reverse());
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to NotesHub</h1>
      <p>Now that we have finally verfied that you are a IIITA student, we provide you with condolences!</p>
      
      <div className="home-sections">
        
        <div className="box text-box">
          <h3>What do I do?</h3>
          <p>
            Well, since the maker of this website is just a frontend developer....my only job is to look pretty i guess. If you still think I am not I might not be your type, sorry to say it but you have bad taste.</p>
            <p>The purpose of this website is to create a platform where students can upload their question papers(that they did not feel like burning off) and notes maybe assignments so that everyone can get access to them but "admins reign supreme, reviewing the peasants’ (students’) submissions. Their approval is the final word!" as said by some of my great great seniors. After admin approval every user can get access to it!(Wohoo)</p>
        </div>
        
        <div className="box publications-box">
          <h3>Recent Publications</h3>
          <div className="publications-list">
            {approvedPublications.length > 0 ? (
              approvedPublications.map((doc, index) => (
                <div key={index} className="publication-item">
                  <div className="publication-icon">              <i className="fas fa-book"></i> 
                  </div>
                  <div className="publication-name">{doc.name}</div>
                </div>
              ))
            ) : (
              <p>No approved publications yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
