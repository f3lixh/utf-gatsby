import * as React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";
import JSONData from "../data/fonts.json";
import * as slot from "../css/modules/slot.module.css";

const Slot = () => {
  return (
    <Layout pageTitle="Slot" pageIndex="777">
      <section className={slot.canvas}>
        <div>W</div>
        <div>E</div>
        <div>L</div>
        <div>C</div>
        <div>O</div>
        <div>M</div>
        <div>E</div>
      </section>
    </Layout>
  );
};

export default Slot;
