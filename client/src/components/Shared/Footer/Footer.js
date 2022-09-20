import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import MovieDBLogo from "../../../img/moviedb-logo.png";

function Footer(props) {
  const location = useLocation();
  return (
    <footer
      className={`page-footer font-small pt-1${
        location.pathname === "/login" || location.pathname === "/signup"
          ? " page-footer-fixed"
          : ""
      }`}
    >
      <div className="footer-copyright text-center py-0">
        <span className={"helper"}></span>
        <img
          className="mr-3"
          src={MovieDBLogo}
          alt="moviedb-logo"
          style={{ width: 102, height: 40 }}
          // width="102"
          height="40"
        />
        <span>© VideoStar 2020</span>
      </div>
    </footer>
  );
}

export default Footer;
