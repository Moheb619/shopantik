import React from "react";
import { useState, useEffect } from "react";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Main App Component
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-wrapper">
      {/* Preloader */}
      {isLoading && <Preloader />}

      {/* Back To Top */}
      <BackToTop />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Shop Section - Featured Books */}
      <ShopSection title="Featured Books" />

      {/* Book Categories Section */}
      <BookCategoriesSection />

      {/* Shop Section - Top Books */}
      <ShopSection title="Top Books" isTopBooks={true} />

      {/* CTA Banner Section */}
      <CtaBannerSection />

      {/* Top Rating Books Section */}
      <TopRatingBooksSection />

      {/* Shop Section - Top Selling Books */}
      <ShopSection title="Top Selling Books" />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Team Section */}
      <TeamSection />

      {/* News Section */}
      <NewsSection />

      {/* Scripts would be loaded here in a real app */}
    </div>
  );
};

// HeroSection Component
const HeroSection = () => (
  <div className="hero-section hero-1 fix">
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8 col-lg-6">
          <div className="hero-items">
            <div className="book-shape">
              <img src="assets/img/hero/book.png" alt="shape-img" />
            </div>
            <div className="frame-shape1 float-bob-x">
              <img src="assets/img/hero/frame.png" alt="shape-img" />
            </div>
            <div className="frame-shape2 float-bob-y">
              <img src="assets/img/hero/frame-2.png" alt="shape-img" />
            </div>
            <div className="frame-shape3">
              <img src="assets/img/hero/xstar.png" alt="img" />
            </div>
            <div className="frame-shape4 float-bob-x">
              <img src="assets/img/hero/frame-shape.png" alt="img" />
            </div>
            <div className="bg-shape1">
              <img src="assets/img/hero/bg-shape.png" alt="img" />
            </div>
            <div className="bg-shape2">
              <img src="assets/img/hero/bg-shape2.png" alt="shape-img" />
            </div>
            <div className="hero-content">
              <h6 className="wow fadeInUp" data-wow-delay=".3s">
                Up to 30% Off
              </h6>
              <h1 className="wow fadeInUp" data-wow-delay=".5s">
                Get Your New Book <br /> With The Best Price
              </h1>
              <div className="form-clt wow fadeInUp" data-wow-delay=".9s">
                <button type="submit" className="theme-btn">
                  Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 col-lg-6">
          <div className="girl-image">
            <img
              className="float-bob-x"
              src="assets/img/hero/hero-girl.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// FeatureSection Component
const FeatureSection = () => {
  const features = [
    {
      icon: "icon-icon-1",
      title: "Return & refund",
      description: "Money back guarantee",
    },
    {
      icon: "icon-icon-2",
      title: "Secure Payment",
      description: "30% off by subscribing",
    },
    {
      icon: "icon-icon-3",
      title: "Quality Support",
      description: "Always online 24/7",
    },
    {
      icon: "icon-icon-4",
      title: "Daily Offers",
      description: "20% off by subscribing",
    },
  ];

  return (
    <section className="feature-section fix section-padding">
      <div className="container">
        <div className="feature-wrapper">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-box-items wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <div className="icon">
                <i className={feature.icon}></i>
              </div>
              <div className="content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ShopSection Component
const ShopSection = ({ title, isTopBooks = false }) => {
  const books = [
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
      author: "Esther",
      price: 39.0,
      rating: 4,
    },
    {
      id: 3,
      image: "03.png",
      title: "The Hidden Mystery Behind",
      author: "Hawkins",
      price: 29.0,
      rating: 4,
    },
    {
      id: 4,
      image: "04.png",
      title: "Qple GPad With Retina Sisplay",
      author: "Albert",
      price: 19.0,
      rating: 4,
      badges: ["-12%"],
    },
    {
      id: 5,
      image: "05.png",
      title: "Flovely and Unicom Erna",
      author: "Alexander",
      price: 30.0,
      rating: 4,
    },
  ];

  return (
    <section className="shop-section section-padding fix pt-0">
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              {title}
            </h2>
          </div>
          <Link
            href="/shop"
            className="theme-btn transparent-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            Explore More <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>

        {isTopBooks ? (
          <div className="book-shop-wrapper">
            {books.slice(0, 4).map((book, index) => (
              <BookItem key={book.id} book={book} index={index} />
            ))}
            <div className="cta-shop-box">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Find Your Nest Books!
              </h2>
              <h6 className="wow fadeInUp" data-wow-delay=".4s">
                And get your 25% discount now!
              </h6>
              <Link
                href="/shop"
                className="theme-btn white-bg wow fadeInUp"
                data-wow-delay=".6s"
              >
                Shop Now <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
              <div className="girl-shape">
                <img src="assets/img/girl-shape.png" alt="shape-img" />
              </div>
              <div className="circle-shape">
                <img src="assets/img/circle-shape.png" alt="shape-img" />
              </div>
            </div>
          </div>
        ) : (
          <div className="swiper book-slider">
            <div className="swiper-wrapper">
              {books.map((book) => (
                <div key={book.id} className="swiper-slide">
                  <BookItem book={book} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// BookItem Component
const BookItem = ({ book, index = 0 }) => (
  <div className="shop-box-items style-2">
    <div className="book-thumb center">
      <Link to="shop-details">
        <img src={`assets/img/book/${book.image}`} alt="img" />
      </Link>
      {book.badges && (
        <ul className="post-box">
          {book.badges.map((badge, i) => (
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
        <Link to="/shop-details">{book.title}</Link>
      </h3>
      <ul className="price-list">
        <li>${book.price.toFixed(2)}</li>
        {book.oldPrice && (
          <li>
            <del>${book.oldPrice.toFixed(2)}</del>
          </li>
        )}
      </ul>
      <ul className="author-post">
        <li className="authot-list">
          <span className="thumb">
            <img
              src={`assets/img/testimonial/client-${book.id}.png`}
              alt="img"
            />
          </span>
          <span className="content">{book.author}</span>
        </li>
        <li className="star">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={
                i < book.rating ? "fa-solid fa-star" : "fa-regular fa-star"
              }
            ></i>
          ))}
        </li>
      </ul>
    </div>
    <div className="shop-button">
      <Link to="/shop-details" className="theme-btn">
        <i className="fa-solid fa-basket-shopping"></i> Add To Cart
      </Link>
    </div>
  </div>
);

// BookCategoriesSection Component
const BookCategoriesSection = () => {
  const categories = [
    { id: 1, image: "01.png", title: "Romance Books (80)", number: "01" },
    { id: 2, image: "02.png", title: "Design Low Book (6)", number: "02" },
    { id: 3, image: "03.png", title: "safe Home (5)", number: "03" },
    { id: 4, image: "04.png", title: "Grow flower (7)", number: "04" },
    { id: 5, image: "05.png", title: "Adventure book (4)", number: "05" },
  ];

  return (
    <section className="book-catagories-section fix section-padding">
      <div className="container">
        <div className="book-catagories-wrapper">
          <div className="section-title text-center">
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Top Categories Book
            </h2>
          </div>
          <div className="array-button">
            <button className="array-prev">
              <i className="fal fa-arrow-left"></i>
            </button>
            <button className="array-next">
              <i className="fal fa-arrow-right"></i>
            </button>
          </div>
          <div className="swiper book-catagories-slider">
            <div className="swiper-wrapper">
              {categories.map((category) => (
                <div key={category.id} className="swiper-slide">
                  <div className="book-catagories-items">
                    <div className="book-thumb">
                      <img
                        src={`assets/img/book-categori/${category.image}`}
                        alt="img"
                      />
                      <div className="circle-shape">
                        <img
                          src="assets/img/book-categori/circle-shape.png"
                          alt="shape-img"
                        />
                      </div>
                    </div>
                    <div className="number">{category.number}</div>
                    <h3>
                      <Link to="/shop-details">{category.title}</Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// CtaBannerSection Component
const CtaBannerSection = () => (
  <section className="cta-banner-section fix section-padding pt-0">
    <div className="container">
      <div
        className="cta-banner-wrapper section-padding bg-cover"
        style={{ backgroundImage: "url('assets/img/cta-banner.jpg')" }}
      >
        <div className="book-shape">
          <img src="assets/img/book-shape.png" alt="shape-img" />
        </div>
        <div className="girl-shape float-bob-x">
          <img src="assets/img/girl-shape-2.png" alt="shape-img" />
        </div>
        <div className="cta-content text-center">
          <h2 className="mb-40 wow fadeInUp" data-wow-delay=".3s">
            Get 25% discount in all <br /> kind of super Selling
          </h2>
          <Link
            href="/shop"
            className="theme-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            Shop Now <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

// TopRatingBooksSection Component
const TopRatingBooksSection = () => {
  const topBooks = [
    {
      id: 1,
      image: "01.png",
      title: "Simple Things You To Save BOOK",
      author: "Wilson",
      price: 30.0,
      rating: 4,
    },
    {
      id: 2,
      image: "02.png",
      title: "How Deal With Very Bad BOOK",
      author: "Wilson",
      price: 39.0,
      rating: 4,
    },
    {
      id: 3,
      image: "03.png",
      title: "Qple GPad With Retina Sisplay",
      author: "Wilson",
      price: 30.0,
      rating: 4,
    },
    {
      id: 4,
      image: "04.png",
      title: "Flovely and Unicom Erna",
      author: "Wilson",
      price: 19.0,
      rating: 4,
    },
    {
      id: 5,
      image: "05.png",
      title: "Castle In The Sky",
      author: "Wilson",
      price: 16.0,
      rating: 4,
    },
    {
      id: 6,
      image: "06.png",
      title: "The Hidden Mystery Behind",
      author: "Wilson",
      price: 30.0,
      rating: 4,
    },
  ];

  return (
    <section className="top-ratting-book-section fix section-padding section-bg">
      <div className="container">
        <div className="top-ratting-book-wrapper">
          <div className="section-title-area">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Top Rating Books
              </h2>
            </div>
            <Link
              href="/shop"
              className="theme-btn transparent-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              View More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </div>
          <div className="row">
            {topBooks.map((book, index) => (
              <div
                key={book.id}
                className="col-xl-6 wow fadeInUp"
                data-wow-delay={`${index % 2 === 0 ? ".3s" : ".5s"}`}
              >
                <div className="top-ratting-box-items">
                  <div className="book-thumb">
                    <Link to="/shop-details">
                      <img
                        src={`assets/img/top-book/${book.image}`}
                        alt="img"
                      />
                    </Link>
                  </div>
                  <div className="book-content">
                    <div className="title-header">
                      <div>
                        <h5>Design Low Book</h5>
                        <h3>
                          <Link to="/shop-details">{book.title}</Link>
                        </h3>
                      </div>
                      <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                    <span className="mt-10">${book.price.toFixed(2)}</span>
                    <ul className="author-post">
                      <li className="authot-list">
                        <span className="thumb">
                          <img
                            src={`assets/img/testimonial/client-${book.id}.png`}
                            alt="img"
                          />
                        </span>
                        <span className="content mt-10">{book.author}</span>
                      </li>
                    </ul>
                    <div className="shop-btn">
                      <div className="star">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < book.rating
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }
                          ></i>
                        ))}
                      </div>
                      <Link to="/shop-details" className="theme-btn">
                        <i className="fa-solid fa-basket-shopping"></i> Add To
                        Cart
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// TestimonialSection Component
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "One of the most powerful takeaways from this book is the emphasis on adopting a mindset of abundance and possibility. The idea that we can choose to see opportunities rather than limitations is a game-changer.",
      name: "Ronald Richards",
      role: "Marketing Coordinator",
      rating: 3,
      image: "01.jpg",
      logo: "logo1.png",
    },
    {
      id: 2,
      text: "The idea that we can choose to see opportunities rather than limitations is a game-changer. The book encourages readers to step out of their comfort zones and embrace a more positive outlook on life.",
      name: "Dianne Russell",
      role: "Project Manager",
      rating: 3,
      image: "02.jpg",
      logo: "logo2.png",
    },
    {
      id: 3,
      text: "The Art of Possibility by Rosamund Stone Zander and Benjamin Zander is a transformative read that challenges conventional thinking and opens up new possibilities. As a reader, I found myself profoundly.",
      name: "Ronald Richards",
      role: "Marketing Coordinator",
      rating: 3,
      image: "03.jpg",
      logo: "logo1.png",
    },
    {
      id: 4,
      text: "From the very first chapter, the authors engage readers with inspiring stories and practical insights. Benjamin Zander's experiences as a conductor bring a unique perspective to leadership.",
      name: "Ronald Richards",
      role: "Marketing Coordinator",
      rating: 3,
      image: "04.jpg",
      logo: "logo2.png",
    },
  ];

  return (
    <section className="testimonial-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-left">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            What our client say
          </h2>
        </div>
        <div className="swiper testimonial-slider">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// TestimonialCard Component
const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card-items">
    <p>{testimonial.text}</p>
    <div className="client-info-wrapper d-flex align-items-center justify-content-between">
      <div className="client-info">
        <div
          className="client-img bg-cover"
          style={{
            backgroundImage: `url('assets/img/testimonial/${testimonial.image}')`,
          }}
        >
          <div className="icon">
            <img
              className="shape"
              src="assets/img/testimonial/shape.svg"
              alt="img"
            />
          </div>
        </div>
        <div className="content">
          <h3>{testimonial.name}</h3>
          <span>{testimonial.role}</span>
          <div className="star">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={
                  i < testimonial.rating
                    ? "fa-solid fa-star"
                    : "fa-regular fa-star"
                }
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="logo">
        <img src={`assets/img/testimonial/${testimonial.logo}`} alt="" />
      </div>
    </div>
  </div>
);

// TeamSection Component
const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Esther Howard",
      books: "10 Published Books",
      image: "01.jpg",
    },
    {
      id: 2,
      name: "Shikhon Islam",
      books: "07 Published Books",
      image: "02.jpg",
    },
    {
      id: 3,
      name: "Kawser Ahmed",
      books: "04 Published Books",
      image: "03.jpg",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      books: "15 Published Books",
      image: "04.jpg",
    },
    {
      id: 5,
      name: "Leslie Alexander",
      books: "05 Published Books",
      image: "05.jpg",
    },
    {
      id: 6,
      name: "Guy Hawkins",
      books: "12 Published Books",
      image: "06.jpg",
    },
  ];

  return (
    <section className="team-section fix section-padding pt-0 margin-bottom-30">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            Featured Author
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />
            Donec at nulla nulla. Duis posuere ex lacus
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
            {teamMembers.map((member) => (
              <div key={member.id} className="swiper-slide">
                <TeamMember member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// TeamMember Component
const TeamMember = ({ member }) => (
  <div className="team-box-items">
    <div className="team-image">
      <div className="thumb">
        <img src={`assets/img/team/${member.image}`} alt="img" />
      </div>
      <div className="shape-img">
        <img src="assets/img/team/shape-img.png" alt="img" />
      </div>
    </div>
    <div className="team-content text-center">
      <h6>
        <Link to="/team-details">{member.name}</Link>
      </h6>
      <p>{member.books}</p>
    </div>
  </div>
);

// NewsSection Component
const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Montes suspendisse massa curae malesuada",
      date: "Feb 10, 2024",
      category: "Activities",
      image: "09.jpg",
    },
    {
      id: 2,
      title: "Playful Picks Paradise: Kids' Essentials with Dash.",
      date: "Mar 20, 2024",
      category: "Activities",
      image: "10.jpg",
    },
    {
      id: 3,
      title: "Tiny Emporium: Playful Picks for Kids' Delightful Days.",
      date: "Jun 14, 2024",
      category: "Activities",
      image: "11.jpg",
    },
    {
      id: 4,
      title: "Eu parturient dictumst fames quam tempor",
      date: "Mar 12, 2024",
      category: "Activities",
      image: "12.jpg",
    },
  ];

  return (
    <section className="news-section fix section-padding section-bg">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
            Our Latest News
          </h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />
            Donec at nulla nulla. Duis posuere ex lacus
          </p>
        </div>
        <div className="row">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.2 + index * 0.2}s`}
            >
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// NewsCard Component
const NewsCard = ({ item }) => (
  <div className="news-card-items">
    <div className="news-image">
      <img src={`assets/img/news/${item.image}`} alt="img" />
      <img src={`assets/img/news/${item.image}`} alt="img" />
      <div className="post-box">{item.category}</div>
    </div>
    <div className="news-content">
      <ul>
        <li>
          <i className="fa-light fa-calendar-days"></i>
          {item.date}
        </li>
        <li>
          <i className="fa-regular fa-user"></i>
          By Admin
        </li>
      </ul>
      <h3>
        <Link to="/news-details">{item.title}</Link>
      </h3>
      <Link to="/news-details" className="theme-btn-2">
        Read More <i className="fa-regular fa-arrow-right-long"></i>
      </Link>
    </div>
  </div>
);

export default Home;
