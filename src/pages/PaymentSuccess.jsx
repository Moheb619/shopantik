import { useContext, useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { CartContext } from "../context/cartContext";
import {
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  Calendar,
  CreditCard,
} from "lucide-react";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const orderId = searchParams.get("order_id");
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    const updateOrderStatus = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("orders")
          .update({
            status: "paid",
            payment_status: "success",
          })
          .eq("id", orderId)
          .select()
          .single();

        if (error) throw error;

        setOrder(data);
      } catch (error) {
        console.error("Failed to update order status:", error);
      } finally {
        clearCart();
        setLoading(false);
      }
    };

    if (orderId) updateOrderStatus();
  }, [orderId]);

  if (loading) {
    return (
      <div className="payment-status-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p>Verifying your payment...</p>
      </div>
    );
  }

  return (
    <div className="payment-success-container">
      <div className="payment-success-card">
        <div className="payment-header">
          <div className="status-icon success">
            <CheckCircle size={24} />
          </div>
          <h1>Payment Successful!</h1>
          <p className="order-reference">Order #: {orderId}</p>
        </div>

        {order && (
          <div className="order-details">
            <h2>Order Summary</h2>

            <div className="order-item">
              <ShoppingBag size={18} className="icon" />
              <div className="item-info">
                <span className="label">Products</span>
                <div className="products-list">
                  {order.items && order.items.length > 0 ? (
                    order.items.map((item, index) => (
                      <span key={index} className="product-name">
                        {item.name} ({item.quantity}x)
                      </span>
                    ))
                  ) : (
                    <span>No items in order</span>
                  )}
                </div>
              </div>
            </div>

            {order.payment_method === "online" ? (
              <div className="order-item">
                <CreditCard size={18} className="icon" />
                <div className="item-info">
                  <span className="label">Full Amount Paid</span>
                  <span className="value">৳{order.total.toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <div className="order-item">
                <CreditCard size={18} className="icon" />
                <div className="item-info">
                  <span className="label">Due Payment Upon COD</span>
                  <span className="value">
                    ৳{order.remaining_amount.toFixed(2)}
                  </span>
                </div>
                <div className="item-info">
                  <span className="label">Advance Delivery Charge Paid</span>
                  <span className="value">
                    ৳{order.shipping_cost.toFixed(2)}
                  </span>
                </div>
              </div>
            )}

            <div className="order-item">
              <CreditCard size={18} className="icon" />
              <div className="item-info">
                <span className="label">Payment Method</span>
                <span className="value">
                  {order.payment_method === "online"
                    ? "Online Payment"
                    : "Cash on Delivery"}
                </span>
              </div>
            </div>

            <div className="order-item">
              <Calendar size={18} className="icon" />
              <div className="item-info">
                <span className="label">Order Date</span>
                <span className="value">
                  {new Date(order.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* <div className="payment-actions">
          <Link to="/orders" className="btn btn-danger">
            View Your Orders <ArrowRight size={16} />
          </Link>
          <Link to="/" className="btn btn-outline-secondary">
            Continue Shopping
          </Link>
        </div> */}

        {/* <div className="payment-footer">
          <p>A confirmation has been sent to {order?.customer_email}</p>
        </div> */}
      </div>
    </div>
  );
}
