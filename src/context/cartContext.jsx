import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [shippingLocation, setShippingLocation] = useState("inside"); // 'inside' or 'outside'

  // Add item to cart (independent addition)
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  // Update item quantity
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate cart subtotal
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Count total items in cart
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Check if discounted shipping offer applies
  const hasDiscountedShippingOffer = () => {
    const hasPerahin1 = cartItems.some((item) => item.name === "Perahin 1");
    const hasNomanProduct = cartItems.some((item) =>
      item.name.includes("Noman")
    );
    return hasPerahin1 && hasNomanProduct;
  };

  // Calculate shipping cost based on location and offer
  const getShippingCost = () => {
    if (hasDiscountedShippingOffer()) return 45;
    return shippingLocation === "inside" ? 60 : 110;
  };

  // Calculate grand total
  const getTotalWithShipping = () => {
    return getCartTotal() + getShippingCost();
  };

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal: getCartTotal(),
        cartCount: getCartCount(),
        hasDiscountedShippingOffer,
        shippingCost: getShippingCost(),
        totalWithShipping: getTotalWithShipping(),
        shippingLocation,
        setShippingLocation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
