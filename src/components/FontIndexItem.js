import * as React from "react";
import { Link } from "gatsby";
import * as fontIndex from "../css/modules/font-index.module.css";
/* import "../css/utility.css"; */

const FontIndexItem = ({ data }) => {
  return (
    <Link
      loading="lazy"
      key={data.fontIndex}
      to={`/fonts/${data.slug}`}
      className={fontIndex.item}
    >
      <span>{data.isProject ? data.name + " (P)" : data.name}</span>
      <span>{data.fontIndex}</span>
    </Link>
  );
};

export default FontIndexItem;
