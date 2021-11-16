import * as React from "react";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log("hello from useState!");
  };

  return (
    <div className={container}>
      <div className={headline} style={{ backgroundColor: background }}>
        {<h1 style={{ color: color }}>{text}</h1>}
      </div>
      <div className={`${dropdown} ${isOpen ? active : ""}`} data-lol>
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
