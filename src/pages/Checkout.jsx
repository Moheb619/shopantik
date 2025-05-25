import React from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import { useEffect } from "react";
import { useState } from "react";
import BackToTop from "../components/BackToTop";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // Order data
  const orderItems = [{ name: "Fashion Women's 1", price: 29.0 }];

  const shippingOptions = [
    { id: "free", label: "Free Shipping", price: 0 },
    { id: "local", label: "Local: $15.00", price: 15.0 },
    { id: "flat", label: "Flat rate: $10.00", price: 10.0 },
  ];

  const paymentMethods = [
    {
      id: "bank",
      label: "Direct bank transfer",
      description:
        "Make your payment directly into our bank account please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.",
    },
    { id: "cod", label: "Cash on delivery" },
    {
      id: "paypal",
      label: "Paypal",
      logos: ["PayPal.png", "GooglePay.png", "Mastercard2.png"],
    },
  ];

  // Calculate totals
  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const [selectedShipping, setSelectedShipping] = React.useState(
    shippingOptions[0]
  );
  const total = subtotal + selectedShipping.price;

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader />}

      {/* Back To Top */}
      <BackToTop />
      {/* Breadcrumb Section Start */}
      <div className="breadcrumb-wrapper">
        <div className="book1">
          <img src="assets/img/hero/book1.png" alt="book" />
        </div>
        <div className="book2">
          <img src="assets/img/hero/book2.png" alt="book" />
        </div>
        <div className="container">
          <div className="page-heading">
            <h1>Checkout</h1>
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
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section Start */}
      <section className="checkout-section fix section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <form>
                <div className="checkout-single-wrapper">
                  <div className="checkout-single boxshado-single">
                    <h4>Billing Details</h4>
                    <div className="checkout-single-form">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="input-single">
                            <span>First Name*</span>
                            <input
                              type="text"
                              name="user-first-name"
                              id="userFirstName"
                              required
                              placeholder="First Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-single">
                            <span>Last Name*</span>
                            <input
                              type="text"
                              name="user-last-name"
                              id="userLastName"
                              required
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Company name (optional)</span>
                            <input name="company-name" id="companyname" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Country*</span>
                            <input
                              name="country"
                              id="country"
                              placeholder="Select a country"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Street Address*</span>
                            <input
                              name="user-address"
                              id="userAddress"
                              placeholder="Home number and street name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Street Address*</span>
                            <input
                              name="user-address"
                              id="userAddress2"
                              placeholder="Apartment, suite, unit, etc. (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Town/ City*</span>
                            <input name="towncity" id="towncity" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Phone*</span>
                            <input
                              name="phone"
                              id="phone"
                              placeholder="phone"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>Email Address*</span>
                            <input
                              name="email"
                              id="email22"
                              placeholder="email"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-check payment-save">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="save-for-next"
                              id="saveForNext111"
                            />
                            <label htmlFor="saveForNext111">
                              Save for my next payment
                            </label>
                          </div>
                          <div className="input-check payment-save style-2">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name="save-for-next"
                              id="saveForNext2"
                            />
                            <label htmlFor="saveForNext2">
                              Ship to a different address?
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="input-single">
                            <span>order notes (optional)</span>
                            <textarea
                              name="notes"
                              id="notes"
                              placeholder="Notes about your order, e.g special notes for delivery."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-3">
              <div className="checkout-order-area">
                <h3>Our Order</h3>
                <div className="product-checout-area">
                  <div className="checkout-item d-flex align-items-center justify-content-between">
                    <p>Product</p>
                    <p>Subtotal</p>
                  </div>
                  {orderItems.map((item, index) => (
                    <div
                      key={index}
                      className="checkout-item d-flex align-items-center justify-content-between"
                    >
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  ))}
                  <div className="checkout-item d-flex justify-content-between">
                    <p>Shipping</p>
                    <div className="shopping-items">
                      {shippingOptions.map((option) => (
                        <div
                          key={option.id}
                          className="form-check d-flex align-items-center from-customradio"
                        >
                          <label className="form-check-label">
                            {option.label}
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="shippingOption"
                            id={option.id}
                            checked={selectedShipping.id === option.id}
                            onChange={() => setSelectedShipping(option)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="checkout-item d-flex align-items-center justify-content-between">
                    <p>Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                  <div className="checkout-item-2">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="form-check-2 d-flex align-items-center from-customradio-2"
                      >
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          id={method.id}
                        />
                        <label className="form-check-label" htmlFor={method.id}>
                          {method.label}
                        </label>
                        {method.description && <p>{method.description}</p>}
                        {method.logos && (
                          <ul className="brand-logo">
                            {method.logos.map((logo, index) => (
                              <li key={index}>
                                <Link to="/checkout">
                                  <img
                                    src={`assets/img/${logo}`}
                                    alt="payment"
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
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

export default Checkout;
