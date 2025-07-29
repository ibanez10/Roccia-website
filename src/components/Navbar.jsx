import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../components/CartContext";
import axios from "axios";
import Logo from "/Roccia text.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    total,
  } = useCart();

  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinksLeft = [
    { name: "Home", path: "/" },
    { name: "Collection", path: "/collection" },
    { name: "Products", path: "/productPage" },
  ];
  const navLinksRight = [
    { name: "Catalogue", path: "/catalogue" },
    { name: "Our Story", path: "/ourStory" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-6 md:py-8">
      <div className="relative flex items-center justify-between">
        {/* Kiri */}
        <div className="flex-1 flex items-center gap-6">
          {/* Hamburger Menu */}
          <div className="md:hidden relative z-50">
              <button
                className="flex flex-col justify-center items-center w-6 h-6"
                onClick={() => setIsOpen(!isOpen)}
              >
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : -4 }}
                  className="block w-6 h-0.5 bg-black origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  className="block w-6 h-0.5 bg-black origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 4 }}
                  className="block w-6 h-0.5 bg-black origin-center"
                  transition={{ duration: 0.3 }}
                />
              </button>

              {/* Notifikasi jumlah item di cart */}
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-[6px] bg-red-600 text-white text-xs w-2 h-2 rounded-full flex items-center justify-center">
                  
                </span>
              )}
            </div>

          {/* Desktop Left Links */}
          <div className="hidden md:flex items-center gap-6">
            <button>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
            {navLinksLeft.map((link) => (
              <Link key={link.name} to={link.path} className="font-medium hover:underline">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Logo */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <img src={Logo} alt="Logo" className="w-36 md:w-44 h-auto object-contain pointer-events-auto" />
        </div>

        {/* Kanan */}
        <div className="flex-1 flex items-center justify-end gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navLinksRight.map((link) => (
              <Link key={link.name} to={link.path} className="font-medium hover:underline">
                {link.name}
              </Link>
            ))}

            {/* Cart */}
            <div className="relative">
              <button onClick={() => setShowCart(true)} className="hover:scale-110 transition">
                <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                  1.263 12c.07.665-.45 1.243-1.119 
                  1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
                  1.125 0 0 1 5.513 7.5h12.974c.576 
                  0 1.059.435 1.119 1.007ZM8.625 
                  10.5a.375.375 0 1 1-.75 0 .375.375 
                  0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 
                  0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </button>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </div>

            {/* Profile */}
            <button className="hover:scale-110 transition">
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 
                3.75 3.75 0 0 1 7.5 0ZM4.501 
                20.118a7.5 7.5 0 0 1 14.998 
                0A17.933 17.933 0 0 1 12 
                21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
          </div>

          {/* Search Mobile */}
          <div className="md:hidden">
            <button className="hover:scale-110 transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/60 backdrop-blur-md rounded-md shadow-md border-t py-4 flex flex-col gap-4 md:hidden"
            >
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 font-medium hover:underline"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-6 px-6 mt-2">
                <div className="relative">
                  <button onClick={() => setShowCart(true)} className="hover:scale-110 transition">
                    <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                      1.263 12c.07.665-.45 1.243-1.119 
                      1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
                      1.125 0 0 1 5.513 7.5h12.974c.576 
                      0 1.059.435 1.119 1.007ZM8.625 
                      10.5a.375.375 0 1 1-.75 0 .375.375 
                      0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 
                      0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                  </button>
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar Cart */}
        <AnimatePresence>
          {showCart && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/40 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowCart(false)}
              />
              <motion.div
                className="fixed top-5 right-5 w-[300px] sm:w-[400px] h-[50%] rounded-xl bg-white shadow-lg z-50 p-6 overflow-y-auto"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween" }}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Your Cart</h2>
                  <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-black text-2xl">&times;</button>
                </div>

                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Keranjangmu masih kosong.</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.slug} className="flex gap-4 items-center border-b pb-2">
                        <img src={item.img} alt={item.title} className="w-16 h-16 object-contain rounded" />
                        <div className="flex-1">
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-gray-600">Rp. {item.price.toLocaleString('id-ID')}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <button onClick={() => decreaseQty(item.slug)} className="px-2 py-0.5 border rounded">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQty(item.slug)} className="px-2 py-0.5 border rounded">+</button>
                          </div>
                        </div>
                        <button onClick={() => removeFromCart(item.slug)} className="text-red-500 hover:text-red-700 text-xl">&times;</button>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <p className="font-semibold">Total: Rp{total.toLocaleString("id-ID")}</p>
                      <button
                        onClick={() => {navigate('/checkoutPage'), setShowCart(false)}} 
                        className="w-full mt-2 bg-red-800 text-white py-2 rounded-full hover:bg-red-700 transition"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
