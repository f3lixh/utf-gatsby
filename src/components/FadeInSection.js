import * as React from "react";
/* import styled from "styled-components"; */
import { useState, useRef, useEffect } from "react";

const FadeInWrapper = ({ props, color }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""} ${color}`}
      ref={domRef}
    >
      {props}
    </div>
  );
};

const FadeInSection = ({ children }) => {
  return <FadeInWrapper props={children} color="red"></FadeInWrapper>;
};

export default FadeInSection;
