import * as React from "react";
import Layout from "../components/Layout";
import Headline from "../components/Headline";
import FontIndexItem from "../components/FontIndexItem";

import * as fontIndex from "../css/modules/font-index.module.css";

import JSONData from "../data/fonts.json";

const FontIndex = () => {
  var tempInitial;

  JSONData.fonts.sort((a, b) =>
    a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
  );

  const half = Math.ceil(JSONData.fonts.length / 2);
  var firstAreaFonts = JSONData.fonts.slice(0, half);
  var secondAreaFonts = JSONData.fonts.slice(half);

  console.log(firstAreaFonts);
  console.log(secondAreaFonts);

  sortFonts();

  function buildme(font) {
    if (tempInitial != font.name.charAt(0).toUpperCase()) {
      tempInitial = font.name.charAt(0).toUpperCase();
      return (
        <>
          <h1 className={fontIndex.initial}>{font.name.charAt(0)}</h1>
          <FontIndexItem data={font} key={font.fontIndex} />
        </>
      );
    } else {
      return (
        <>
          <FontIndexItem data={font} key={font.fontIndex} />
        </>
      );
    }
  }

  function sortFonts() {
    if (
      firstAreaFonts[firstAreaFonts.length - 1].name.charAt(0).toUpperCase() ===
      secondAreaFonts[0].name.charAt(0).toUpperCase()
    ) {
      firstAreaFonts.push(secondAreaFonts[0]);
      secondAreaFonts.shift();
      sortFonts();
    }
  }

  console.log(firstAreaFonts);
  console.log(secondAreaFonts);

  return (
    <Layout pageTitle="Font Index" pageIndex="105">
      <Headline
        text="All the fonts from a-z"
        color="black"
        background="white"
      ></Headline>
      <section className={fontIndex.container}>
        <div>
          {firstAreaFonts.map((font) => {
            return buildme(font);
          })}
        </div>
        <div>
          {secondAreaFonts.map((font) => {
            return buildme(font);
          })}
        </div>
      </section>
    </Layout>
  );
};

export default FontIndex;