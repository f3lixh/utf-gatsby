import * as React from "react";
import { useState } from "react";
import FontTester from "../../components/FontTester";
import Layout from "../../components/Layout";

/* Data */

import JSONData from "../../data/fonts.json";

const Fonts = () => {
  const [fontList, setFontList] = useState(() => {
    return JSONData.fonts;
  });

  return (
    <Layout pageIndex={201} pageTitle="Fonts">
      <section style={{ padding: `0px 20px` }}>
        <h1>All The Fonts</h1>
        {fontList.map((font) => {
          if (font.isProject === false) {
            return (
              <FontTester fontData={font} key={font.fontIndex}></FontTester>
            );
          } else {
            return null;
          }
        })}
      </section>
    </Layout>
  );
};

export default Fonts;
