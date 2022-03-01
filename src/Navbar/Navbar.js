import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="header">
        <img src="logo.PNG" alt="logo" className="logo" />
        <ul className=" nav-links">
          <li className="center">
            <a href="#">Home</a>
          </li>
          <li className="upward">
            <a href="#">About Us</a>
          </li>
          <li className="forward">
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="log">
          <button className="login">
            <spam>Sign In</spam>
          </button>
          <button className="register">
            {" "}
            <spam>Sign Up</spam>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
