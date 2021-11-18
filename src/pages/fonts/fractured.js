import * as React from "react";
import Layout from "../../components/Layout";
/* import { header } from "../../css/modules/fontpage.module.css"; */
import styled from "styled-components";
import FontHero from "../../components/FontPages/FontHero";
import FontCharacterMap from "../../components/FontPages/FontCharacterMap";
const featuredFont = "Fractured";
const Fractured = () => {
  return (
    <Layout pageTitle="Fractured" pageIndex="295">
      <FontHero font={featuredFont}>
        &#57359;&#57396;A&#57433;T&#57411;R&#57356;D
      </FontHero>
      <FontCharacterMap font={featuredFont}></FontCharacterMap>
    </Layout>
  );
};

export default Fractured;
