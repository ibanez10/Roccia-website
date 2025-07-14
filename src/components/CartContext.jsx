import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const exists = cartItems.find((p) => p.slug === item.slug);
    if (exists) {
      setCartItems(cartItems.map((p) =>
        p.slug === item.slug ? { ...p, quantity: p.quantity + 1 } : p
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (slug) => {
    setCartItems(cartItems.filter((item) => item.slug !== slug));
  };

  const increaseQty = (slug) => {
    setCartItems(cartItems.map((item) =>
      item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (slug) => {
    setCartItems(cartItems.map((item) =>
      item.slug === slug
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    ));
  };

  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[^\d.-]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
