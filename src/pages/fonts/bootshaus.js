import * as React from "react";
import { useState, useRef, useEffect } from "react";
import Layout from "../../components/Layout";
/* import { header } from "../../css/modules/fontpage.module.css"; */
/* import styled from "styled-components";
import FontHero from "../../components/FontPages/FontHero";
import FontCharacterMap from "../../components/FontPages/FontCharacterMap"; */
import styled from "styled-components";
import FadeInSection from "../../components/FadeInSection";

const Wrapper = styled.section`
  font-family: "Bootshaus";
  height: calc(100vh - var(--navbar-height));
  background-color: blue;
  color: yellow;
  font-size: 12rem;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bootshaus = () => {
  return (
    <Layout
      pageTitle="Bootshaus"
      pageIndex="278"
      navbarColor={"black"}
      dateColor={"yellow"}
      timeColor={"yellow"}
      itemColor={"white"}
      indexColor={"yellow"}
    >
      <FadeInSection>
        <Wrapper>
          <p>Bootshaus</p>
        </Wrapper>
      </FadeInSection>
    </Layout>
  );
};

export default Bootshaus;
