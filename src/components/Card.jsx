import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ animal }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about', { state: { animal } }); 
  };
  return (
    
    <div className="card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>Species: {animal.species}</p>
      <p>Age: {animal.age}</p>
      <p>{animal.description}</p>
      </div>
    
  );
};

export default Card;