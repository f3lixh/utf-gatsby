import * as React from "react";
import styled from "styled-components";

const cyrillic = "БГҐЃДЂЁЄЖИЇЙКЛЉЊПЋЌУЎФЦЧЏШЩЪЫЬЭЮЯ";

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const Map = styled.section`
  background-color: black;
  position: relative;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, 50px);
`;

const Character = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  padding-top: 10px;
  background-color: blue;
  font-size: 3rem;
  position: relative;
  :hover {
    z-index: 2;
    transition: all 75ms ease-in;
    transform: scale(1.8);
    background-color: red;
  }
`;

const DisplayGlpyh = styled.div`
  font-size: 8rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const changeGlyph = (glyph) => () => {
  document.getElementById("displayGlpyh").innerText = glyph;
};

const FontCharacterMap = ({ font }) => {
  return (
    <CharacterWrapper style={{ fontFamily: `${font}` }}>
      <Map>
        {[...cyrillic].map((e, i) => {
          return (
            <Character data-character={e} key={i} onMouseOver={changeGlyph(e)}>
              {e}
            </Character>
          );
        })}
      </Map>
      <DisplayGlpyh id="displayGlpyh">A</DisplayGlpyh>
    </CharacterWrapper>
  );
};

export default FontCharacterMap;
