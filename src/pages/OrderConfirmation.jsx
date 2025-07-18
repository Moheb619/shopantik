import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const orderId = searchParams.get("order_id");

  useEffect(() => {
    const updateOrderStatus = async () => {
      if (!orderId) {
        navigate("/");
        return;
      }

      try {
        const { error } = await supabase
          .from("orders")
          .update({
            status: "paid",
            payment_status: "success",
          })
          .eq("id", orderId);

        if (error) throw error;

        // You might want to redirect to order confirmation page
        navigate(`/order-confirmation/${orderId}`);
      } catch (error) {
        console.error("Failed to update order status:", error);
        navigate(`/payment-failed?order_id=${orderId}`);
      }
    };

    updateOrderStatus();
  }, [orderId, navigate]);

  return (
    <div className="payment-status">
      <h1>Payment Successful!</h1>
      <p>Your order is being processed.</p>
    </div>
  );
}
