import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/ShaynaMBarclay/AdoptMe.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      <Link to="/">Find a friend</Link>
      <Link to="/about">About us</Link>
      <Link to="/about">Contacts</Link>
      <span className="copyright">Copyright © 2024 AdoptMe</span>
    </div>
  );
};

export default Footer;