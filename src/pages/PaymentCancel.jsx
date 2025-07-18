import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import {
  AlertCircle,
  ArrowRight,
  ShoppingBag,
  Calendar,
  CreditCard,
} from "lucide-react";

export default function PaymentCancel() {
  const [searchParams] = useSearchParams();
  const [order, setOrder] = useState(null);
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    const deleteOrderById = async () => {
      try {
        // Step 1: Fetch the order before deleting
        const { data: existingOrder, error: fetchError } = await supabase
          .from("orders")
          .select("*")
          .eq("id", orderId)
          .single();

        if (fetchError) throw fetchError;

        // Step 2: Delete the order
        const { error: deleteError } = await supabase
          .from("orders")
          .delete()
          .eq("id", orderId);

        if (deleteError) throw deleteError;

        // Step 3: Save deleted order data to state
        setOrder(existingOrder);
      } catch (error) {
        console.error("Failed to delete order:", error.message);
      }
    };

    if (orderId) deleteOrderById();
  }, [orderId]);

  return (
    <div className="payment-cancelled-container">
      <div className="payment-cancelled-card">
        <div className="payment-header">
          <div className="status-icon cancelled">
            <AlertCircle size={24} />
          </div>
          <h1>Payment Cancelled</h1>
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

            <div className="order-item">
              <CreditCard size={18} className="icon" />
              <div className="item-info">
                <span className="label">Amount</span>
                <span className="value">৳{order.total.toFixed(2)}</span>
              </div>
            </div>

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

        <div className="payment-actions">
          <Link to="/shop-cart" className="btn btn-warning">
            Back to Cart <ArrowRight size={16} />
          </Link>
          <Link to="/" className="btn btn-outline-secondary">
            Continue Shopping
          </Link>
        </div>

        <div className="payment-footer">
          <p>Your items have been saved in your cart</p>
        </div>
      </div>
    </div>
  );
}
