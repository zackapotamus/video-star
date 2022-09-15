import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import API from "../../../utils/API";

const NavBarNew = () => {
  useEffect(() => {
    console.log("NavBarNew loaded");
  }, [])
  const location = useLocation();
  const logOutUser = async () => {
    try {
      // console.log("GRRRRR");
      let response = await API.logOut();
      if (response.data.success) {
        localStorage.setItem("jwt", "");
        return true;
      } else {
        return false;
      }
      } catch (err) {
      console.log(err);
    }
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <MdMovieFilter style={{fontSize: 27}}/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link
              to="/library"
              className={
                location.pathname === "/library"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Library
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/lentborrowed"
              className={
                location.pathname === "/lentborrowed"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Lent/Borrowed
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/add"
              className={
                location.pathname === "/add" ? "nav-link active" : "nav-link"
              }
            >
              Add
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {/* Account */}
              <FaUser />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <Link
              to="/account"
              className={
                location.pathname === "/account"
                  ? "dropdown-item active"
                  : "dropdown-item"
              }
            >
              Account
            </Link>
              <div className="dropdown-divider"></div>
              <Link to="/login" className={"dropdown-item"} onClick={logOutUser}>
                Logout
              </Link>
            </div>
          </li>
          {/* <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li> */}
        </ul>
        {/* <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};

export default NavBarNew;
