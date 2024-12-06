// src/components/PGCard.js
import React from 'react';

const PGCard = ({ name, location, price, reviews }) => (
  <div className="pg-card">
    <h3>{name}</h3>
    <p>{location}</p>
    <p>Price: ₹{price}/month</p>
    <p>Reviews: {reviews}</p>
  </div>
);

export default PGCard;
