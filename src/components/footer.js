import logoimage from "../img/logo.png";
import { Link } from "react-router-dom";
import Twitter from "../img/twitter.png";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";

const Footer = () => {
  return (
    <section className="Footer">
      <div className="coinland-footer">
        <Link className="logo" to="/">
          <img src={logoimage} width={40} alt="" />
          <h2>Coinland.</h2>
        </Link>
      </div>
      <div>
        <nav className="footer-nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/product">
            Product
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </nav>
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank">
          <img src={Facebook} width={40} />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src={Instagram} width={40} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src={Twitter} width={40} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
