import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-box">
          <div className="footer-links">
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
          <section className="footer-contacts">
            <h4>Contact us</h4>
            <p>🖃 AdoptMe@FakeEmail.com</p>
            <p>🕻 00000000 </p>
          </section>
        </div>
        <span className="copyright">Copyright © 2024 AdoptMe</span>
      </footer>
    </>
  );
};

export default Footer;
