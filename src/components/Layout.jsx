import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CursorFollower from "./CursorFollower.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop>
        <CursorFollower />
        <Navbar />
        {children}
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default Layout;
