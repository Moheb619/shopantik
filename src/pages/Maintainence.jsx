import React from "react";

const Maintainence = () => {
  return (
    <div className="maintenance-container">
      <div className="maintenance-content">
        <div className="logo">
          <img src="/assets/img/logo/shop-antik-white.png" alt="logo" />
        </div>
        <h1>We'll Be Back Soon!</h1>
        <div className="divider"></div>
        <p className="message">
          We're currently performing scheduled maintenance.
          <br />
          We apologize for the inconvenience and appreciate your patience.
        </p>

        <div className="order-alternative">
          <h2>Need to place an order?</h2>
          <p>You can use our temporary order form:</p>
          <a
            href="https://docs.google.com/forms/d/1p7Xd-zQGVpE0FoxWvogKc-qJ5fSm-4YkKKagn-QEXz8/viewform?edit_requested=true&pli=1"
            className="order-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order via Google Form
          </a>
        </div>

        <div className="countdown">
          <p>Expected to be back online in:</p>
          <div>14 July, 2025</div>
        </div>
      </div>
    </div>
  );
};

export default Maintainence;
