import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Youtube, BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <Link to={"/"}>
              <img src="assets/img/logo/shop-antik-white.png" alt="" />
            </Link>
          </div>
          {/* Copyright Section */}
          <div className="copyright-section">
            <div className="copyright-text">
              © 2025 All Rights Reserved by
              <a
                href="https://www.facebook.com/originalantik"
                className="author-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Antik Mahmud
              </a>
            </div>
            <div className="copyright-text">
              Website Developed by
              <a
                href="https://www.linkedin.com/in/moheb619/"
                className="author-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Saeed Hossain Moheb
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social-media-section">
            <div className="social-title">
              <Link to="/contact">Contact Us</Link>
            </div>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/originalantik"
                className="social-icon"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@AntikMahmud"
                className="social-icon"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.rokomari.com/book/author/69916/antik-mahmud"
                className="social-icon"
                aria-label="Rokomari"
              >
                <BookOpen size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
