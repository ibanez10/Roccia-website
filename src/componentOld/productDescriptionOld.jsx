import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../components/CartContext"; 

export default function ProductDescription() {
  const { state } = useLocation();
  const product = state || {};
  const { addToCart } = useCart(); 
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("bg-green-200");

  const colors = [
    "bg-green-200", "bg-white", "bg-gray-400", "bg-red-700",
    "bg-zinc-800", "bg-black", "bg-pink-200", "bg-orange-200",
    "bg-yellow-300", "bg-amber-400"
  ];

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity((q) => q + 1);
    if (type === "dec" && quantity > 1) setQuantity((q) => q - 1);
  };

  if (!product.title) {
    return <p className="text-center py-10">No product data available.</p>;
  }

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity,
      selectedColor,
    };
    addToCart(item);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Gambar Produk */}
      <div className="border border-red-500 rounded-xl flex flex-col overflow-hidden">
        <div className=" w-full bg-gray-100">
          <img
            src={product.img}
            alt={product.title}
            className="w-full max-h-[400px] object-cover rounded-t-xl"
          />
        </div>

        <div className="flex gap-4 p-4 flex-wrap pt-8">
          {[1, 2, 3].map((_, i) => (
            <img
              key={i}
              src={product.img}
              alt={`thumb${i + 1}`}
              className="w-20 h-20 border border-red-500 rounded-md object-cover"
            />
          ))}
        </div>
      </div>

      {/* Informasi Produk */}
      <div className="flex flex-col">
        <span className="text-sm text-red-600 font-medium border border-red-600 rounded-full px-3 py-1 w-fit mb-2">
          Table
        </span>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
          {product.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-4">
          Rp {product.price?.toLocaleString("id-ID")}
        </p>

        <h2 className="text-md font-semibold text-gray-700 mb-1">Description</h2>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Crafted with intention, the {product.title} captures the essence of contemporary
          living—clean lines, sturdy textures, and a presence that anchors any space with quiet confidence.
        </p>

        <h3 className="text-sm font-semibold mb-2">Available Colors</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 transition ${
                selectedColor === color ? "border-red-600 scale-110" : "border-gray-400"
              } ${color}`}
            />
          ))}
        </div>

        {/* Quantity Control */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-semibold">Quantity</span>
          <div className="flex items-center border border-red-500 rounded-full px-3 py-1">
            <button
              onClick={() => handleQuantity("dec")}
              className="text-red-700 font-bold text-lg px-2"
            >
              −
            </button>
            <span className="px-3">{quantity}</span>
            <button
              onClick={() => handleQuantity("inc")}
              className="text-red-700 font-bold text-lg px-2"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-white border border-red-700 text-red-700 font-medium rounded-full px-6 py-2 hover:bg-red-50 transition"
          >
            Add to cart
          </button>
          <button className="bg-red-700 text-white font-medium rounded-full px-6 py-2 hover:bg-red-600 transition">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
