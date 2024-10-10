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
        <Link to="/login" className="navbarItem">
          Home
        </Link>

        <Link to="/signUp" className="navbarItem">
          Membership
        </Link>

        <Link to="/Event" className="navbarItem">
          Events
        </Link>

        <Link to="/pricing" className="navbarItem">
          Pricing
        </Link>
      </div>
    </>
  );
}

export default Nav;
