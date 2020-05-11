import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css"

function NavBarLogin() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-light">
        <h1><span className="navbar-brand mb-3 ml-3">VideoStar</span></h1>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav nav-flex-icons ml-auto">
            <li className="nav-item">
              <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}><span class="clearfix d-none d-sm-inline-block" />Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}><span class="clearfix d-none d-sm-inline-block" />Login</Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default NavBarLogin;