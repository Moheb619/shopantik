import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Offcanvas Area */}
      <OffcanvasArea />

      {/* Header Top */}
      <HeaderTop />

      {/* Sticky Header */}
      <Header isSticky={true} />

      {/* Main Header */}
      <Header isSticky={false} />

      {/* Login Modal */}
      <LoginModal />

      {/* Registration Modal */}
      <RegistrationModal />
    </>
  );
};

const OffcanvasArea = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOpen ? "open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  {/* Black Logo */}
                  <Link to="/">
                    <img
                      src="assets/img/logo/shop-antik-red.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setIsOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <ContactInfo />
              <div className="header-button mt-4">
                <Link to="/contact" className="theme-btn text-center">
                  Get A Quote <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

const HeaderTop = () => (
  <div className="header-top-1">
    <div className="container">
      <div className="header-top-wrapper">
        <ul className="contact-list">
          <li>
            <i className="fa-regular fa-phone"></i>
            <Link to="tel:+20866660112">+208-6666-0112</Link>
          </li>
          <li>
            <i className="far fa-envelope"></i>
            <Link to="mailto:info@example.com">info@example.com</Link>
          </li>
          <li>
            <i className="far fa-clock"></i>
            <span>Sunday - Fri: 9 aM - 6 pM</span>
          </li>
        </ul>
        <ul className="list">
          <li>
            <i className="fa-light fa-comments"></i>
            <Link to="/contact">Live Chat</Link>
          </li>
          <li>
            <i className="fa-light fa-user"></i>
            <button data-bs-toggle="modal" data-bs-target="#loginModal">
              Login
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const Header = ({ isSticky }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={`header-1 ${isSticky ? "sticky-header" : ""}`}>
      <div className="mega-menu-wrapper">
        <div className="header-main">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-10 col-xl-8 col-xxl-10">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/" className="header-logo">
                      {/* White Logo */}
                      <img
                        src="assets/img/logo/shop-antik-white.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id={isMobileMenuOpen ? "mobile-menu" : ""}>
                        <MainMenu />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-2 col-xl-4 col-xxl-2">
                <div className="header-right">
                  <HeaderSearch />
                  <HeaderIcons
                    toggleOffcanvas={() =>
                      setIsMobileMenuOpen(!isMobileMenuOpen)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const LoginModal = () => (
  <div
    className="modal fade"
    id="loginModal"
    tabIndex="-1"
    aria-labelledby="loginModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="close-btn">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="identityBox">
            <div className="form-wrapper">
              <h1 id="loginModalLabel">welcome back!</h1>
              <input
                className="inputField"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="inputField"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <div className="input-check remember-me">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="save-for-next"
                    id="saveForNext"
                  />
                  <label htmlFor="saveForNext">Remember me</label>
                </div>
                <div className="text">
                  <Link to="/forgot-password">Forgot Your password?</Link>
                </div>
              </div>
              <div className="loginBtn">
                <Link to="/dashboard" className="theme-btn rounded-0">
                  Log in
                </Link>
              </div>
              <div className="orting-badge">Or</div>
              <SocialLoginButtons />
              <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label">
                  I Accept Your Terms & Conditions
                </label>
              </div>
            </div>

            <div className="banner">
              <button
                type="button"
                className="rounded-0 login-btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Log in
              </button>
              <button
                type="button"
                className="theme-btn rounded-0 register-btn"
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
              >
                Create Account
              </button>
              <div className="loginBg">
                <img src="assets/img/signUpbg.jpg" alt="signUpBg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RegistrationModal = () => (
  <div
    className="modal fade"
    id="registrationModal"
    tabIndex="-1"
    aria-labelledby="registrationModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="close-btn">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="identityBox">
            <div className="form-wrapper">
              <h1 id="registrationModalLabel">Create account!</h1>
              <input
                className="inputField"
                type="text"
                name="name"
                id="name"
                placeholder="User Name"
              />
              <input
                className="inputField"
                type="email"
                name="email"
                placeholder="Email Address"
              />
              <input
                className="inputField"
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <input
                className="inputField"
                type="password"
                name="confirm-password"
                placeholder="Enter Confirm Password"
              />
              <div className="input-check remember-me">
                <div className="checkbox-wrapper">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="save-for-next"
                    id="rememberMe"
                  />
                  <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="text">
                  <Link to="/forgot-password">Forgot Your password?</Link>
                </div>
              </div>
              <div className="loginBtn">
                <Link to="/dashboard" className="theme-btn rounded-0">
                  Log in
                </Link>
              </div>
              <div className="orting-badge">Or</div>
              <SocialLoginButtons />
              <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label className="form-check-label">
                  I Accept Your Terms & Conditions
                </label>
              </div>
            </div>

            <div className="banner">
              <button
                type="button"
                className="rounded-0 login-btn"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Log in
              </button>
              <button
                type="button"
                className="theme-btn rounded-0 register-btn"
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
              >
                Create Account
              </button>
              <div className="signUpBg">
                <img src="assets/img/registrationbg.jpg" alt="signUpBg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ContactInfo Component
const ContactInfo = () => (
  <div className="offcanvas__contact">
    <h4>Contact Info</h4>
    <ul>
      <ContactItem
        icon="fal fa-map-marker-alt"
        text="Main Street, Melbourne, Australia"
        link="/"
      />
      <ContactItem
        icon="fal fa-envelope"
        text="info@example.com"
        link="mailto:info@example.com"
      />
      <ContactItem icon="fal fa-clock" text="Mod-friday, 09am -05pm" link="/" />
      <ContactItem
        icon="far fa-phone"
        text="+11002345909"
        link="tel:+11002345909"
      />
    </ul>
  </div>
);

// ContactItem Component
const ContactItem = ({ icon, text, link }) => (
  <li className="d-flex align-items-center">
    <div className="offcanvas__contact-icon mr-15">
      <i className={icon}></i>
    </div>
    <div className="offcanvas__contact-text">
      <Link target="_blank" href={link}>
        {text}
      </Link>
    </div>
  </li>
);

// SocialIcons Component
const SocialIcons = () => (
  <div className="social-icon d-flex align-items-center">
    <Link to="https://www.facebook.com/">
      <i className="fab fa-facebook-f"></i>
    </Link>
    <Link to="https://x.com/">
      <i className="fab fa-twitter"></i>
    </Link>
    <Link to="https://www.youtube.com/">
      <i className="fab fa-youtube"></i>
    </Link>
    <Link to="https://www.linkedin.com/">
      <i className="fab fa-linkedin-in"></i>
    </Link>
  </div>
);

const MainMenu = () => {
  const menuItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Shop",
      link: "/shop",
      submenu: [
        { title: "Shop Default", link: "/shop" },
        { title: "Shop Details", link: "/details" },
        { title: "Shop Cart", link: "/shop-cart" },
        { title: "Wishlist", link: "/wishlist" },
        { title: "Checkout", link: "/checkout" },
      ],
    },
    // {
    //   title: "Pages",
    //   link: "/about",
    //   submenu: [
    //     { title: "About Us", link: "/about" },
    //     {
    //       title: "Author",
    //       link: "/team",
    //       submenu: [
    //         { title: "Author", link: "/team" },
    //         { title: "Author Profile", link: "/team-details" },
    //       ],
    //     },
    //     { title: "Faq's", link: "/faq" },
    //     { title: "404 Page", link: "/404" },
    //   ],
    // },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <ul>
      {menuItems.map((item, index) => (
        <li key={index} className={item.submenu ? "has-dropdown" : ""}>
          <Link to={item.link}>
            {item.title}
            {item.submenu && <i className="fas fa-angle-down"></i>}
          </Link>
          {item.submenu && (
            <ul className="submenu">
              {item.submenu.map((subItem, subIndex) => (
                <li
                  key={subIndex}
                  className={subItem.submenu ? "has-dropdown" : ""}
                >
                  <Link to={subItem.link}>
                    {subItem.title}
                    {subItem.submenu && <i className="fas fa-angle-down"></i>}
                  </Link>
                  {subItem.submenu && (
                    <ul className="submenu">
                      {subItem.submenu.map((nestedItem, nestedIndex) => (
                        <li key={nestedIndex}>
                          <Link to={nestedItem.link}>{nestedItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

// HeaderSearch Component
const HeaderSearch = () => (
  <div className="category-oneadjust gap-6 d-flex align-items-center">
    <div className="icon">
      <i className="fa-sharp fa-solid fa-grid-2"></i>
    </div>
    <select name="cate" className="category">
      <option value="1">Category</option>
      <option value="1">Web Design</option>
      <option value="1">Web Development</option>
      <option value="1">Graphic Design</option>
      <option value="1">Softwer Eng</option>
    </select>
    <form action="#" className="search-toggle-box d-md-block">
      <div className="input-area">
        <input type="text" placeholder="Author" />
        <button className="cmn-btn">
          <i className="far fa-search"></i>
        </button>
      </div>
    </form>
  </div>
);

// HeaderIcons Component
const HeaderIcons = ({ toggleOffcanvas }) => (
  <div className="menu-cart">
    <Link to="/wishlist" className="cart-icon">
      <i className="fa-regular fa-heart"></i>
    </Link>
    <Link to="/shop-cart" className="cart-icon">
      <i className="fa-regular fa-cart-shopping"></i>
    </Link>
    <div className="header-humbager ml-30">
      <button
        className="sidebar__toggle"
        onClick={toggleOffcanvas}
        type="button"
      >
        <div className="bar-icon-2">
          <img src="assets/img/icon/icon-13.svg" alt="img" />
        </div>
      </button>
    </div>
  </div>
);

// SocialLoginButtons Component
const SocialLoginButtons = () => (
  <>
    <div>
      <Link className="another-option" href="https://www.google.com/">
        <img src="assets/img/google.png" alt="google" />
        Continue With Google
      </Link>
    </div>
    <div>
      <Link
        className="another-option another-option-two"
        href="https://www.facebook.com/"
      >
        <img src="assets/img/facebook.png" alt="google" />
        Continue With Facebook
      </Link>
    </div>
  </>
);

export default Navbar;
