import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { ReactComponent as HomeIcon } from "../images/home.svg";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import { ReactComponent as LibraryIcon } from "../images/library.svg";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  //to change the active class according to the url
  const [isActive, setIsActive] = useState("home");
  const location = useLocation();
  useEffect(() => {
    const url = window.location.pathname;
    if (url === "/") {
      setIsActive("home");
    } else if (url === "/search") {
      setIsActive("search");
    } else if (url === "/artists") {
      setIsActive("artists");
    }
  }, [location]);

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
        <Link to="/">
          <li
            className={isActive === "home" ? "active" : ""}
            style={{ textDecoration: "none" }}
          >
            <HomeIcon />
            Home
          </li>
        </Link>

        <Link to="/search" style={{ textDecoration: "none" }}>
          <li className={isActive === "search" ? "active" : ""}>
            <SearchIcon />
            Search
          </li>
        </Link>
        <Link to="/artists" style={{ textDecoration: "none" }}>
          <li className={isActive === "artists" ? "active" : ""}>
            <LibraryIcon />
            Artists
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
