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
    document.querySelectorAll("[data-dropdown]").forEach((dropdown) => {
      dropdown.classList.toggle(active);
    });
  };

  return (
    <div className={container}>
      <div className={headline} style={{ backgroundColor: background }}>
        {<h1 style={{ color: color }}>{text}</h1>}
      </div>
      <div className={dropdown} data-dropdown>
        <button data-dropdown-button onClick={toggleDropdown}>
          {dropdownName}
          <span>↓</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default DropdownHeadline;
