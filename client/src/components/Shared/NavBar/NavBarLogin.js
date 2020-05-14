import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import VideoStarLogo from '../../../img/videostar-logo.png';

function NavBarLogin() {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ml-auto">
      
      <a className="navbar-brand" href="/">
        <img src={VideoStarLogo} alt="logo" style={{ width: 200 }} />
      </a>
      
      <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">

            <li className="nav-item">
              <Link to="/" className={location.pathname === "/signup" ? "nav-link active" : "nav-link"}><span className="clearfix d-none d-sm-inline-block" />Sign Up</Link>
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