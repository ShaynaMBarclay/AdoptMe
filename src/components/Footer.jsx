import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <a href="https://github.com/ShaynaMBarclay/AdoptMe.git">GitHub Repo</a>{" "}
      <br />
      <Link to="/" className="">
        Find a friend
      </Link>
      <br />
      <Link to="/about" className="about-page">
        About Us
      </Link>
      <br />
      <span className="copyright">Copyright © 2024 Adopt Me</span>
    </div>
  );
};

export default Footer;
