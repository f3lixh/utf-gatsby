import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">UTF/100</Link>
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/fonts/">Fonts</Link>
        </li>
        <li>
          <Link to="/custom">Custom</Link>
        </li>
        <li>
          {new Date().toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </li>

        <li id="nav-time">{new Date().toLocaleTimeString()}</li>
      </ul>
    </nav>
  );
};

setInterval(() => {
  document.getElementById("nav-time").innerText =
    new Date().toLocaleTimeString();
}, 1000);

export default Navbar;
