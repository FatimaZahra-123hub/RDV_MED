import React from 'react';
import './Card.css';

const Card = ({ icon, title, description, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3 className="card-title">{title}</h3>}
      {description && <p className="card-description">{description}</p>}
    </div>
  );
};

export default Card;
