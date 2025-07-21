import { createContext, useContext, useState } from "react";

// Buat konteks cart
const CartContext = createContext();

// Provider utama
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Tambah ke keranjang
  const addToCart = (item) => {
    const exists = cartItems.find((p) => p.slug === item.slug);
    if (exists) {
      setCartItems(
        cartItems.map((p) =>
          p.slug === item.slug ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // Hapus dari keranjang
  const removeFromCart = (slug) => {
    setCartItems(cartItems.filter((item) => item.slug !== slug));
  };

  // Tambah jumlah item
  const increaseQty = (slug) => {
    setCartItems(
      cartItems.map((item) =>
        item.slug === slug ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Kurangi jumlah item (tidak boleh kurang dari 1)
  const decreaseQty = (slug) => {
    setCartItems(
      cartItems.map((item) =>
        item.slug === slug
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };

  // Hitung total harga (dalam number)
  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  // Ekspor context value
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

// Hook useCart
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
