import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader";
import BackToTop from "../components/BackToTop";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Cart items data
  const cartItems = [
    {
      id: 1,
      name: "Simple Things You To Save Book",
      price: 30.0,
      quantity: 1,
      image: "assets/img/shop-cart/01.png",
      subtotal: 120.0,
    },
    {
      id: 2,
      name: "Qple GPad With Retina Sisplay",
      price: 30.0,
      quantity: 1,
      image: "assets/img/shop-cart/02.png",
      subtotal: 120.0,
    },
    {
      id: 3,
      name: "Flovely and Unicom Erna",
      price: 30.0,
      quantity: 1,
      image: "assets/img/shop-cart/03.png",
      subtotal: 120.0,
    },
  ];

  // Cart totals
  const cartTotals = {
    subtotal: 84.0,
    shipping: "Free",
    total: 84.0,
  };

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
            <h1>Cart</h1>
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
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Cart Section Start */}
      <div className="cart-section section-padding">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row g-5">
              <div className="col-xl-9">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <span className="d-flex gap-5 align-items-center">
                              <Link to="/shop-cart" className="remove-icon">
                                <img
                                  src="assets/img/icon/icon-9.svg"
                                  alt="img"
                                />
                              </Link>
                              <span className="cart">
                                <img src={item.image} alt="img" />
                              </span>
                              <span className="cart-title">{item.name}</span>
                            </span>
                          </td>
                          <td>
                            <span className="cart-price">
                              ${item.price.toFixed(2)}
                            </span>
                          </td>
                          <td>
                            <span className="quantity-basket">
                              <span className="qty">
                                <button className="qtyminus" aria-hidden="true">
                                  −
                                </button>
                                <input
                                  type="number"
                                  name="qty"
                                  id={`qty${item.id}`}
                                  min="1"
                                  max="10"
                                  step="1"
                                  value={item.quantity}
                                  onChange={() => {}}
                                />
                                <button className="qtyplus" aria-hidden="true">
                                  +
                                </button>
                              </span>
                            </span>
                          </td>
                          <td>
                            <span className="subtotal-price">
                              ${item.subtotal.toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="cart-wrapper-footer">
                  <form>
                    <div className="input-area">
                      <input
                        type="text"
                        name="Coupon Code"
                        id="CouponCode"
                        placeholder="Coupon Code"
                      />
                      <button type="submit" className="theme-btn">
                        Apply
                      </button>
                    </div>
                  </form>
                  <Link to="/shop-cart" className="theme-btn">
                    Update Cart
                  </Link>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="table-responsive cart-total">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Cart Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Subtotal:</span>
                            <span className="sub-price">
                              ${cartTotals.subtotal.toFixed(2)}
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Shipping:</span>
                            <span className="sub-text">
                              {cartTotals.shipping}
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Total:</span>
                            <span className="sub-price sub-price-total">
                              ${cartTotals.total.toFixed(2)}
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Link to="/checkout" className="theme-btn">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
