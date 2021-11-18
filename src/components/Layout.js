import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "normalize.css";

const Layout = ({ children, pageTitle, pageIndex }) => {
  return (
    <>
      <Navbar pageIndex={pageIndex}></Navbar>
      <title>{pageTitle}</title>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
