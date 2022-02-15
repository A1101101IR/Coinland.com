import { Link } from "react-router-dom";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Twitter from "../img/twitter.png";
const Footer = () => {
  return (
    <section className="Footer">
      <div className="coinland-footer">
        <a href="/">
          <h2>Coinland</h2>
          <p>Just type what's on your mind</p>
        </a>
      </div>
      <div>
        <nav className="footer-nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
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
        <a href="">
          <img src={Facebook} width={40} />
        </a>
        <a href="">
          <img src={Instagram} width={40} />
        </a>
        <a href="">
          <img src={Twitter} width={40} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
