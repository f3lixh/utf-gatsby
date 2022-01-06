import * as React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "normalize.css";

const Layout = ({
  children,
  pageTitle,
  pageIndex,
  indexColor,
  itemColor,
  dateColor,
  timeColor,
  navbarColor,
}) => {
  return (
    <>
      <Navbar
        pageIndex={pageIndex}
        indexColor={indexColor}
        itemColor={itemColor}
        dateColor={dateColor}
        timeColor={timeColor}
        navbarColor={navbarColor}
      ></Navbar>
      <title>{pageTitle}</title>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
};

export default Layout;
