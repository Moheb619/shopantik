import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } =
    useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity) || 1);
  };

  return (
    <>
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
                        <th style={{ paddingLeft: "50px" }}>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <span className="d-flex gap-5 align-items-center cart-price">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="remove-icon"
                              >
                                <img
                                  src="assets/img/icon/icon-9.svg"
                                  alt="Remove"
                                />
                              </button>
                              <span className="cart">
                                <img src={item.image} alt={item.name} />
                              </span>
                              <span className="cart-title">{item.name}</span>
                            </span>
                          </td>
                          <td>
                            <span className="cart-price">
                              ৳{item.price.toFixed(2)}
                            </span>
                          </td>
                          <td>
                            <span className="quantity-basket cart-price">
                              <span className="qty">
                                <button
                                  className="qtyminus"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  name="qty"
                                  id={`qty${item.id}`}
                                  min="1"
                                  max="10"
                                  value={item.quantity}
                                  onChange={(e) =>
                                    handleQuantityChange(
                                      item.id,
                                      e.target.value
                                    )
                                  }
                                />
                                <button
                                  className="qtyplus"
                                  onClick={() =>
                                    handleQuantityChange(
                                      item.id,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  +
                                </button>
                              </span>
                            </span>
                          </td>
                          <td>
                            <span className="subtotal-price cart-price">
                              ৳{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {cartItems.length > 0 ? (
                  <div className="cart-wrapper-footer">
                    <button onClick={clearCart} className="theme-btn">
                      Clear Cart
                    </button>
                  </div>
                ) : (
                  <div
                    className="cart-empty-message text-center"
                    style={{ padding: "20px", fontSize: "16px" }}
                  >
                    <i
                      className="fas fa-shopping-cart"
                      style={{ fontSize: "20px", marginRight: "8px" }}
                    ></i>
                    Your cart is empty
                  </div>
                )}
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
                      {/* <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Subtotal:</span>
                            <span className="sub-price">
                              ৳{cartTotal.toFixed(2)}
                            </span>
                          </span>
                        </td>
                      </tr> */}
                      {/* <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Shipping:</span>
                            <span className="sub-text">Free</span>
                          </span>
                        </td>
                      </tr> */}
                      <tr>
                        <td>
                          <span className="d-flex gap-5 align-items-center justify-content-between">
                            <span className="sub-title">Total:</span>
                            <span className="sub-price sub-price-total">
                              ৳{cartTotal.toFixed(2)}
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
