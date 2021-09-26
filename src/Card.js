import React from 'react';
import './Card.css';

function Card({ src }) {
  return (
    <div className="card">
      <img src={src} alt="" />      
    </div>
  )
}

export default Card;
