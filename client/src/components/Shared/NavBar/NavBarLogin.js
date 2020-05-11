import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css"

function NavBarLogin() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-light ml-auto">
    
      <img src="./assets/img/videostar-logo.png" alt="logo" style={{ marginLeft: 40, width: 200 }} />
      
      
      <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav" style={{display: 'block', alignContent: 'right'}}>
            <li className="nav-item">
            <Link to="/signup" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}><span className="clearfix d-none d-sm-inline-block" />Sign Up</Link>
            </li>
            <li className="nav-item">
            <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}><span className="clearfix d-none d-sm-inline-block" />Login</Link>
            </li>
          </ul>
      </div> 
     

    </nav>
  );
}

export default NavBarLogin;