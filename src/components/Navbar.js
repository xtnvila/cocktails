import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/cocktails">
          <img src={logo} alt="coktail db logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/cocktails">Home</Link>
          </li>
          <li>
            <Link to="/cocktails/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
