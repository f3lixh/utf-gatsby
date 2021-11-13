import * as React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import "../css/modules/navigator.module.css";
import JSONData from "../data/fonts.json";

// Step 2: Define your component

const Navigator = () => {
  /* const [fontList, setFontList] = useState(JSONData.fonts);

  const sortByName = () => {
    const sorted = [...fontList].sort((a, b) =>
      a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
    );

    setFontList(sorted);
  };

  const sortbyIndex = () => {
    const indexSorted = [...fontList].sort((a, b) => {
      return a.fontIndex - b.fontIndex;
    });
    setFontList(indexSorted);
  };

  const sortbyDate = () => {
    const dateSorted = [...fontList].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    setFontList(dateSorted);
  }; */

  return (
    <Layout pageTitle="Navigator" pageIndex="501">
      {/* <span>{index}</span>
      <button onClick={showme}>0</button>
      <button onClick={showme}>1</button>
      <button onClick={showme}>2</button>
      <button onClick={showme}>3</button>
      <button onClick={showme}>4</button>
      <button onClick={showme}>5</button>
      <button onClick={showme}>6</button>
      <button onClick={showme}>7</button>
      <button onClick={showme}>8</button>
      <button onClick={showme}>9</button> 
      {fontList.map((font) => {
        return (
          <p key={font.fontIndex}>
            {font.name} {font.fontIndex} {font.date}
          </p>
        );
      })}
      <button onClick={sortByName}>Name</button>
      <button onClick={sortbyIndex}>Sort Index</button>
      <button onClick={sortbyDate}>Sort date</button> */}
    </Layout>
  );
};
// Step 3: Export your component
export default Navigator;
