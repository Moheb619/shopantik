import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Product data array
  const products = [
    {
      id: 1,
      name: "Simple Things You Save BOOK",
      price: 30.0,
      oldPrice: null,
      rating: 3.4,
      reviewCount: 25,
      image: "assets/img/book/01.png",
      tags: ["Hot", "-30%"],
      inStock: true,
      onSale: false,
    },
    {
      id: 2,
      name: "How Deal With Very Bad BOOK",
      price: 39.0,
      oldPrice: null,
      rating: 3.4,
      reviewCount: 25,
      image: "assets/img/book/02.png",
      tags: [],
      inStock: true,
      onSale: false,
    },
    {
      id: 3,
      name: "The Hidden Mystery Behind",
      price: 30.0,
      oldPrice: 39.99,
      rating: 3.4,
      reviewCount: 25,
      image: "assets/img/book/03.png",
      tags: [],
      inStock: true,
      onSale: true,
    },
    // Add more products as needed
  ];

  // Categories data
  const categories = [
    { id: "arts", name: "Arts & Photography" },
    { id: "biographies", name: "Biographies & Memoirs" },
    { id: "christian", name: "Christian Books & Bibles" },
    { id: "research", name: "Research & Publishing Guides" },
    { id: "sports", name: "Sports & Outdoors" },
    { id: "food", name: "Food & Drink" },
  ];

  return (
    <>
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
            <h1>Shop Default</h1>
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
                <li>Shop Default</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <section className="shop-section fix section-padding">
        <div className="container">
          <div className="shop-default-wrapper">
            <div className="row">
              <div className="col-12">
                <div
                  className="woocommerce-notices-wrapper wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <p>
                    Showing 1-{products.length} Of {products.length} Results
                  </p>
                  <div className="form-clt">
                    <div className="nice-select" tabIndex="0">
                      <span className="current">Default Sorting</span>
                      <ul className="list">
                        <li data-value="1" className="option selected focus">
                          Default sorting
                        </li>
                        <li data-value="1" className="option">
                          Sort by popularity
                        </li>
                        <li data-value="1" className="option">
                          Sort by average rating
                        </li>
                        <li data-value="1" className="option">
                          Sort by latest
                        </li>
                      </ul>
                    </div>
                    <div className="icon">
                      <Link to="/shop-list">
                        <i className="fas fa-list"></i>
                      </Link>
                    </div>
                    <div className="icon-2 active">
                      <Link to="/shop">
                        <i className="fa-sharp fa-regular fa-grid-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div
                className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="main-sidebar">
                  {/* Search Widget */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h5>Search</h5>
                    </div>
                    <form className="search-toggle-box">
                      <div className="input-area search-container">
                        <input
                          className="search-input"
                          type="text"
                          placeholder="Search here"
                        />
                        <button className="cmn-btn search-icon">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Categories Widget */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h5>Categories</h5>
                    </div>
                    <div className="categories-list">
                      <ul
                        className="nav nav-pills mb-3"
                        id="pills-tab"
                        role="tablist"
                      >
                        {categories.map((category) => (
                          <li
                            key={category.id}
                            className="nav-item"
                            role="presentation"
                          >
                            <button
                              className={`nav-link ${
                                category.id === "arts" ? "active" : ""
                              }`}
                              id={`pills-${category.id}-tab`}
                              data-bs-toggle="pill"
                              data-bs-target={`#pills-${category.id}`}
                              type="button"
                              role="tab"
                              aria-controls={`pills-${category.id}`}
                              aria-selected={category.id === "arts"}
                            >
                              {category.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Product Status Widget */}
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h5>Product Status</h5>
                    </div>
                    <div className="product-status">
                      <div className="product-status_stock gap-6 d-flex align-items-center">
                        <div className="nice-select category" tabIndex="0">
                          <span className="current">In Stock</span>
                          <ul className="list">
                            <li data-value="1" className="option selected">
                              In Stock
                            </li>
                            {products
                              .filter((p) => p.inStock)
                              .map((product) => (
                                <li
                                  key={product.id}
                                  data-value="1"
                                  className="option"
                                >
                                  {product.name}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      <div className="product-status_sale gap-6 d-flex align-items-center">
                        <div className="nice-select category" tabIndex="0">
                          <span className="current">On Sale</span>
                          <ul className="list">
                            <li data-value="1" className="option selected">
                              On Sale
                            </li>
                            {products
                              .filter((p) => p.onSale)
                              .map((product) => (
                                <li
                                  key={product.id}
                                  data-value="1"
                                  className="option"
                                >
                                  {product.name}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Price Filter Widget */}
                  <div className="single-sidebar-widget mb-50">
                    <div className="wid-title">
                      <h5>Filter By Price</h5>
                    </div>
                    <div className="range__barcustom">
                      <div className="slider">
                        <div
                          className="progress"
                          style={{ left: "15.29%", right: "58.9%" }}
                        ></div>
                      </div>
                      <div className="range-input">
                        <input
                          type="range"
                          className="range-min"
                          min="0"
                          max="10000"
                          defaultValue="2500"
                        />
                        <input
                          type="range"
                          className="range-max"
                          min="100"
                          max="10000"
                          defaultValue="7500"
                        />
                      </div>
                      <div className="range-items">
                        <div className="price-input">
                          <div className="d-flex align-items-center">
                            <Link
                              to="/shop-left-sidebar"
                              className="filter-btn mt-2 me-3"
                            >
                              Filter
                            </Link>
                            <div className="field">
                              <span>Price:</span>
                            </div>
                            <div className="field">
                              <span>$</span>
                              <input
                                type="number"
                                className="input-min"
                                defaultValue="100"
                              />
                            </div>
                            <div className="separators">-</div>
                            <div className="field">
                              <span>$</span>
                              <input
                                type="number"
                                className="input-max"
                                defaultValue="1000"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Review Filter Widget */}
                  <div className="single-sidebar-widget mb-0">
                    <div className="wid-title">
                      <h5>By Review</h5>
                    </div>
                    <div className="categories-list">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <label
                          key={stars}
                          className="checkbox-single d-flex align-items-center"
                        >
                          <span className="d-flex gap-xl-3 gap-2 align-items-center">
                            <span className="checkbox-area d-center">
                              <input type="checkbox" />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span className="text-color">
                              <span className="star">
                                {[...Array(5)].map((_, i) => (
                                  <i
                                    key={i}
                                    className={`fa-solid ${
                                      i < stars ? "fa-star" : "fa-star-o"
                                    }`}
                                  ></i>
                                ))}
                              </span>
                              {Math.floor(Math.random() * 20) + 5}
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                <div className="tab-content" id="pills-tabContent">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`tab-pane fade ${
                        category.id === "arts" ? "show active" : ""
                      }`}
                      id={`pills-${category.id}`}
                      role="tabpanel"
                      aria-labelledby={`pills-${category.id}-tab`}
                      tabIndex="0"
                    >
                      <div className="row">
                        {products.map((product) => (
                          <div
                            key={product.id}
                            className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                            data-wow-delay=".2s"
                          >
                            <div className="shop-box-items">
                              <div className="book-thumb center">
                                <Link to={`/shop-details/${product.id}`}>
                                  <img src={product.image} alt={product.name} />
                                </Link>
                                {product.tags.length > 0 && (
                                  <ul className="post-box">
                                    {product.tags.map((tag, index) => (
                                      <li key={index}>{tag}</li>
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
                                    <Link to={`/shop-details/${product.id}`}>
                                      <i className="far fa-eye"></i>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="shop-content">
                                <h3>
                                  <Link to={`/shop-details/${product.id}`}>
                                    {product.name}
                                  </Link>
                                </h3>
                                <ul className="price-list">
                                  <li>
                                    ${product.price.toFixed(2)}
                                    {product.oldPrice && (
                                      <del>${product.oldPrice.toFixed(2)}</del>
                                    )}
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-star"></i>
                                    {product.rating} ({product.reviewCount})
                                  </li>
                                </ul>
                                <div className="shop-button">
                                  <Link
                                    to={`/shop-details/${product.id}`}
                                    className="theme-btn"
                                  >
                                    <i className="fa-solid fa-basket-shopping"></i>{" "}
                                    Add To Cart
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="page-nav-wrap text-center">
                  <ul>
                    <li>
                      <Link className="previous" to="/shop">
                        Previous
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" to="/shop">
                        1
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" to="/shop">
                        2
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" to="/shop">
                        3
                      </Link>
                    </li>
                    <li>
                      <Link className="page-numbers" to="/shop">
                        ...
                      </Link>
                    </li>
                    <li>
                      <Link className="next" to="/shop">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
