import React from 'react';

const Card = ({ animal }) => {
  return (
    <div className="card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <p>Species: {animal.species}</p>
      <p>Age: {animal.age}</p>
      <p>{animal.description}</p>
    </div>
  );
};

export default Card;