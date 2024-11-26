import React from "react";
//import logo from 

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div>
        <h1 className="navbar-title">AdoptMe</h1>
      </div>
      <ul className="navbar-list">{/* Navbar stuff here */}</ul>
    </nav>
  );
};