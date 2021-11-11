import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as fontblog from "../css/modules/fontblog.module.css";
import "../css/utility.css";

const FontBlog = ({ fontData }) => {
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
    <Link to={`/fonts/${fontData.slug}`} className={fontblog.post}>
      <div className={fontblog.thumbnail}>
        <img src={getPublicURL(fontData.slug)} alt={fontData.name} />
      </div>
      <div className={`dotted`}>
        <span>{fontData.name}</span>
        <span>{fontData.fontIndex}</span>
      </div>
    </Link>
  );
};

export default FontBlog;
