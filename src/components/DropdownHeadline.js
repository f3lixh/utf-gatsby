import * as React from "react";

import {
  active,
  container,
  dropdown,
  headline,
} from "../css/modules/dropdown-headline.module.css";

const DropdownHeadline = ({
  text,
  color,
  background,
  align,
  children,
  dropdownName,
}) => {
  const toggleDropdown = () => {
    document
      .querySelectorAll("[data-lol]")
      .forEach((e) => e.classList.toggle(active));
  };

  return (
    <div className={container}>
      <div className={headline} style={{ backgroundColor: background }}>
        {<h1 style={{ color: color }}>{text}</h1>}
      </div>
      <div className={dropdown} data-lol>
        <button onClick={toggleDropdown}>
          {dropdownName}
          <span>↓</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default DropdownHeadline;
