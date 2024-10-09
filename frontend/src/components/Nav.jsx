import React from "react";
import { Link } from "react-router-dom";
//-->  { Link } allows users to navigate between routes without full page reloads.

function Nav() {
  return (
    <>
      <div className="navbar">
        <Link to="/Features" className="navbarItem">
          Features
        </Link>

        <Link to="/pricing" className="navbarItem">
          Pricing
        </Link>

        <Link to="/signUp" className="navbarItem">
          Create a Sign Up
        </Link>

        <Link to="/about" className="navbarItem">
          Login
        </Link>
      </div>
    </>
  );
}

export default Nav;
