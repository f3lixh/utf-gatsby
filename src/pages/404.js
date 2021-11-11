import * as React from "react";
import Layout from "../components/Layout";
import * as pageNotFound from "../css/modules/pageNotFound.module.css";
import * as color from "../css/modules/color.module.css";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page not Found" pageIndex="404">
      <section className={pageNotFound.container}>
        <div className={pageNotFound.colors}>
          <div className={pageNotFound.firstRow}>
            <div className={color.white}></div>
            <div className={color.yellow}></div>
            <div className={color.cyan}></div>
            <div className={color.green}></div>
            <div className={color.pink}></div>
            <div className={color.red}></div>
            <div className={color.blue}></div>
          </div>
          <div className={pageNotFound.middleRow}>
            <div className={color.blue}></div>
            <div className={color.black}></div>
            <div className={color.pink}></div>
            <div className={color.black}></div>
            <div className={color.cyan}></div>
            <div className={color.black}></div>
            <div className={color.white}></div>
          </div>
          <div className={pageNotFound.lastRow}>
            <div style={{ backgroundColor: "#00214C" }}></div>
            <div className={color.white}></div>
            <div style={{ backgroundColor: "#320B6A" }}></div>
            <div className={color.black}></div>
            <div className={pageNotFound.special}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className={color.black}></div>
          </div>
        </div>
        <div className={pageNotFound.error}>
          <span>404</span>
          <span>PAGE NOT FOUND</span>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
