import * as React from "react";
import { container } from "../css/modules/headline.module.css";

const Navbar = ({ text, color, background }) => {
  return (
    <div className={container} style={{ backgroundColor: background }}>
      {<h1 style={{ color: color }}>{text}</h1>}
    </div>
  );
};

export default Navbar;
