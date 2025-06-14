import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("thumb1");
  const [activeInfoTab, setActiveInfoTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleThumbClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInfoTabClick = (tab) => {
    setActiveInfoTab(tab);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const relatedProducts = [
    {
      id: 1,
      image: "01.png",
      title: "Simple Things You To Save BOOK",
      author: "Wilson",
      price: 30.0,
      oldPrice: 39.99,
      rating: 4,
      badges: ["Hot", "-30%"],
    },
    {
      id: 2,
      image: "02.png",
      title: "How Deal With Very Bad BOOK",
      author: "Alexander",
      price: 30.0,
      oldPrice: 39.99,
      rating: 4,
    },
    {
      id: 3,
      image: "03.png",
      title: "Qple GPad With Retina Sisplay",
      author: "Esther",
      price: 30.0,
      oldPrice: 39.99,
      rating: 4,
    },
    {
      id: 4,
      image: "04.png",
      title: "Qple GPad With Retina Sisplay",
      author: "Hawkins",
      price: 30.0,
      oldPrice: 39.99,
      rating: 4,
      badges: ["Hot"],
    },
    {
      id: 5,
      image: "05.png",
      title: "Simple Things You To Save BOOK",
      author: "Albert",
      price: 30.0,
      oldPrice: 39.99,
      rating: 4,
    },
  ];

  return (
    <div className="shop-details-page">
      {/* Preloader */}
      {isLoading && <Preloader />}

      {/* Back To Top */}
      <BackToTop />
      {/* Breadcrumb Section */}
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img src="assets/img/hero/book1.png" alt="book" />
        </div>
        <div className="book2">
          <img src="assets/img/hero/book2.png" alt="book" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Shop Details</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Shop Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Details Section */}
      <section className="shop-details-section fix section-padding">
        <div className="container">
          <div className="shop-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="shop-details-image">
                  <div className="tab-content">
                    <div
                      id="thumb1"
                      className={`tab-pane fade ${
                        activeTab === "thumb1" ? "show active" : ""
                      }`}
                    >
                      <div className="shop-details-thumb">
                        <img src="assets/img/shop-details/01.png" alt="img" />
                      </div>
                    </div>
                    <div
                      id="thumb2"
                      className={`tab-pane fade ${
                        activeTab === "thumb2" ? "show active" : ""
                      }`}
                    >
                      <div className="shop-details-thumb">
                        <img src="assets/img/shop-details/02.png" alt="img" />
                      </div>
                    </div>
                    <div
                      id="thumb3"
                      className={`tab-pane fade ${
                        activeTab === "thumb3" ? "show active" : ""
                      }`}
                    >
                      <div className="shop-details-thumb">
                        <img src="assets/img/shop-details/03.png" alt="img" />
                      </div>
                    </div>
                    <div
                      id="thumb4"
                      className={`tab-pane fade ${
                        activeTab === "thumb4" ? "show active" : ""
                      }`}
                    >
                      <div className="shop-details-thumb">
                        <img src="assets/img/shop-details/04.png" alt="img" />
                      </div>
                    </div>
                    <div
                      id="thumb5"
                      className={`tab-pane fade ${
                        activeTab === "thumb5" ? "show active" : ""
                      }`}
                    >
                      <div className="shop-details-thumb">
                        <img src="assets/img/shop-details/05.png" alt="img" />
                      </div>
                    </div>
                  </div>
                  <ul className="nav">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li className="nav-item" key={num}>
                        <button
                          className={`nav-link ${
                            activeTab === `thumb${num}` ? "active" : ""
                          }`}
                          onClick={() => handleThumbClick(`thumb${num}`)}
                        >
                          <img
                            src={`assets/img/shop-details/sm-${num}.png`}
                            alt="img"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="shop-details-content">
                  <div className="title-wrapper">
                    <h2>Castle The Sky</h2>
                    <h5>Stock availability.</h5>
                  </div>
                  <div className="star">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Link to="/shop-details" key={i}>
                        <i
                          className={
                            i < 5 ? "fas fa-star" : "fa-regular fa-star"
                          }
                        ></i>
                      </Link>
                    ))}
                    <span>(1 Customer Reviews)</span>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec pulvinar, tortor quis varius pretium est felis
                    scelerisque nulla, vitae placerat justo nunc a massa. Aenean
                    nec montes vestibulum urna vel imperdiet ipsum. Orci varius
                    natoque penatibus et magnis dis ridicul parturient montes.
                  </p>
                  <div className="price-list">
                    <h3>$16.00</h3>
                  </div>
                  <div className="cart-wrapper">
                    <div className="quantity-basket">
                      <p className="qty">
                        <button
                          className="qtyminus"
                          aria-hidden="true"
                          onClick={decrementQuantity}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          name="qty"
                          id="qty2"
                          min="1"
                          max="10"
                          step="1"
                          value={quantity}
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            setQuantity(Math.min(Math.max(value, 1), 10));
                          }}
                        />

                        <button
                          className="qtyplus"
                          aria-hidden="true"
                          onClick={incrementQuantity}
                        >
                          +
                        </button>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="theme-btn style-2"
                      onClick={() => setShowModal(true)}
                    >
                      Read A little
                    </button>
                    <Link to="/shop-details" className="theme-btn">
                      <i className="fa-solid fa-basket-shopping"></i> Add To
                      Cart
                    </Link>
                    <div className="icon-box">
                      <Link to="/shop-details" className="icon">
                        <i className="far fa-heart"></i>
                      </Link>
                      <Link to="/shop-details" className="icon-2">
                        <img src="assets/img/icon/shuffle.svg" alt="svg-icon" />
                      </Link>
                    </div>
                  </div>
                  <div className="category-box">
                    <div className="category-list">
                      <ul>
                        <li>
                          <span>SKU:</span> FTC1020B65D
                        </li>
                        <li>
                          <span>Category:</span> Kids Toys
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Tags:</span> Design Low Book
                        </li>
                        <li>
                          <span>Format:</span> Hardcover
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Total page:</span> 330
                        </li>
                        <li>
                          <span>Language:</span> English
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>Publish Years:</span> 2021
                        </li>
                        <li>
                          <span>Century:</span> United States
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="box-check">
                    <div className="check-list">
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i> Free shipping
                          orders from $150
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> 30 days exchange
                          & return
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <i className="fa-solid fa-check"></i> Mamaya Flash
                          Discount: Starting at 30% Off
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i> Safe & Secure
                          online shopping
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-icon">
                    <h6>Also Available On:</h6>
                    <Link to="https://www.customer.io/">
                      <img src="assets/img/cutomerio.png" alt="cutomer.io" />
                    </Link>
                    <Link to="https://www.amazon.com/">
                      <img src="assets/img/amazon.png" alt="amazon" />
                    </Link>
                    <Link to="https://www.dropbox.com/">
                      <img src="assets/img/dropbox.png" alt="dropbox" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-tab section-padding pb-0">
              <ul className="nav mb-5" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ps-0 ${
                      activeInfoTab === "description" ? "active" : ""
                    }`}
                    onClick={() => handleInfoTabClick("description")}
                  >
                    <h6>Description</h6>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeInfoTab === "additional" ? "active" : ""
                    }`}
                    onClick={() => handleInfoTabClick("additional")}
                  >
                    <h6>Additional Information</h6>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeInfoTab === "review" ? "active" : ""
                    }`}
                    onClick={() => handleInfoTabClick("review")}
                  >
                    <h6>reviews (3)</h6>
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="description"
                  className={`tab-pane fade ${
                    activeInfoTab === "description" ? "show active" : ""
                  }`}
                >
                  <div className="description-items">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque quis erat interdum, tempor turpis in, sodales
                      ex. In hac habitasse platea dictumst. Etiam accumsan
                      scelerisque urna, a lobortis velit vehicula ut. Maecenas
                      porttitor dolor a velit aliquet, et euismod nibh
                      vulputate. Duis nunc velit, lacinia vel risus in, finibus
                      sodales augue. Aliquam lacinia imperdiet dictum. Etiam
                      tempus finibus tortor, quis placerat arcu tristique in.
                      Sed vitae dui a diam luctus maximus. Quisque nec felis
                      dapibus, dapibus enim vitae, vestibulum libero. Aliquam
                      erat volutpat. Phasellus luctus rhoncus justo. Duis a
                      nulla sit amet justo aliquam ullamcorper. Phasellus nulla
                      lorem, pretium et libero in, porta auctor dui. In a ornare
                      purus, et efficitur elit. Etiam consectetur sit amet quam
                      ut tincidunt. Donec gravida ultricies tellus ac pharetra.
                      Praesent a pulvinar purus. Proin sollicitudin leo eget mi
                      sagittis aliquam. Donec sollicitudin ex ac lobortis
                      mollis. Sed eget libero nec mi
                    </p>
                  </div>
                </div>
                <div
                  id="additional"
                  className={`tab-pane fade ${
                    activeInfoTab === "additional" ? "show active" : ""
                  }`}
                >
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td className="text-1">Availability</td>
                          <td className="text-2">Available</td>
                        </tr>
                        <tr>
                          <td className="text-1">Categories</td>
                          <td className="text-2">Adventure</td>
                        </tr>
                        <tr>
                          <td className="text-1">Publish Date</td>
                          <td className="text-2">2022-10-24</td>
                        </tr>
                        <tr>
                          <td className="text-1">Total Page</td>
                          <td className="text-2">330</td>
                        </tr>
                        <tr>
                          <td className="text-1">Format</td>
                          <td className="text-2">Hardcover</td>
                        </tr>
                        <tr>
                          <td className="text-1">Country</td>
                          <td className="text-2">United States</td>
                        </tr>
                        <tr>
                          <td className="text-1">Language</td>
                          <td className="text-2">English</td>
                        </tr>
                        <tr>
                          <td className="text-1">Dimensions</td>
                          <td className="text-2">30 × 32 × 46 Inches</td>
                        </tr>
                        <tr>
                          <td className="text-1">Weight</td>
                          <td className="text-2">2.5 Pounds</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  id="review"
                  className={`tab-pane fade ${
                    activeInfoTab === "review" ? "show active" : ""
                  }`}
                >
                  <div className="review-items">
                    <div className="review-wrap-area d-flex gap-4">
                      <div className="review-thumb">
                        <img
                          src="assets/img/shop-details/review.png"
                          alt="img"
                        />
                      </div>
                      <div className="review-content">
                        <div className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                          <div className="cont">
                            <h5>
                              <Link to="/news-details">Leslie Alexander</Link>
                            </h5>
                            <span>February 10, 2024 at 2:37 pm</span>
                          </div>
                          <div className="star">
                            {[1, 2, 3, 4, 5].map((i) => (
                              <i
                                key={i}
                                className={
                                  i < 5
                                    ? "fa-solid fa-star"
                                    : "fa-regular fa-star"
                                }
                              ></i>
                            ))}
                          </div>
                        </div>
                        <p className="mt-30 mb-4">
                          Neque porro est qui dolorem ipsum quia quaed inventor
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is <br />{" "}
                          simply dummy
                        </p>
                      </div>
                    </div>
                    <div className="review-title mt-5 py-15 mb-30">
                      <h4>Your Rating*</h4>
                      <div className="rate-now d-flex align-items-center">
                        <p>Your Rating*</p>
                        <div className="star">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <i key={i} className="fa-light fa-star"></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="review-form">
                      <form action="#" id="contact-form" method="POST">
                        <div className="row g-4">
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Your Name*</span>
                              <input
                                type="text"
                                name="name"
                                id="customer_name"
                                placeholder="Your Name"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-clt">
                              <span>Your Email*</span>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                              />
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp animated"
                            data-wow-delay=".8"
                          >
                            <div className="form-clt">
                              <span>Message*</span>
                              <textareLink
                                name="message"
                                id="message"
                                placeholder="Write Message"
                              ></textareLink>
                            </div>
                          </div>
                          <div
                            className="col-lg-12 wow fadeInUp animated"
                            data-wow-delay=".9"
                          >
                            <div className="form-check d-flex gap-2 from-customradio">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="flexRadioDefault"
                                id="flexRadioDefault12"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="flexRadioDefault12"
                              >
                                i accept your terms & conditions
                              </label>
                            </div>
                            <button type="submit" className="theme-btn">
                              Submit now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="top-ratting-book-section fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              Related Products
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
              <br /> Donec at nulla nulla. Duis posuere ex lacus
            </p>
          </div>
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              {relatedProducts.map((product) => (
                <div key={product.id} className="swiper-slide">
                  <div className="shop-box-items style-2">
                    <div className="book-thumb center">
                      <Link to="/shop-details">
                        <img
                          src={`assets/img/book/${product.image}`}
                          alt="img"
                        />
                      </Link>
                      {product.badges && (
                        <ul className="post-box">
                          {product.badges.map((badge, i) => (
                            <li key={i}>{badge}</li>
                          ))}
                        </ul>
                      )}
                      <ul className="shop-icon d-grid justify-content-center align-items-center">
                        <li>
                          <Link to="/shop-cart">
                            <i className="far fa-heart"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-cart">
                            <img
                              className="icon"
                              src="assets/img/icon/shuffle.svg"
                              alt="svg-icon"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link to="/shop-details">
                            <i className="far fa-eye"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="shop-content">
                      <h5>Design Low Book</h5>
                      <h3>
                        <Link to="/shop-details">{product.title}</Link>
                      </h3>
                      <ul className="price-list">
                        <li>${product.price.toFixed(2)}</li>
                        {product.oldPrice && (
                          <li>
                            <del>${product.oldPrice.toFixed(2)}</del>
                          </li>
                        )}
                      </ul>
                      <ul className="author-post">
                        <li className="authot-list">
                          <span className="thumb">
                            <img
                              src={`assets/img/testimonial/client-${product.id}.png`}
                              alt="img"
                            />
                          </span>
                          <span className="content">{product.author}</span>
                        </li>
                        <li className="star">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <i
                              key={i}
                              className={
                                i < product.rating
                                  ? "fa-solid fa-star"
                                  : "fa-regular fa-star"
                              }
                            ></i>
                          ))}
                        </li>
                      </ul>
                    </div>
                    <div className="shop-button">
                      <Link to="/shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Read More Modal */}
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-body"
                style={{ backgroundImage: "url(assets/img/popupBg.png)" }}
              >
                <div className="close-btn">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="readMoreBox">
                  <div className="content">
                    <h3>The Role Of Book</h3>
                    <p>
                      Educating the Public <br />
                      Political books play a crucial role in educating the
                      public about political theories, historical events,
                      policies, and the workings of governments. They provide
                      readers with insights into complex political concepts and
                      the historical context behind current events, helping to
                      foster a more informed citizenry. <br />
                      <br />
                      Shaping Public Opinion <br />
                      Authors of political books often aim to influence public
                      opinion by presenting arguments and perspectives on
                      various issues. These books can sway readers' views,
                      either reinforcing their existing beliefs or challenging
                      them to consider alternative viewpoints. This influence
                      can extend to political debates and discussions in the
                      public sphere. <br />
                      <br />
                      Documenting History <br />
                      Political books serve as valuable records of historical
                      events and political movements. They document the
                      thoughts, actions, and decisions of political leaders and
                      activists, providing future generations with a detailed
                      account of significant periods and events. This historical
                      documentation is essential for understanding the evolution
                      of political systems and ideologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
