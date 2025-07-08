import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
  { name: "Products", path: "/product" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm flex items-center justify-between px-6 py-4">
      {/* Kiri: Search + Link */}
      <div className="flex items-center gap-6">
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
        {navLinks.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="font-medium hover:underline"
        >
          {link.name}
        </Link>
      ))}
  
      </div>

      {/* Tengah: Logo */}
      <div className="w-24 md:w-32">
        <img
          src="/Roccia text.png"
          alt="Text"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Kanan: Link + Icon */}
      <div className="flex items-center gap-6">
        {["Catalogue", "Our Story", "Contact"].map((link) => (
          <a key={link} href="#" className="font-medium hover:underline">
            {link}
          </a>
        ))}
        <button className="hover:scale-110 transition">
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
    </nav>
  );
}
