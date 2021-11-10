import * as React from "react";
import { container } from "../css/modules/headline.module.css";

const Headline = ({ text, color, background, align }) => {
  return (
    <div
      className={container}
      style={({ backgroundColor: background }, { justifyContent: align })}
    >
      {<h1 style={{ color: color }}>{text}</h1>}
    </div>
  );
};

export default Headline;
