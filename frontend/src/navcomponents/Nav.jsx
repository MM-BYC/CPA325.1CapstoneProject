import React from "react";
import { Link } from "react-router-dom";
//-->  { Link } allows users to navigate between routes without full page reloads.

function Nav() {
  return (
    <>
      <div className="navbar">
        <Link to="/signUp">Profile</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>

        <Link to="/settings">Settings</Link>
      </div>
    </>
  );
}

export default Nav;
