import * as React from "react";
import { Link } from "gatsby";
import * as nav from "../css/modules/navbar.module.css";

const Navbar = ({ pageIndex }) => {
  if (pageIndex == null) {
    pageIndex = "nan";
  }

  const toggleMe = () => {
    let navUl = document.getElementById("nav-ul");
    navUl.classList.toggle(nav.active);
  };

  return (
    <nav className={nav.container}>
      <div className={nav.logo}>
        <Link to="/">UTF/{pageIndex}</Link>
      </div>
      <ul id="nav-ul">
        <li>
          <Link to="/fonts/">Fonts</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/custom">Custom</Link>
        </li>
        <li className={nav.date}>
          {new Date().toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </li>

        <li id="nav-time" className={nav.time}>
          {new Date().toLocaleTimeString()}
        </li>
      </ul>
      <div className={nav.button} onClick={toggleMe}></div>
    </nav>
  );
};

setInterval(() => {
  document.getElementById("nav-time").innerText =
    new Date().toLocaleTimeString();
}, 1000);

export default Navbar;
