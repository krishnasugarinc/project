// src/pages/SearchResults.js
import React, { useState, useEffect } from 'react';
import PGCard from '../components/PGCard';

const SearchResults = () => {
  const [pgList, setPgList] = useState([]);

  useEffect(() => {
    fetch('/api/pgs') // Call your backend API
      .then(response => response.json())
      .then(data => setPgList(data));
  }, []);

  return (
    <div>
      {pgList.map(pg => (
        <PGCard key={pg.id} {...pg} />
      ))}
    </div>
  );
};

export default SearchResults;

