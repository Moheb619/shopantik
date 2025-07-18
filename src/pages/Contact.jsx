import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Contact = () => {
  // Contact information data
  const contactInfo = [
    {
      icon: "icon-icon-10",
      title: "Call Us 7/24",
      content: <Link to="tel:+8801842273787">+880-18-42273787</Link>,
      hasBorder: true,
    },
    // {
    //   icon: "icon-icon-11",
    //   title: "Make a Quote",
    //   content: <Link to="mailto:example@gmail.com">example@gmail.com</Link>,
    //   hasBorder: true,
    // },
    {
      icon: "icon-icon-12",
      title: "Location",
      content: "Pallabi, Mirpur 12, Dhaka",
      hasBorder: false,
    },
  ];

  return (
    <>
      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img
            src="assets/img/Provided_Images/Compressed Image/Antik_head__1.png"
            alt="book"
          />
        </div>
        <div className="book2">
          <img
            src="assets/img/Provided_Images/Compressed Image/1.webp"
            alt="book"
          />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Contact Us</h1>
            <div className="page-header">
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".3s"
              >
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section Start */}
      <section className="contact-section fix section-padding">
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-4">
                <div className="contact-left-items">
                  <div className="contact-info-area-2">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className={`contact-info-items ${
                          info.hasBorder ? "mb-4" : "border-none"
                        }`}
                      >
                        <div className="icon">
                          <i className={info.icon}></i>
                        </div>
                        <div className="content">
                          <p>{info.title}</p>
                          <h3>{info.content}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="video-image">
                    <img src="assets/img/contact.jpg" alt="contact" />
                    <div className="video-box">
                      <Link
                        to="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                        className="video-btn ripple video-popup"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-play"></i>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-lg-8">
                <div className="contact-content">
                  <h2>Contact US</h2>
                  <form id="contact-form" className="contact-form-items">
                    <div className="row g-4">
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <span>Your name*</span>
                          <input
                            type="text"
                            name="name"
                            id="sender_name"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <span>Your Email*</span>
                          <input
                            type="text"
                            name="email"
                            id="email123"
                            placeholder="Your Email"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <span>Write Message*</span>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Write Message"
                          ></textarea>
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".9s"
                      >
                        <button type="submit" className="theme-btn">
                          Send Message{" "}
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Start */}
      <div className="map-section">
        <div className="map-items">
          <div className="googpemap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0465769843745!2d90.36809901727949!3d23.816942723782216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c17169e2be61%3A0x8e76d88f0eccddc1!2sPallabi%20Mirpur-12%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1750250461458!5m2!1sen!2sbd"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
