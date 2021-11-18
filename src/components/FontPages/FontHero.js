import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  padding-top: 15px;
  font-family: "Fractured Italic";
  height: 33vh;
  background-color: blue;
  font-size: 9rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    color: red;
  }
`;

const FontHero = ({ children, font }) => {
  return <Wrapper id={font}>{children}</Wrapper>;
};
export default FontHero;
