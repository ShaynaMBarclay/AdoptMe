import React from 'react';
import Card from '../components/Card';

const HomePage = ({ animals }) => {
  return (
    <div className="home-page">
      {animals.map((animal) => (
        <Card key={animal.id} animal={animal} />
      ))}
    </div>
  );
};

export default HomePage;