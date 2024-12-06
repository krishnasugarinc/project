import React from 'react';

function PGCard({ name, location, price, reviews }) {
    return (
        <div className="pg-card">
            <h2>{name}</h2>
            <p>{location}</p>
            <p>Price: {price}</p>
            <p>Reviews: {reviews}</p>
        </div>
    );
}

export default PGCard;

