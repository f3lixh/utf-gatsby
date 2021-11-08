import * as React from "react";

import FontBlog from "../components/FontBlog";

import Layout from "../components/Layout";

import "../css/fonts.css";
import JSONData from "../data/fonts.json";
import { container } from "../css/modules/fontblog.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home of UTF" pageIndex="101">
      <section className={container}>
        {JSONData.fonts.map((font) => {
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
