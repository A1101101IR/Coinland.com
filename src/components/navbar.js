import React from "react";
import { Link } from "react-router-dom";
import openbtn from "../img/open-btn.png";
import closebtn from "../img/close-btn.png";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }
  handleClose() {
    this.setState({
      open: false,
    });
  }
  render() {
    return (
      <section className="navbar">
        <div className="nav-left">
          <Link className="logo" to="/">
            <h2>Coinland</h2>
          </Link>
        </div>
        {!this.state.open && (
          <nav className="nav-center">
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
        )}
        <div className="nav-right">
          <Link className="login-btn" to="/">
            Login
          </Link>
          {!this.state.open && (
            <img
              className="open-btn"
              onClick={this.handleOpen}
              src={openbtn}
              width={36}
            />
          )}
        </div>
        {this.state.open && (
          <div className="toggle-nav">
            <img
              className="close-btn"
              onClick={this.handleClose}
              src={closebtn}
              width={36}
            />
            <ul>
              <li>
                <Link onClick={this.handleClose} className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClose} className="link" to="/about">
                  Product
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClose} className="link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link onClick={this.handleClose} className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </section>
    );
  }
}
export default Navbar;
