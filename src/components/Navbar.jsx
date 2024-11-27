import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo and Title */}
      <div className="navbar-logo">
        <Link to="/">
          <img src="src/assets/logonobackground.png" alt="AdoptMe Logo" className="logo" />
        </Link>
      <h1>AdoptMe</h1>
      </div>
      
      <div className="navbar-links">
        <Link to="/details/:cardId" className="navbar-link">Detail</Link>
        <Link to="/" className="navbar-link">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;