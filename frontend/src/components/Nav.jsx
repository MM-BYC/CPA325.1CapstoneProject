import React from "react";
import { Link } from "react-router-dom";
/*  
import{ Link } allows users to navigate between routes without full page reloads. 
<Link to> this prop will be passed to the Router to look for matching path.
e.g. <Link to="/pricing"> passed to Router will look for path="/pricing" will then render element={<Pricing/>}

*/

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

        <Link to="/login" className="navbarItem">
          Login
        </Link>
      </div>
    </>
  );
}

export default Nav;
