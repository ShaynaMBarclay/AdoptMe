import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


function AboutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { animal } = location.state || {};

  if (!animal) {
    return (
      <div>
        <p>No animal data available.</p>
        <button onClick={() => navigate('/')}>Go Back to Homepage</button>
      </div>
    );
  }
    return <div>       <h1>About {animal.name}</h1>
    <img src={animal.image} alt={animal.name} style={{ width: '300px', height: 'auto' }} />
    <p><strong>Species:</strong> {animal.species}</p>
    <p><strong>Age:</strong> {animal.age}</p>
    <p>{animal.description}</p>
    <button onClick={() => navigate('/')}>Go Back to Homepage</button>

 </div>;

  }
  
  export default AboutPage;