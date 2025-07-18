import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import CursorFollower from "./CursorFollower.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import Preloader from "./Preloader.jsx";
import BackToTop from "./BackToTop.jsx";
import { LoadingContext } from "./LoadingContext.jsx";
import { CartProvider } from "../context/cartContext.jsx";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setShowFooter(false); // Reset footer visibility on route change

    const handlePageLoad = () => {
      setIsLoading(false);

      // Show footer after 0.5 seconds delay
      setTimeout(() => {
        setShowFooter(true);
      }, 500);
    };

    // For initial page load
    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // For route changes (SPA navigation)
    const timer = setTimeout(handlePageLoad, 500); // Fallback

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handlePageLoad);
    };
  }, [location]);

  // Trigger loading on route change
  useEffect(() => {
    setIsLoading(true);

    // Wait for the current page to finish rendering
    const handlePageLoad = () => {
      requestAnimationFrame(() => {
        setIsLoading(false);
      });
    };

    handlePageLoad();
  }, [location]);

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      <ScrollToTop>
        <CursorFollower />
        <CartProvider>
          <div className="page-container">
            <Navbar />
            {isLoading && <Preloader />}
            <BackToTop />
            <div className="content-wrap">{children}</div>
            {showFooter && <Footer />}
          </div>
        </CartProvider>
      </ScrollToTop>
    </LoadingContext.Provider>
  );
};

export default Layout;
