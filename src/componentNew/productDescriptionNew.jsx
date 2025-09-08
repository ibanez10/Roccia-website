import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../components/CartContext";
import axios from "axios";

export default function ProductDescription() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    axios.get(`https://your-api-url.com/api/products/${productId}`)
      .then((res) => {
        const data = res.data.data;
        setProduct(data);
        if (data.variants.length > 0) {
          setSelectedColor(data.variants[0].color.hex);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
      });
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "inc") setQuantity(q => q + 1);
    if (type === "dec" && quantity > 1) setQuantity(q => q - 1);
  };

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity,
      selectedColor,
    };
    addToCart(item);
  };

  if (!product) {
    return <p className="text-center py-10">Loading product...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Gambar utama & thumbnail */}
      <div className="border border-red-500 rounded-xl flex flex-col overflow-hidden">
        <div className="w-full bg-gray-100">
          <img
            src={product.variants[0]?.image}
            alt={product.name}
            className="w-full max-h-[400px] object-cover rounded-t-xl"
          />
        </div>

        <div className="flex gap-4 p-4 flex-wrap pt-8">
          {product.variants.map((variant, i) => (
            <img
              key={i}
              src={variant.image}
              alt={`variant-${i}`}
              className="w-20 h-20 border border-red-500 rounded-md object-cover"
            />
          ))}
        </div>
      </div>

      {/* Info Produk */}
      <div className="flex flex-col">
        <span className="text-sm text-red-600 font-medium border border-red-600 rounded-full px-3 py-1 w-fit mb-2">
          {product.type}
        </span>

        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Rp {product.price?.toLocaleString("id-ID")}
        </p>

        <h2 className="text-md font-semibold text-gray-700 mb-1">Description</h2>
        <div
          className="text-sm text-gray-600 mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />

        {/* Warna */}
        <h3 className="text-sm font-semibold mb-2">Available Colors</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {product.variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setSelectedColor(variant.color.hex)}
              title={variant.color.name}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 transition ${
                selectedColor === variant.color.hex ? "border-red-600 scale-110" : "border-gray-400"
              }`}
              style={{ backgroundColor: variant.color.hex }}
            />
          ))}
        </div>

        {/* Jumlah */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-semibold">Quantity</span>
          <div className="flex items-center border border-red-500 rounded-full px-3 py-1">
            <button onClick={() => handleQuantity("dec")} className="text-red-700 font-bold text-lg px-2">−</button>
            <span className="px-3">{quantity}</span>
            <button onClick={() => handleQuantity("inc")} className="text-red-700 font-bold text-lg px-2">+</button>
          </div>
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleAddToCart}
            className="bg-white border border-red-700 text-red-700 font-medium rounded-full px-6 py-2 hover:bg-red-50 transition"
          >
            Add to cart
          </button>
          <button
            onClick={() => {
              handleAddToCart();
              navigate("/checkoutPage");
            }}
            className="bg-red-700 text-white font-medium rounded-full px-6 py-2 hover:bg-red-600 transition"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
