import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>AdoptMe</h1>
      <div className="navbar-links">
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/details/:cardId" className="navbar-link">Detail</Link>
        <Link to="/" className="navbar-link">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;