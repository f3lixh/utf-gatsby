import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const cyrillic = "БГҐЃДЂЁЄЖИЇЙКЛЉЊПЋЌУЎФЦЧЏШЩЪЫЬЭЮЯ";
const greek = "ΓΔΘΛΞΠΣΥΦΨΩ";
const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const CharacterWrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const Map = styled.section`
  background-color: black;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(auto-fill, 75px);
`;

const Character = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  padding-bottom: 5px;
  border-radius: 2px;
  background-color: red;
  font-size: 2rem;

  :hover {
    z-index: 2;
    transition: all 75ms ease-in;
    transform: scale(1.8);
    background-color: red;
  }
`;

const DisplayGlpyh = styled.div`
  font-size: 12rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const ScriptHeadline = styled.h2`
  font-family: var(--font-family-std);
  margin: 20px 0px;
  font-size: 1rem;
`;

const changeGlyph = (glyph) => () => {
  document.getElementById("displayGlpyh").innerText = glyph;
};

const FontCharacterMap = ({ font, cyr, grk }) => {
  return (
    <CharacterWrapper style={{ fontFamily: `${font}` }}>
      <div>
        <>
          <ScriptHeadline>Latin</ScriptHeadline>
          <Map>
            {[...latin].map((e, i) => {
              return (
                <Character
                  data-character={e}
                  key={i}
                  onMouseOver={changeGlyph(e)}
                >
                  {e}
                </Character>
              );
            })}
          </Map>
        </>
        {cyr ? (
          <>
            <ScriptHeadline>Cyrillic</ScriptHeadline>
            <Map>
              {[...cyrillic].map((e, i) => {
                return (
                  <Character
                    data-character={e}
                    key={i}
                    onMouseOver={changeGlyph(e)}
                  >
                    {e}
                  </Character>
                );
              })}
            </Map>
          </>
        ) : (
          ""
        )}

        {grk ? (
          <>
            <ScriptHeadline>Greek</ScriptHeadline>
            <Map>
              {[...greek].map((e, i) => {
                return (
                  <Character
                    data-character={e}
                    key={i}
                    onMouseOver={changeGlyph(e)}
                  >
                    {e}
                  </Character>
                );
              })}
            </Map>
          </>
        ) : (
          ""
        )}
      </div>
      <DisplayGlpyh id="displayGlpyh">A</DisplayGlpyh>
    </CharacterWrapper>
  );
};

FontCharacterMap.propTypes = {
  cyr: PropTypes.bool,
  grk: PropTypes.bool,
};

export default FontCharacterMap;
