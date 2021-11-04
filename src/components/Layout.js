import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Navbar></Navbar>
      <title>{pageTitle}</title>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
