import * as React from "react";
import FontIndexItem from "../components/FontIndexItem";
import Headline from "../components/Headline";
import Layout from "../components/Layout";

import * as fontIndex from "../css/modules/font-index.module.css";

import JSONData from "../data/fonts.json";

const FontIndex = () => {
  var tempInitial;

  const half = Math.ceil(JSONData.fonts.length / 2);
  var firstAreaFonts = JSONData.fonts.slice(0, half);
  var secondAreaFonts = JSONData.fonts.slice(half);

  function buildme(font) {
    if (tempInitial !== font.name.charAt(0).toUpperCase()) {
      tempInitial = font.name.charAt(0).toUpperCase();
      return (
        <>
          <h1 key={font.fontIndex} className={fontIndex.initial}>
            {font.name.charAt(0)}
          </h1>
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
