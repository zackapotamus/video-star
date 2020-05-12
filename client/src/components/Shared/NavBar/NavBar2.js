import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./NavBar.css"

function NavBar2() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-light ml-auto">
      
      <a className="navbar-brand" href="/">
        <img src="./assets/img/videostar-logo.png" alt="logo" style={{ width: 200 }} />
      </a>
    
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav navbar-nav nav-flex-icons ml-auto">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>My Library</Link>
      </li>
      <li className="nav-item">
        <Link to="/add" className={location.pathname === "/lend" ? "nav-link active" : "nav-link"}>Add</Link>
      </li>
      <li className="nav-item">
        <Link to="/lentborrowed" className={location.pathname === "/lentborrowed" ? "nav-link active" : "nav-link"}>Lent/Borrowed</Link>
      </li>
      <li className="nav-item">
        <Link to="/lend" className={location.pathname === "/lend" ? "nav-link active" : "nav-link"}>Lend</Link>
      </li>
      <li className="nav-item">
        <Link to="/borrow" className={location.pathname === "/borrow" ? "nav-link active" : "nav-link"}>Borrow</Link>
      </li>
<<<<<<< HEAD
      <li className="nav-item">
        <Link to="/account" className={location.pathname === "/account" ? "nav-link active" : "nav-link"}>Account</Link>
      </li>
      <li className="nav-item">
        <Link to="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Logout</Link>
=======
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="/profile" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/profile">Account</a>
          <a class="dropdown-item" href="/profile">Profile</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/logout">Log Out</a>
        </div>
>>>>>>> 73eb8eb56bb90a5cbe3dff5aa6babc19a48f3712
      </li>
      
    </ul>
    </div>
    </nav>
  );
}

export default NavBar2;