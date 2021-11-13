import * as React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import * as projects from "../css/modules/projects.module.css";
import JSONData from "../data/fonts.json";

const Projects = () => {
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
    <Layout pageTitle="Projects" pageIndex="401">
      <section className={projects.container}>
        {JSONData.fonts.map((font) => {
          if (font.isProject === true) {
            return (
              <article className={projects.item} key={font.fontIndex}>
                <img src={getPublicURL(font.slug)} alt={font.name} />
                <p>
                  {font.name} {font.slug}
                </p>
              </article>
            );
          } else {
            return "";
          }
        })}
      </section>
    </Layout>
  );
};

export default Projects;
