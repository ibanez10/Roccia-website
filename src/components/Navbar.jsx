import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "/Roccia text.png";
import { path } from "framer-motion/client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinksLeft = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "Products", path: "/product" },
];
  const navLinksRight = [
    {name : "Catalogue", path: "/catalogue"},
    {name : "Our Story", path: "ourStory/"},
    {name : "Contact", path: "/contact"}
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between relative">
        {/* Kiri: Hamburger + Desktop Links */}
        <div className="flex items-center gap-6">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-6 h-6 relative z-50"
              onClick={() => setIsOpen(!isOpen)}
          >
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 6 : -6, // naik ke tengah
                  }}
                  className="block w-6 h-0.5 bg-black origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                  className="block w-6 h-0.5 bg-black my-1 origin-center"
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -6 : 6, // turun ke tengah
                  }}
                  className="block w-6 h-0.5 bg-black origin-center"
                  transition={{ duration: 0.3 }}
                />
            </button>


          {/* Desktop Links */}
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

        {/* Tengah: Logo */}
        <div className="w-24 md:w-32 flex justify-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Kanan: Desktop Links + Icons */}
        <div className="flex items-center gap-6">
          {/* Desktop Links */}
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
          </div>

          {/* Icons (selalu terlihat) */}
          <button className="hover:scale-110 transition">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
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
            {/* Profile Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
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

        {/* ABSOLUTE Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md rounded-md shadow-md border-t py-4 flex flex-col gap-4 md:hidden"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}