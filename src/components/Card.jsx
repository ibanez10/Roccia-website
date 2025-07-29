import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Card({ title, img, price, slug }) {
  const navigate = useNavigate();
  const { addToCart } = useCart(); // ✅ tambahkan ini
  const formattedPrice = price.toLocaleString('id-ID');

  const item = { title, img, price, slug };

  return (
    <div
      className="group relative w-[40vh] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                 border border-gray-400 rounded-[20px] overflow-hidden 
                 shadow-sm hover:shadow-lg transition duration-300 mt-6 bg-white"
    >
      {/* Wrapper dengan rasio 4:3 */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* deskripsi */}
      <div className="flex flex-col justify-center px-4 border-t pt-4 border-gray-400 pb-4">
        <h1
          onClick={() => navigate(`/product/${slug}`)}
          className="font-medium text-lg text-gray-800 hover:underline mb-2 cursor-pointer truncate overflow-hidden whitespace-nowrap"
        >
          {title}
        </h1>

        <div className="flex justify-between items-center pb-2">
          <p className="text-sm border border-red-700 rounded-full px-5 py-0.5 text-red-700">
            Table
          </p>
          <p className="text-md font-semibold text-gray-800">
            Rp. {formattedPrice}
          </p>
        </div>

        <button
          onClick={() => {
            navigate("/productDescription", { state: item }); 
          }}
          className="bg-red-800 text-white text-sm py-2 w-full mt-1 rounded-full hover:bg-red-700 transition duration-300"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
