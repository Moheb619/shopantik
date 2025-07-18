import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getSpecificProduct } from "../lib/apiService";
import SpinnerGrowLoader from "../components/SpinnerGrowLoader";
import { CartContext } from "../context/cartContext";

const ProductDetails = () => {
  const [isProductLoading, setIsProductLoading] = useState(true);
  const [isProductPerahindLoading, setIsProductPerahinLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("thumb1");
  const [activeInfoTab, setActiveInfoTab] = useState("description");
  const [product, setProduct] = useState(null);
  const [productPerahin, setProductPerahin] = useState("Perahin 1");
  const [productPerahinName, setProductPerahinName] = useState("Perahin 1");
  const [productName, setProductName] = useState("Noman #1 আবারো");
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [perahinChecked, setPerahinChecked] = useState(false);
  const [perahinQuantity, setPerahinQuantity] = useState(1);

  const handlePerahinCheckboxChange = (e) => {
    setPerahinChecked(e.target.checked);
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0],
      },
      quantity
    );
    if (perahinChecked) {
      addToCart(
        {
          id: productPerahin.id,
          name: productPerahin.name,
          price: productPerahin.price,
          image: productPerahin.images[0],
        },
        perahinQuantity
      );
    }
    perahinChecked
      ? alert("Noman and Perahin1 added to cart!")
      : alert("Noman added to cart!");
  };

  const handleThumbClick = (tab) => {
    setActiveTab(tab);
  };

  const incrementQuantity = () => {
    setQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decrementQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const incrementPerahinQuantity = () => {
    setPerahinQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decrementPerahinQuantity = () => {
    setPerahinQuantity((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsProductLoading(true);
        const data = await getSpecificProduct(productName);
        setProduct(data);
        setIsProductLoading(false);
      } catch (err) {
        console.error("Failed to fetch product:", err.message);
        setIsProductLoading(false);
      }
    };

    fetchProduct();
  }, [productName]);

  useEffect(() => {
    const fetchPerahin = async () => {
      try {
        setIsProductPerahinLoading(true);
        const data = await getSpecificProduct(productPerahinName);

        setProductPerahin(data);
        setIsProductPerahinLoading(false);
      } catch (err) {
        console.error("Failed to fetch product:", err.message);
        setIsProductPerahinLoading(false);
      }
    };

    fetchPerahin();
  }, [productPerahinName]);

  return (
    <div className="shop-details-page">
      {isProductLoading ? (
        <SpinnerGrowLoader />
      ) : (
        <section className="shop-details-section fix section-padding">
          <div className="container">
            <div className="shop-details-wrapper">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="shop-details-image">
                    <div className="tab-content">
                      {product.images &&
                        product.images.map((img, i) => (
                          <div
                            key={i}
                            id={`thumb${i + 1}`}
                            className={`tab-pane fade ${
                              activeTab === `thumb${i + 1}` ? "show active" : ""
                            }`}
                          >
                            <div className="shop-details-thumb">
                              <img src={img} alt="product" />
                            </div>
                          </div>
                        ))}
                    </div>
                    <ul className="nav">
                      {product.images.map((img, i) => (
                        <li className="nav-item" key={i}>
                          <button
                            className={`nav-link ${
                              activeTab === `thumb${i + 1}` ? "active" : ""
                            }`}
                            onClick={() => handleThumbClick(`thumb${i + 1}`)}
                          >
                            <img src={img} alt="thumbnail" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="shop-details-content">
                    <div className="title-wrapper">
                      <h2>
                        {product.name} <br />
                        (Pre-Order)
                      </h2>
                    </div>
                    <p>{product.description}</p>
                    <div className="price-list">
                      <h3>৳{product.price}</h3>
                    </div>
                    <div className="cart-wrapper">
                      <div className="quantity-basket">
                        <p className="qty">
                          <button
                            className="qtyminus"
                            onClick={decrementQuantity}
                          >
                            −
                          </button>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={quantity}
                            onChange={(e) =>
                              setQuantity(
                                Math.min(
                                  Math.max(parseInt(e.target.value) || 1, 1),
                                  10
                                )
                              )
                            }
                          />
                          <button
                            className="qtyplus"
                            onClick={incrementQuantity}
                          >
                            +
                          </button>
                        </p>
                      </div>
                      <Link
                        to={"/shop-cart"}
                        className="theme-btn"
                        onClick={handleAddToCart}
                      >
                        <i className="fa-solid fa-basket-shopping"></i>{" "}
                        {perahinChecked ? "Add Both To Cart" : "Add to Cart"}
                      </Link>
                    </div>

                    {/* Special Offer Section - Independent Addition */}
                    {product.name.includes("Noman") && (
                      // <div className="recommendation-box">
                      //   <h4>Get Discounted Shipping!</h4>
                      //   <p>
                      //     Add "Perahin 1" to your cart and enjoy a discounted
                      //     delivery charge — only 45 BDT for both inside and
                      //     outside Dhaka!
                      //   </p>
                      //   <div className="cart-wrapper">
                      //     <div className="quantity-basket">
                      //       <p className="qty">
                      //         <button
                      //           className="qtyminus"
                      //           onClick={decrementPerahinQuantity}
                      //         >
                      //           −
                      //         </button>
                      //         <input
                      //           type="number"
                      //           min="1"
                      //           max="10"
                      //           value={perahinQuantity}
                      //           onChange={(e) =>
                      //             setPerahinQuantity(
                      //               Math.min(
                      //                 Math.max(
                      //                   parseInt(e.target.value) || 1,
                      //                   1
                      //                 ),
                      //                 10
                      //               )
                      //             )
                      //           }
                      //         />
                      //         <button
                      //           className="qtyplus"
                      //           onClick={incrementPerahinQuantity}
                      //         >
                      //           +
                      //         </button>
                      //       </p>
                      //     </div>
                      //     <label
                      //       className="d-flex align-items-center"
                      //       style={{ cursor: "pointer", fontSize: "14px" }}
                      //     >
                      //       <input
                      //         type="checkbox"
                      //         checked={perahinChecked}
                      //         onChange={handlePerahinCheckboxChange}
                      //         style={{ marginRight: "8px" }}
                      //       />
                      //       Add Perahin 1 to Cart
                      //     </label>
                      //   </div>
                      // </div>
                      <div className="recommendation-box d-flex align-items-center">
                        <div className="book-image">
                          <img src="https://plbiatpvfhtfiwdoilmt.supabase.co/storage/v1/object/public/secure-assets/books/perahin_part1_1.png" />
                        </div>
                        <div className="recommendation-content">
                          <h4>Get Discounted Shipping!</h4>
                          <p>
                            Add <strong>"Perahin 1"</strong> to your cart and
                            enjoy a discounted delivery charge — only{" "}
                            <strong>45 BDT</strong> for both inside and outside
                            Dhaka!
                          </p>
                          <div className="cart-wrapper">
                            <div className="quantity-basket">
                              <p className="qty">
                                <button
                                  className="qtyminus"
                                  onClick={decrementPerahinQuantity}
                                >
                                  −
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  max="10"
                                  value={perahinQuantity}
                                  onChange={(e) =>
                                    setPerahinQuantity(
                                      Math.min(
                                        Math.max(
                                          parseInt(e.target.value) || 1,
                                          1
                                        ),
                                        10
                                      )
                                    )
                                  }
                                />
                                <button
                                  className="qtyplus"
                                  onClick={incrementPerahinQuantity}
                                >
                                  +
                                </button>
                              </p>
                            </div>
                            <label
                              className="d-flex align-items-center"
                              style={{ cursor: "pointer", fontSize: "14px" }}
                            >
                              <input
                                type="checkbox"
                                checked={perahinChecked}
                                onChange={handlePerahinCheckboxChange}
                                style={{ marginRight: "8px" }}
                              />
                              Add Perahin 1 to Cart
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="category-box">
                      <div className="category-list">
                        <ul>
                          {product.sku ? (
                            <li>
                              <span>SKU:</span> {product.sku}
                            </li>
                          ) : (
                            ""
                          )}
                          {product.categories.name ? (
                            <li>
                              <span>Category:</span> {product.categories.name}
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                        <ul>
                          {product.tags ? (
                            <li>
                              <span>Tags:</span>{" "}
                              {product.tags.map((tag) => `#${tag}`).join(" ")}
                            </li>
                          ) : (
                            ""
                          )}
                          {product.books.is_digital ||
                          product.books.is_physical ? (
                            <li>
                              <span>Format:</span>{" "}
                              {product.books.is_physical ? "Physical" : ""}{" "}
                              {product.books.is_digital
                                ? product.books.is_physical
                                  ? "/Digital"
                                  : "Digital"
                                : ""}
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                        <ul>
                          {product.books.total_pages ? (
                            <li>
                              <span>Total page:</span>{" "}
                              {product.books.total_pages}
                            </li>
                          ) : (
                            ""
                          )}
                          {product.books.language ? (
                            <li>
                              <span>Language:</span> {product.books.language}
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                        <ul>
                          {product.books.publish_year ? (
                            <li>
                              <span>Publish Years:</span>{" "}
                              {product.books.publish_year}
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
