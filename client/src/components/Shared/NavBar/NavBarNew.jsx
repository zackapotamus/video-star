import React, { useEffect, useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMovieFilter } from "react-icons/md";
import API from "../../../utils/API";

const NavBarNew = (props) => {
  // let history = useHistory();
  const autohideEl = useRef(null);
  const toggleButtonEl = useRef(null);
  let [lastScrollTop, setLastScrollTop] = useState(0);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    if (scrollTop < lastScrollTop) {
      autohideEl.current.classList.remove("scrolled-down");
      autohideEl.current.classList.add("scrolled-up");
    } else {
      if (lastScrollTop >= 0) {
        autohideEl.current.classList.remove("scrolled-up");
        autohideEl.current.classList.add("scrolled-down");
        if (!toggleButtonEl.current.classList.contains("collapsed")) {
          toggleButtonEl.current.click();
        }
      }
    }
    lastScrollTop = scrollTop;

    // window.addEventListener
  };
  const handleClickAway = (event) => {
    if (!autohideEl.current) return;
    if (!toggleButtonEl.current) return;
    const node = event.target;
    if (autohideEl.current.contains(node)) return;
    if (!toggleButtonEl.current.classList.contains("collapsed")) {
      toggleButtonEl.current.click();
    }
  };

  const history = props.history;
  useEffect(() => {
    if (autohideEl.current) {
      // var last_scroll_top = 0;
      window.addEventListener("scroll", handleScroll);
      // window.addEventListener
    }
    if (toggleButtonEl.current) {
      document.addEventListener("click", handleClickAway);
      document.addEventListener("touchstart", handleClickAway);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, []);
  // const location = useLocation();
  const location = props.location;
  const logOutUser = async () => {
    try {
      // console.log("GRRRRR");
      let response = await API.logOut();
      if (response.data.success) {
        localStorage.setItem("jwt", "");
        history.push("/login");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <nav
      ref={autohideEl}
      className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark autohide"
    >
      <a className="navbar-brand" href="#">
        <MdMovieFilter style={{ fontSize: 27 }} />
      </a>
      <button
        ref={toggleButtonEl}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => {}}
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
              to="/add"
              className={
                location.pathname === "/add" ? "nav-link active" : "nav-link"
              }
            >
              Add
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
              Lending
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
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
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
              <a className={"dropdown-item"} onClick={logOutUser}>
                Logout
              </a>
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
