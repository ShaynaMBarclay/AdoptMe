import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // use effect to detect scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/src/components/NewLogo.png"
            alt="AdoptMe Logo"
            className="logo"
          />
        </Link>
        <h1 className="navbar-title">AdoptMe</h1>
      </div>

      <div className="navbar-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/about" className="navbar-link">
          About
        </Link>
        <Link to="/add-animal" className="navbar-link">
          Add Animal
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
