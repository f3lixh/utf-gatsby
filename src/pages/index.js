import * as React from "react";

import FontBlog from "../components/FontBlog";
import { useState } from "react";
import Layout from "../components/Layout";

import "../css/fonts.css";
import JSONData from "../data/fonts.json";
import { container } from "../css/modules/fontblog.module.css";
import DropdownHeadline from "../components/DropdownHeadline";

const IndexPage = () => {
  const [asc, setasc] = useState(true);
  const [fontList, setFontList] = useState(JSONData.fonts);

  const sortByName = () => {
    if (asc) {
      const sorted = [...fontList].sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      );
      setasc(false);
      setFontList(sorted);
    } else if (!asc) {
      const sorted = [...fontList].sort((a, b) =>
        b.name.toUpperCase() > a.name.toUpperCase() ? 1 : -1
      );
      setasc(true);
      setFontList(sorted);
    }
  };

  return (
    <Layout pageTitle="Home of UTF" pageIndex="101">
      <DropdownHeadline
        text="All the fonts"
        dropdownName="Sort by"
        color="white"
        background="black"
      >
        <ul>
          <li>Name (Ascending)</li>
          <li>Name (Descending)</li>
          <li>Index (Ascending)</li>
          <li>Index (Descending)</li>
          <li>Release Date</li>
        </ul>
      </DropdownHeadline>
      <section className={container}>
        {fontList.map((font) => {
          if (font.isProject === false) {
            return <FontBlog fontData={font} key={font.fontIndex} />;
          } else {
            return "";
          }
        })}
      </section>
    </Layout>
  );
};

export default IndexPage;
