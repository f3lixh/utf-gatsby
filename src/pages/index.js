/* React & Gatsby */
import * as React from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

/* Components */
import FontBlog from "../components/FontBlog";
import Layout from "../components/Layout";
import DropdownHeadline from "../components/DropdownHeadline";

/* CSS */
import "../css/fonts.css";
import { container } from "../css/modules/fontblog.module.css";
import * as index from "../css/modules/index.module.css";
import { active } from "../css/modules/dropdown-headline.module.css";

/* Data */
import JSONData from "../data/fonts.json";

const IndexPage = () => {
  const [fontList, setFontList] = useState(() => {
    return JSONData.fonts;
  });

  const videos = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { eq: ".mp4" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const getRandomVideoURL = () => {
    return videos.allFile.edges[
      Math.floor(Math.random() * videos.allFile.edges.length)
    ].node.publicURL;
  };

  const sortBlogSection = (target) => () => {
    switch (target) {
      case "nameDESC":
        console.log("fail");
        const sorted = [...fontList].sort((a, b) =>
          a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
        );
        setFontList(sorted);
        document
          .querySelectorAll("[data-lol]")
          .forEach((e) => e.classList.toggle(active));
        break;
      default:
        console.log("fail");
    }
  };

  return (
    <Layout pageTitle="unofficial type foundry" pageIndex="101">
      <section className={index.hero}>
        <video autoPlay muted loop playsInline>
          <source src={getRandomVideoURL()} type="video/mp4" />
        </video>
        <div className={index.preview}>
          <h1>Soon:</h1>
          <span>
            Secret <span>Font</span>
          </span>
        </div>
      </section>
      <DropdownHeadline
        text="All the fonts"
        dropdownName="Sort by"
        color="white"
        background="black"
      >
        <ul className="sortingDropDown">
          <li onClick={sortBlogSection("nameDESC")} key={Math.random()}>
            Name (Descending)
          </li>
          <li>Index (Ascending)</li>
          <li>Index (Descending)</li>
        </ul>
      </DropdownHeadline>
      <section className={container}>
        {fontList.map((font) => {
          if (font.isProject === false) {
            return <FontBlog fontData={font} key={font.fontIndex} />;
          } else {
            return null;
          }
        })}
      </section>
    </Layout>
  );
};

export default IndexPage;
