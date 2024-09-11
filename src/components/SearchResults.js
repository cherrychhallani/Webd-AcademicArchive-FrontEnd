import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header'; 
import './styles/SearchResults.css';


function SearchResults() {
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchResults = () => {
      const approvedDocs = JSON.parse(localStorage.getItem('approvedDocuments')) || [];
      const filteredResults = approvedDocs.filter(doc =>
        doc.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    };

    fetchResults();
  }, [query]);

  return (
    <div>
            <Header isAdmin={false} /> 
    
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {results.length > 0 ? (
          results.map((doc, index) => <li key={index}>{doc.name}</li>)
        ) : (
          <p>No results found.</p>
        )}
      </ul>
    </div>
    </div>
  );
}

export default SearchResults;
