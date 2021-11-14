import * as React from "react";
import Layout from "../../components/Layout";
import { container, header } from "../../css/modules/fontpage.module.css";

const Fractured = () => {
  const displayFont = {
    fontFamily: "Fractured",
  };
  return (
    <Layout pageTitle="Fractured" pageIndex="295">
      <div className={header}>
        <div>
          <span>&#57359;</span>
          <span>&#57396;</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>&#57411;</span>
          <span>R</span>
          <span>&#57356;</span>
          <span>D</span>
        </div>
      </div>
    </Layout>
  );
};

export default Fractured;
