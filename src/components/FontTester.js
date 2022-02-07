import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import * as fontTester from "../css/modules/fonttester.module.css";
import "../css/utility.css";
import { useState } from "react";

const FontTester = ({ fontData }) => {
  const [style, setStyle] = useState(fontData.name);

  const data = useStaticQuery(graphql`
    query {
      allFile {
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

  function FontStyles() {
    if (fontData.styles.length > 0) {
      return (
        <>
          {fontData.styles.map((styleType, index) => {
            return (
              <button
                onClick={() => {
                  setStyle(() => {
                    if (styleType != "Regular") {
                      return `${fontData.name} ${styleType}`;
                    } else {
                      return `${fontData.name}`;
                    }
                  });
                }}
                key={index}
              >
                {styleType}
              </button>
            );
          })}
        </>
      );
    } else {
      return null;
    }
  }

  return (
    <div className={fontTester.container}>
      <div className={fontTester.functions}>
        <h3 className={fontTester.name}>{fontData.name}</h3>
      </div>
      <div
        spellCheck="false"
        suppressContentEditableWarning="true"
        contentEditable="true"
        style={{ fontFamily: style }}
        className={fontTester.testfield}
      >
        {fontData.text}
      </div>
      <FontStyles></FontStyles>
    </div>
  );
};

export default FontTester;
