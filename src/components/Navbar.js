import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import * as nav from "../css/modules/navbar.module.css";

const Navbar = ({
  pageIndex,
  indexColor,
  itemColor,
  dateColor,
  timeColor,
  navbarColor,
}) => {
  /* const [index, setIndex] = useState(() => parseInt(pageIndex)); */

  if (pageIndex == null) {
    pageIndex = "nan";
  }

  const toggleMe = () => {
    let navUl = document.getElementById("nav-ul");
    navUl.classList.toggle(nav.active);
  };

  return (
    <nav
      className={nav.container}
      role="navigation"
      style={{
        backgroundColor: navbarColor,
        transition: "background-color 500ms linear",
      }}
    >
      <div className={nav.logo}>
        <Link style={{ color: indexColor }} to="/">
          UTF/{pageIndex}
        </Link>
      </div>
      <ul id="nav-ul" style={{ color: itemColor }}>
        <li>
          <Link to="/fonts/">Fonts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/custom">Custom</Link>
        </li>
        <li className={nav.date} style={{ color: dateColor }}>
          {new Date().toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </li>

        <li id="nav-time" className={nav.time} style={{ color: timeColor }}>
          {new Date().toLocaleTimeString()}
        </li>
      </ul>
      <div
        className={nav.button}
        onClick={toggleMe}
        role="menubar"
        focusable="true"
      ></div>
    </nav>
  );
};

setInterval(() => {
  document.getElementById("nav-time").innerText =
    new Date().toLocaleTimeString();
}, 1000);

export default Navbar;
