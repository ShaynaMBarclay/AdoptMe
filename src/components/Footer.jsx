import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <a
          href="https://github.com/ShaynaMBarclay/AdoptMe.git"
          className="footer-link"
        >
          GitHub Repo
        </a>{" "}
        <Link to="/" className="footer-link">
          Find a friend
        </Link>
        <Link to="/about" className="footer-link">
          About Us
        </Link>
      </div>
      <span className="copyright">Copyright © 2024 Adopt Me</span>
    </div>
  );
};

export default Footer;
