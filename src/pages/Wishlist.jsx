import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";
import Preloader from "../components/Preloader";

const Wishlist = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  // Wishlist products data
  const wishlistProducts = [
    {
      id: 1,
      name: "Simple Things You To Save Book",
      price: 30.0,
      image: "assets/img/shop-cart/01.png",
      stockStatus: "in-stock",
      stockText: "In Stock",
      subtotal: 120.0,
    },
    {
      id: 2,
      name: "Qple GPad With Retina Sisplay",
      price: 39.0,
      image: "assets/img/shop-cart/02.png",
      stockStatus: "in-stock",
      stockText: "In Stock",
      subtotal: 120.0,
    },
    {
      id: 3,
      name: "Flovely and Unicom Erna",
      price: 19.0,
      image: "assets/img/shop-cart/03.png",
      stockStatus: "out-of-stock",
      stockText: "Out Of Stock",
      subtotal: 120.0,
    },
  ];

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
            <h1>Wishlist</h1>
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
                <li>Wishlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wishlist Section Start */}
      <div className="cart-section section-padding">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistProducts.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <span className="d-flex gap-5 align-items-center">
                              <Link to="/wishlist" className="remove-icon">
                                <img
                                  src="assets/img/icon/icon-9.svg"
                                  alt="remove"
                                />
                              </Link>
                              <span className="cart">
                                <img src={product.image} alt={product.name} />
                              </span>
                              <span className="cart-title">{product.name}</span>
                            </span>
                          </td>
                          <td>
                            <span className="cart-price">
                              ${product.price.toFixed(2)}
                            </span>
                          </td>
                          <td>
                            <span
                              className={`stock-title${
                                product.stockStatus === "out-of-stock"
                                  ? "-two"
                                  : ""
                              }`}
                            >
                              {product.stockText}
                            </span>
                          </td>
                          <td>
                            <span className="subtotal-price">
                              ${product.subtotal.toFixed(2)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
