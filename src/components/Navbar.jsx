import React from "react";
import { Link } from "react-router-dom";

// OffcanvasArea Component
const OffcanvasArea = () => {
  return (
    <>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      src="assets/img/logo/shop-antik-red.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
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
      <div className="offcanvas__overlay"></div>
    </>
  );
};

// ContactInfo Component
const ContactInfo = () => (
  <div className="offcanvas__contact">
    <h4>Contact Info</h4>
    <ul>
      <ContactItem
        icon="fal fa-map-marker-alt"
        text="Main Street, Melbourne, Australia"
        link="/home-2"
      />
      <ContactItem
        icon="fal fa-envelope"
        text="info@example.com"
        isEmail={true}
      />
      <ContactItem
        icon="fal fa-clock"
        text="Mod-friday, 09am -05pm"
        link="/home-2"
      />
      <ContactItem icon="far fa-phone" text="+11002345909" isPhone={true} />
    </ul>
  </div>
);

// ContactItem Component
const ContactItem = ({
  icon,
  text,
  link,
  isEmail = false,
  isPhone = false,
}) => (
  <li className="d-flex align-items-center">
    <div
      className={`offcanvas__contact-icon ${
        !isEmail && !isPhone ? "mr-15" : ""
      }`}
    >
      <i className={icon}></i>
    </div>
    <div className="offcanvas__contact-text">
      {isEmail ? (
        <a href={`mailto:${text}`}>{text}</a>
      ) : isPhone ? (
        <a href={`tel:${text.replace(/[^0-9]/g, "")}`}>{text}</a>
      ) : (
        <Link to={link}>{text}</Link>
      )}
    </div>
  </li>
);

// SocialIcons Component
const SocialIcons = () => (
  <div className="social-icon d-flex align-items-center">
    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-youtube"></i>
    </a>
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
);

// HeaderTop Component (if needed, otherwise can be removed)
const HeaderTop = () => null;

// Header Component
const Header = ({ isSticky }) => {
  return (
    <header className={`header-2 ${isSticky ? "sticky-header" : ""}`}>
      <div className="mega-menu-wrapper">
        <div className="header-main">
          <div className="container">
            <div className="row">
              <div className="col-6 col-xl-9">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/" className="header-logo">
                      <img
                        src="assets/img/logo/shop-antik-red.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <MainMenu />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-xl-3">
                <HeaderRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

// MainMenu Component
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
        { title: "Shop", link: "/shop" },
        { title: "Product Details", link: "/product-details" },
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
    <nav id="mobile-menu">
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

// MenuItem Component
const MenuItem = ({ item }) => (
  <li className={item.submenu ? "has-dropdown" : ""}>
    <Link to={item.link}>
      {item.title}
      {item.submenu && <i className="fas fa-angle-down"></i>}
    </Link>
    {item.submenu && (
      <ul className="submenu">
        {item.submenu.map((subItem, subIndex) => (
          <MenuItem key={subIndex} item={subItem} />
        ))}
      </ul>
    )}
  </li>
);

// HeaderRight Component
const HeaderRight = () => (
  <div className="header-right">
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
      <form className="search-toggle-box d-md-block">
        <div className="input-area">
          <input type="text" placeholder="Author" />
          <button className="cmn-btn" type="button">
            <i className="far fa-search"></i>
          </button>
        </div>
      </form>
    </div>
    <div className="menu-cart">
      <Link to="/wishlist" className="cart-icon">
        <i className="fa-regular fa-heart"></i>
      </Link>
      <Link to="/shop-cart" className="cart-icon">
        <i className="fa-regular fa-cart-shopping"></i>
      </Link>
      <div className="header-humbager ml-30">
        <button className="sidebar__toggle">
          <div className="bar-icon-2">
            <img src="assets/img/icon/icon-13.svg" alt="menu" />
          </div>
        </button>
      </div>
    </div>
  </div>
);

// LoginModal Component
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
            <LoginForm />
            <AuthBanner type="login" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// LoginForm Component
const LoginForm = () => (
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
        <Link to="/home-2">Forgot Your password?</Link>
      </div>
    </div>
    <div className="loginBtn">
      <Link to="/home-2" className="theme-btn rounded-0">
        Log in
      </Link>
    </div>
    <div className="orting-badge">Or</div>
    <SocialAuthButtons />
    <TermsCheckbox />
  </div>
);

// RegistrationModal Component
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
            <RegistrationForm />
            <AuthBanner type="register" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// RegistrationForm Component
const RegistrationForm = () => (
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
      name="confirmPassword"
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
        <Link to="/home-2">Forgot Your password?</Link>
      </div>
    </div>
    <div className="loginBtn">
      <Link to="/home-2" className="theme-btn rounded-0">
        Log in
      </Link>
    </div>
    <div className="orting-badge">Or</div>
    <SocialAuthButtons />
    <TermsCheckbox />
  </div>
);

// AuthBanner Component
const AuthBanner = ({ type }) => (
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
    <div className={type === "login" ? "loginBg" : "signUpBg"}>
      <img
        src={`assets/img/${
          type === "login" ? "signUpbg.jpg" : "registrationbg.jpg"
        }`}
        alt="background"
      />
    </div>
  </div>
);

// SocialAuthButtons Component
const SocialAuthButtons = () => (
  <>
    <div>
      <a
        className="another-option"
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/img/google.png" alt="google" />
        Continue With Google
      </a>
    </div>
    <div>
      <a
        className="another-option another-option-two"
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/img/facebook.png" alt="facebook" />
        Continue With Facebook
      </a>
    </div>
  </>
);

// TermsCheckbox Component
const TermsCheckbox = () => (
  <div className="form-check-3 d-flex align-items-center from-customradio-2 mt-3">
    <input
      className="form-check-input"
      type="radio"
      name="flexRadioDefault"
      id="termsCheck"
    />
    <label className="form-check-label" htmlFor="termsCheck">
      I Accept Your Terms & Conditions
    </label>
  </div>
);

// Main Navbar Component
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

export default Navbar;
