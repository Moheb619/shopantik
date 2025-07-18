import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";

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
                Shopantik.com is a website from Antik Animated Studio. All
                rights are reserved by the studio. Any unauthorized selling or
                distribution is illegal.
              </p>
              <div className="mobile-menu fix mb-3"></div>
              <ContactInfo />
              <div className="header-button mt-4">
                <Link to="/contact" className="theme-btn text-center">
                  Go To Contact Page{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
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
        text="Pallabi, Mirpur 12, Dhaka"
        link="/home-2"
      />
      {/* <ContactItem
        icon="fal fa-envelope"
        text="info@example.com"
        isEmail={true}
      /> */}
      <ContactItem
        icon="fal fa-clock"
        text="Mod-friday, 09am -05pm"
        link="/home-2"
      />
      <ContactItem icon="far fa-phone" text="+8801842273787" isPhone={true} />
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
      href="https://www.facebook.com/originalantik"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook-f"></i>
    </a>
    {/* <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a> */}
    <a
      href="https://www.youtube.com/@AntikMahmud"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-youtube"></i>
    </a>
    {/* <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin-in"></i>
    </a> */}
  </div>
);

// HeaderTop Component (if needed, otherwise can be removed)
const HeaderTop = () => null;

// Header Component
const Header = ({ isSticky, cartCount = { cartCount } }) => {
  return (
    <header className={`header-2 ${isSticky ? "sticky-header" : ""}`}>
      <div className="mega-menu-wrapper">
        <div className="header-main">
          <div className="container">
            <div className="flex-container d-flex">
              <div className="">
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
                    <div className="main-menu">{/* <MainMenu /> */}</div>
                  </div>
                </div>
              </div>
              <div className="header-right-section">
                <HeaderRight cartCount={cartCount} />
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
const HeaderRight = ({ cartCount }) => {
  return (
    <div className="header-right">
      <div className="menu-cart">
        <Link to="/shop-cart" className="cart-icon">
          <i className="fa-regular fa-cart-shopping"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </div>
  );
};

// Main Navbar Component
const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  return (
    <>
      {/* Offcanvas Area */}
      <OffcanvasArea />

      {/* Header Top */}
      <HeaderTop />

      {/* Sticky Header */}
      <Header isSticky={true} cartCount={cartCount} />

      {/* Main Header */}
      <Header isSticky={false} cartCount={cartCount} />
    </>
  );
};

export default Navbar;
