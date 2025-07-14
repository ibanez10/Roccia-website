import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/Roccia text.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Hamburger menu (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 z-50"
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

          {/* Desktop Links Left */}
          <div className="hidden md:flex items-center gap-6">
            <button>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
              </svg>
            </button>
            {navLinksLeft.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium hover:underline"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Logo di tengah */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <img
            src={Logo}
            alt="Logo"
            className="w-36 md:w-44 h-auto object-contain pointer-events-auto"
          />
        </div>

        {/* Kanan */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-6">
            {navLinksRight.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-medium hover:underline"
              >
                {link.name}
              </Link>
            ))}
            {/* Cart */}
            <button className="hover:scale-110 transition">
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                1.263 12c.07.665-.45 1.243-1.119 
                1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
                1.125 0 0 1 5.513 7.5h12.974c.576 
                0 1.059.435 1.119 1.007ZM8.625 
                10.5a.375.375 0 1 1-.75 0 .375.375 
                0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 
                0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>

            {/* Profile */}
            <button className="hover:scale-110 transition">
              <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 
                3.75 3.75 0 0 1 7.5 0ZM4.501 
                20.118a7.5 7.5 0 0 1 14.998 
                0A17.933 17.933 0 0 1 12 
                21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
          </div>

          {/* Search icon (mobile only) */}
          <div className="md:hidden">
            <button className="hover:scale-110 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                />
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
                <button className="hover:scale-110 transition">
                  {/* Cart icon */}
                  <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 
                      1.263 12c.07.665-.45 1.243-1.119 
                      1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 
                      1.125 0 0 1 5.513 7.5h12.974c.576 
                      0 1.059.435 1.119 1.007ZM8.625 
                      10.5a.375.375 0 1 1-.75 0 .375.375 
                      0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 
                      0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </button>
                <button className="hover:scale-110 transition">
                  {/* Profile icon */}
                  <svg className="size-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 
                      3.75 3.75 0 0 1 7.5 0ZM4.501 
                      20.118a7.5 7.5 0 0 1 14.998 
                      0A17.933 17.933 0 0 1 12 
                      21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
