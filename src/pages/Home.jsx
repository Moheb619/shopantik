import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  // Mock data that would come from your database/API
  const products = [
    {
      id: 1,
      title: "Simple Things You To Save BOOK",
      category: "Design Low Book",
      price: 30.0,
      originalPrice: 39.99,
      discount: 30,
      rating: 3.4,
      reviewCount: 25,
      image: "assets/img/book/01.png",
      author: {
        name: "Wilson",
        image: "assets/img/testimonial/client-1.png",
      },
      tags: ["Hot", "-30%"],
      type: "featured",
    },
    {
      id: 2,
      title: "How Deal With Very Bad BOOK",
      category: "Design Low Book",
      price: 39.0,
      rating: 3.4,
      reviewCount: 25,
      image: "assets/img/book/02.png",
      author: {
        name: "Esther",
        image: "assets/img/testimonial/client-2.png",
      },
      type: "featured",
    },
    // Add more products with different types like "category", "author", "favorite" etc.
  ];

  const featuredProducts = products.filter(
    (product) => product.type === "featured"
  );
  const bestSellers = products.filter(
    (product) => product.type === "best-seller"
  );
  return (
    <>
      {/* Hero Section start  */}
      <div className="hero-section hero-2 fix">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6">
              <div className="hero-items">
                <div className="frame-shape1 float-bob-x">
                  <img src="assets/img/hero/hero2-shape1.png" alt="shape-img" />
                </div>
                <div className="frame-shape2 float-bob-y">
                  <img src="assets/img/hero/hero2-shape2.png" alt="shape-img" />
                </div>
                <div className="book-image">
                  <img
                    src="assets/img/hero/shakil_black_hoodie.png"
                    alt="img"
                  />
                </div>
                <div className="hero-content">
                  <h6 className="wow fadeInUp" data-wow-delay=".3s">
                    Explore the books
                  </h6>
                  <h1 className="wow fadeInUp" data-wow-delay=".5s">
                    Expand Your Mind <br />
                    Reading a Book{" "}
                  </h1>
                  <p className="text-capitalize">
                    Sed ac arcu sed felis vulputate molestie. Nullam at urna in
                    velit finibus vestibulum euismod a <br /> urna. Sed quis
                    aliquam leo. Duis iaculis lorem mauris, et convallis dui
                    efficitur
                  </p>
                  <div
                    className="form-clt wow fadeInUp mt-5"
                    data-wow-delay=".9s"
                  >
                    <Link to="shop" className="theme-btn">
                      Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book Banner Section start  */}
      <section className="book-banner-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div
                className="banner-book-card-items bg-cover"
                style={{
                  backgroundImage: "url('assets/img/banner/book-banner-1.jpg')",
                }}
              >
                <div className="book-shape">
                  <img src="assets/img/banner/book-1.png" alt="img" />
                </div>
                <div className="banner-book-content">
                  <h2>
                    Crime Fiction <br /> Books
                  </h2>
                  <h6>15% Off on Kids' Toys and Gifts!</h6>
                  <Link to="shop-details" className="theme-btn white-bg">
                    Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div
                className="banner-book-card-items bg-cover"
                style={{
                  backgroundImage: "url('assets/img/banner/book-banner-2.jpg')",
                }}
              >
                <div className="book-shape">
                  <img src="assets/img/banner/book-2.png" alt="img" />
                </div>
                <div className="banner-book-content">
                  <h2>
                    One Year on <br />a Bike{" "}
                  </h2>
                  <h6>15% Off on Kids' Toys and Gifts!</h6>
                  <Link to="shop-details" className="theme-btn white-bg">
                    Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div
                className="banner-book-card-items bg-cover"
                style={{
                  backgroundImage: "url('assets/img/banner/book-banner-3.jpg')",
                }}
              >
                <div className="book-shape">
                  <img src="assets/img/banner/book-3.png" alt="img" />
                </div>
                <div className="banner-book-content">
                  <h2>
                    Grow With <br />
                    Flower
                  </h2>
                  <h6>15% Off on Kids' Toys and Gifts!</h6>
                  <Link to="shop" className="theme-btn white-bg">
                    Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section Start */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Top Category Books
              </h2>
            </div>
            <Link
              to="shop"
              className="theme-btn transparent-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              Explore More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/01.png" alt="img" />
                    </Link>
                    <ul className="post-box">
                      <li>Hot</li>
                      <li>-30%</li>
                    </ul>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        Simple Things You To <br /> Save BOOK
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>
                      <li>
                        <del>$39.99</del>
                      </li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-1.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Wilson</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/02.png" alt="img" />
                    </Link>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        How Deal With Very <br /> Bad BOOK
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$39.00</li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-2.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Esther</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/03.png" alt="img" />
                    </Link>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        The Hidden Mystery <br /> Behind
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$29.00</li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-3.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Hawkins</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/04.png" alt="img" />
                    </Link>
                    <ul className="post-box">
                      <li>-12%</li>
                    </ul>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        Qple GPad With Retina <br /> Sisplay
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$19.00</li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-4.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">(Author) Albert </span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/05.png" alt="img" />
                    </Link>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        Flovely and Unicom <br /> Erna
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-5.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Alexander</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section Start */}
      <section className="featured-books-section pt-100 pb-145 fix section-bg">
        <div className="container">
          <div className="section-title-area justify-content-center">
            <div className="section-title wow fadeInUp" data-wow-delay=".3s">
              <h2>Featured Books</h2>
            </div>
          </div>

          <div className="swiper featured-books-slider">
            <div className="swiper-wrapper">
              {/* Fetch featured product from database */}
              <div className="swiper-slide">
                <div
                  className="shop-box-items style-4 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/07.png" alt="img" />
                    </Link>
                  </div>
                  <div className="shop-content">
                    <ul className="book-category">
                      <li className="book-category-badge">Adventure</li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        (459)
                      </li>
                    </ul>
                    <h3>
                      <Link to="shop-details">
                        Repeat ? Qple GPad With Retina <br /> Sisplay
                      </Link>
                    </h3>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-1.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Wilson</span>
                      </li>
                    </ul>
                    <div className="book-availablity">
                      <div className="details">
                        <ul className="price-list">
                          <li>$30.00</li>
                          <li>
                            <del>$39.99</del>
                          </li>
                        </ul>
                        <div className="progress-line"></div>
                        <p>25 Books in stock</p>
                      </div>
                      <div className="shop-btn">
                        <Link to="shop-cart">
                          <i className="fa-regular fa-basket-shopping"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      {/* Best Seller Section Start */}
      <section className="best-seller-section section-padding fix">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title wow fadeInUp" data-wow-delay=".3s">
              <h2>Best Sellers</h2>
            </div>
            <Link
              to="shop"
              className="theme-btn transparent-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              Explore More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="book-shop-wrapper style-2">
            {/* Fetch best selling books from database */}
            <div
              className="shop-box-items style-3 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="book-thumb center">
                <Link to="shop-details">
                  <img src="assets/img/book/07.png" alt="img" />
                </Link>
              </div>
              <div className="shop-content">
                <ul className="book-category">
                  <li className="book-category-badge">Adventure</li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    3.4 (25)
                  </li>
                </ul>
                <h3>
                  <Link to="shop-details">
                    The Hidden Mystery <br /> Behind
                  </Link>
                </h3>
                <ul className="author-post">
                  <li className="authot-list">
                    <span className="content">Wilson</span>
                  </li>
                </ul>
                <ul className="price-list">
                  <li>$30.00</li>
                  <li>
                    <del>$39.99</del>
                  </li>
                </ul>
                <div className="shop-button">
                  <Link to="shop-details" className="theme-btn">
                    <i className="fa-solid fa-basket-shopping"></i>
                    Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section Start */}
      <section className="feature-section fix section-padding pt-0">
        <div className="container">
          <div className="feature-wrapper">
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="icon">
                <i className="icon-icon-1"></i>
              </div>
              <div className="content">
                <h3>Return & refund</h3>
                <p>Money back guarantee</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="icon">
                <i className="icon-icon-2"></i>
              </div>
              <div className="content">
                <h3>Secure Payment</h3>
                <p>30% off by subscribing</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="icon">
                <i className="icon-icon-3"></i>
              </div>
              <div className="content">
                <h3>Quality Support</h3>
                <p>Always online 24/7</p>
              </div>
            </div>
            <div
              className="feature-box-items wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="icon">
                <i className="icon-icon-4"></i>
              </div>
              <div className="content">
                <h3>Daily Offers</h3>
                <p>20% off by subscribing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section Start */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title wow fadeInUp" data-wow-delay=".3s">
              <h2>Discover Your Favorite Author Books</h2>
            </div>
            <Link
              to="shop"
              className="theme-btn transparent-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              Explore More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="book-shop-wrapper">
            {/* Fetch favorite author books from database */}
            <div
              className="shop-box-items style-2 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="book-thumb center">
                <Link to="shop-details">
                  <img src="assets/img/book/03.png" alt="img" />
                </Link>
                <ul className="shop-icon d-grid justify-content-center align-items-center">
                  <li>
                    <Link to="shop-cart">
                      <i className="far fa-heart"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="shop-cart">
                      <img
                        className="icon"
                        src="assets/img/icon/shuffle.svg"
                        alt="svg-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="shop-details">
                      <i className="far fa-eye"></i>
                    </Link>
                  </li>
                </ul>
                <div className="shop-button">
                  <Link to="shop-details" className="theme-btn">
                    <i className="fa-solid fa-basket-shopping"></i>
                    Add To Cart
                  </Link>
                </div>
              </div>
              <div className="shop-content">
                <h5> Design Low Book </h5>
                <h3>
                  <Link to="shop-details">
                    The Hidden Mystery <br /> Behind
                  </Link>
                </h3>
                <ul className="price-list">
                  <li>$30.00</li>
                  <li>
                    <del>$39.99</del>
                  </li>
                </ul>
                <ul className="author-post">
                  <li className="authot-list">
                    <span className="thumb">
                      <img
                        src="assets/img/testimonial/client-1.png"
                        alt="img"
                      />
                    </span>
                    <span className="content">Wilson</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-star"></i>
                    3.4 (25)
                  </li>
                </ul>
              </div>
            </div>
            <div className="cta-shop-box">
              <div className="girl-shape">
                <img src="assets/img/boy-shape.png" alt="shape-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cta Banner Section Start */}
      <section className="cta-banner-section fix section-padding pt-0">
        <div className="container">
          <div
            className="cta-banner-wrapper style-2 section-padding bg-cover"
            style={{ backgroundImage: "url('assets/img/cta-banner2.jpg')" }}
          >
            <div className="overlay"></div>
            <div className="cta-content text-left">
              <h2
                className="text-white mb-40 wow fadeInUp"
                data-wow-delay=".3s"
              >
                Get 25% discount in all <br /> kind of super Selling
              </h2>
              <Link
                to="shop"
                className="theme-btn white-bg wow fadeInUp"
                data-wow-delay=".5s"
              >
                Shop Now <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section Start */}
      <section className="shop-section section-padding fix pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Pick Your Favorite Books
              </h2>
            </div>
            <Link
              to="shop"
              className="theme-btn transparent-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              Explore More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              {/* Fetch Favorite books from database */}
              <div className="swiper-slide">
                <div className="shop-box-items style-2">
                  <div className="book-thumb center">
                    <Link to="shop-details">
                      <img src="assets/img/book/01.png" alt="img" />
                    </Link>
                    <ul className="post-box">
                      <li>Hot</li>
                      <li>-30%</li>
                    </ul>
                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                      <li>
                        <Link to="shop-cart">
                          <i className="far fa-heart"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-cart">
                          <img
                            className="icon"
                            src="assets/img/icon/shuffle.svg"
                            alt="svg-icon"
                          />
                        </Link>
                      </li>
                      <li>
                        <Link to="shop-details">
                          <i className="far fa-eye"></i>
                        </Link>
                      </li>
                    </ul>
                    <div className="shop-button">
                      <Link to="shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                  <div className="shop-content">
                    <h5> Design Low Book </h5>
                    <h3>
                      <Link to="shop-details">
                        Simple Things You To <br /> Save BOOK
                      </Link>
                    </h3>
                    <ul className="price-list">
                      <li>$30.00</li>
                      <li>
                        <del>$39.99</del>
                      </li>
                    </ul>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src="assets/img/testimonial/client-1.png"
                            alt="img"
                          />
                        </span>
                        <span className="content">Wilson</span>
                      </li>
                      <li>
                        <i className="fa-solid fa-star"></i>
                        3.4 (25)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section Start */}
      <section className="team-section fix section-padding pt-0 margin-bottom-30">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
              Featured Author
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s">
              Interdum et malesuada fames ac ante ipsum primis in faucibus.{" "}
              <br /> Donec at nulla nulla. Duis posuere ex lacus
            </p>
          </div>
          <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>
          <div className="swiper team-slider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/01.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Esther Howard</Link>
                    </h6>
                    <p>10 Published Books</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/02.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Shikhon Islam</Link>
                    </h6>
                    <p>07 Published Books</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/03.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Kawser Ahmed</Link>
                    </h6>
                    <p>04 Published Books</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/04.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Brooklyn Simmons</Link>
                    </h6>
                    <p>15 Published Books</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/05.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Leslie Alexander</Link>
                    </h6>
                    <p>05 Published Books</p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src="assets/img/team/06.jpg" alt="img" />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="img" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6>
                      <Link to="team-details">Guy Hawkins</Link>
                    </h6>
                    <p>12 Published Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
