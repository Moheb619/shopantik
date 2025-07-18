import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { supabase } from "../lib/supabase";
import axios from "axios";

function CheckoutPage() {
  const {
    cartItems,
    cartTotal,
    shippingCost,
    totalWithShipping,
    shippingLocation,
    setShippingLocation,
    hasDiscountedShippingOffer,
  } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    postalCode: "",
    city: "",
    phone: "",
    email: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "city") {
      const lowerCity = value.toLowerCase();
      setShippingLocation(lowerCity.includes("dhaka") ? "inside" : "outside");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.address.trim())
      newErrors.address = "Street address is required.";

    if (!formData.postalCode) {
      newErrors.postalCode = "Postal code is required.";
    } else if (!/^\d{4}$/.test(formData.postalCode)) {
      newErrors.postalCode = "Postal code must be exactly 4 digits.";
    }

    if (!formData.city) newErrors.city = "City/Town is required.";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w.+-]+@gmail\.com$/.test(formData.email)) {
      newErrors.email = "Only Gmail addresses are allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsProcessing(true);

    const orderData = {
      customer_name: formData.name,
      customer_email: formData.email,
      customer_phone: formData.phone,
      customer_address: formData.address,
      customer_postal: formData.postalCode,
      customer_city: formData.city,
      notes: formData.notes,
      items: cartItems,
      subtotal: cartTotal,
      shipping_cost: shippingCost,
      total: totalWithShipping,
      payment_method: paymentMethod,
      shipping_location: shippingLocation,
      has_discounted_shipping: hasDiscountedShippingOffer(),
      status: "pending",
      payment_status: "pending",
      created_at: new Date().toISOString(),
      // New fields for hybrid payment
      payment_type: paymentMethod === "cod" ? "cod_partial" : "full_payment",
      advance_payment:
        paymentMethod === "cod" ? shippingCost : totalWithShipping,
      remaining_amount: paymentMethod === "cod" ? cartTotal : 0,
    };

    const { data, error } = await supabase
      .from("orders")
      .insert([orderData])
      .select()
      .single();

    if (error) {
      console.error("Error saving order:", error);
      alert("Order failed. Please try again.");
      setIsProcessing(false);
      return;
    }

    await processSSLCommerzPayment(data);
  };
  // Update the processSSLCommerzPayment function in your CheckoutPage component
  const processSSLCommerzPayment = async (orderData) => {
    try {
      setIsProcessing(true);

      // Determine payment amount based on payment method
      const paymentAmount =
        orderData.payment_method === "cod"
          ? orderData.shipping_cost
          : orderData.total;

      const paymentData = {
        orderData: {
          ...orderData,
          // For COD, we only charge shipping cost
          total: paymentAmount,
        },
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          postalCode: formData.postalCode,
        },
        cartItems: cartItems,
      };
      console.log(`${import.meta.env.VITE_BACKEND_URL}/api/payment/initiate`);
      // Call your backend to initiate payment using Axios
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/payment/initiate`,
        paymentData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );

      const result = response.data;

      if (!result.success) {
        throw new Error(result.message || "Payment initiation failed");
      }

      // Update order with transaction ID and payment status

      const { error: updateError } = await supabase
        .from("orders")
        .update({
          sslcommerz_tran_id: result.tran_id,
          payment_status:
            orderData.payment_method === "cod"
              ? "delivery_payment_option"
              : "fully_payment_option",
          status: "processing",
        })
        .eq("id", orderData.id);

      if (updateError) throw updateError;

      // Redirect to payment gateway
      window.location.href = result.gateway_url;
    } catch (error) {
      console.error("Payment processing failed:", error);
      alert(`Payment failed: ${error.message}`);

      // Revert order status if needed
      if (orderData?.id) {
        await supabase.from("orders").delete().eq("id", orderData.id);
      }

      setIsProcessing(false);
    }
  };

  return (
    <div id="checkout">
      <section className="checkout-section">
        <div className="container">
          <div className="checkout-grid">
            <div className="checkout-form-container">
              <form onSubmit={handleSubmit} noValidate>
                <div className="checkout-form-section">
                  <h3>Billing Details</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                      {errors.name && (
                        <p className="error-msg">{errors.name}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Street Address*</label>
                      <input
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                      {errors.address && (
                        <p className="error-msg">{errors.address}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Postal Code*</label>
                      <input
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                      {errors.postalCode && (
                        <p className="error-msg">{errors.postalCode}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>City/Town*</label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      >
                        <option value="">Select your city</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.city && (
                        <p className="error-msg">{errors.city}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Phone Number*</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      {errors.phone && (
                        <p className="error-msg">{errors.phone}</p>
                      )}
                    </div>

                    <div className="form-group">
                      <label>Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      {errors.email && (
                        <p className="error-msg">{errors.email}</p>
                      )}
                    </div>

                    <div className="form-group full-width">
                      <label>Order Notes (Optional)</label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Special instructions, delivery preferences, etc."
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="order-summary-container">
              <div className="order-summary">
                <h3>Your Order</h3>
                <div className="order-items">
                  {cartItems.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="item-name">
                        {item.name} <span>× {item.quantity}</span>
                      </div>
                      <div className="item-price">
                        ৳{(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-totals">
                  <div className="total-row">
                    <span>Subtotal</span>
                    <span>৳{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="total-row shipping">
                    <span>Shipping</span>
                    <span>
                      {hasDiscountedShippingOffer() ? (
                        <span className="free-shipping">
                          ৳45 ( Discounted )
                        </span>
                      ) : (
                        `৳${shippingCost.toFixed(2)} (${
                          shippingLocation === "inside"
                            ? "Inside Dhaka"
                            : "Outside Dhaka"
                        })`
                      )}
                    </span>
                  </div>
                  <div className="total-row grand-total">
                    <span>Total</span>
                    <span>৳{totalWithShipping.toFixed(2)}</span>
                  </div>
                </div>

                <div className="payment-methods">
                  <h4>Payment Method</h4>
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentMethod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label htmlFor="cod">
                      <span className="radio-custom"></span>
                      <span className="payment-label">
                        Cash on Delivery <br />
                        (Advance Delivery Charge)
                      </span>
                    </label>
                  </div>
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="online"
                      name="paymentMethod"
                      checked={paymentMethod === "online"}
                      onChange={() => setPaymentMethod("online")}
                    />
                    <label htmlFor="online">
                      <span className="radio-custom"></span>
                      <span className="payment-label">Online Payment</span>
                      <div className="payment-icons">
                        <img
                          src="https://wp.logos-download.com/wp-content/uploads/2022/01/BKash_Logo_icon-700x662.png"
                          alt="Bkash"
                        />
                        <img
                          src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg"
                          alt="Nagad"
                        />
                        <img
                          src="assets/img/Mastercard2.png"
                          alt="Mastercard"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <button
                  className="place-order-btn"
                  onClick={handleSubmit}
                  disabled={isProcessing || cartItems.length === 0}
                >
                  {isProcessing ? (
                    <span className="processing">Processing...</span>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ); // Replace with your JSX form and error rendering as shown earlier
}

export default CheckoutPage;
