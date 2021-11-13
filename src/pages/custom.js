import * as React from "react";
import Layout from "../components/Layout";
import { Link, graphql, useStaticQuery } from "gatsby";
import JSONData from "../data/fonts.json";
import { useState } from "react";

// Step 2: Define your component
const Custom = () => {
  const [fontList, setFontList] = useState(JSONData.fonts);

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { ext: { eq: ".svg" } }) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  function getPublicURL(fontName) {
    return data.allFile.edges.find((font) => {
      return font.node.name === fontName;
    }).node.publicURL;
  }

  return (
    <Layout pageTitle="Custom" pageIndex="501">
      {fontList.map((font, index) => {
        return (
          <div key={index}>
            <img src={getPublicURL(font.slug)} alt={font.name} />
            <p>
              {font.name} {font.slug}
            </p>
          </div>
        );
      })}
      <div>BREAKa</div>
      {JSONData.fonts.map((font, index) => {
        return (
          <div>
            <img src={getPublicURL(font.slug)} alt={font.name} />
            <p>
              {font.name} {font.slug}
            </p>
          </div>
        );
      })}
    </Layout>
  );
};
// Step 3: Export your component
export default Custom;
