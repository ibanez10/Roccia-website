// src/pages/ProductDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Archy Dining Set",
    slug: "archy-dining-set",
    description: "A modern and elegant dining set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752248770/dinning_table_vgejmv.png",
    price:"Rp 1.000.000"
  },
  {
    title: "Archy Lounge Set",
    slug: "archy-lounge-set",
    description: "Comfortable and stylish lounge set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243367/Archi_Lounge_Set_cfrmlh.png",
    price:"Rp 2.000.000"
  },
  {
    title: "Atrani Balcony Set",
    slug: "atrani-balcony-set",
    description: "Perfect set for your balcony relaxation.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243379/Artani_Balcony_Set_-_Copy_prjmvo.png",
    price:"Rp 3.000.000"
  },
  {
    title: "Atrani Lounge Set",
    slug: "atrani-lounge-set",
    description: "Relax with style in your atrani lounge.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243393/Atrani_Lounge_Set_mpqnyz.png",
    price:"Rp 4.000.000"
  },
  {
    title: "Baloo",
    slug: "baloo",
    description: "Soft and cozy Baloo seat.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243441/Baloo_gjquua.png",
    price:"Rp 5.000.000"
  },
  {
    title: "Cross Leg",
    slug: "cross-leg",
    description: "Elegant cross legged table design.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243441/Baloo_gjquua.png",
    price:"Rp 6.000.000"
  },
  {
    title: "Baloo & Cuba Lounge Set",
    slug: "baloo-&-cuba-lounge-set",
    description: "Stylish Baloo and Cuba combination set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243479/Cross_Leg_Cuba_Dinning_Set_jlz4ze.png",
    price:"Rp 7.000.000"
  },
  {
    title: "Diamond Edge",
    slug: "diamond-edge",
    description: "Sharp and elegant diamond edge table.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243521/Diamond_Edge_Ovieado_Dinning_Set_pyhf2h.png",
    price:"Rp 1.000.000"
  },
  {
    title: "Cuba Dining Set",
    slug: "cuba-dining-set",
    description: "Enjoy your meals with the Cuba dining set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243503/Cuba_Dinning_Set_tt9o8w.png",
    price:"Rp 2.000.000"
  },
  {
    title: "Diamond Edge & Ovieado Dining Set",
    slug: "diamond-edge-&-ovieado-dining-set",
    description: "Luxury set with Diamond Edge and Ovieado.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243503/Cuba_Dinning_Set_tt9o8w.png",
    price:"Rp 4.000.000"
  },
  {
    title: "Cross Leg & Cuba Dining Set",
    slug: "cross-leg-&-cuba-dining-set",
    description: "Mix of cross leg and Cuba elegance.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243479/Cross_Leg_Cuba_Dinning_Set_jlz4ze.png",
    price:"Rp 9.000.000"
  },
  {
    title: "Dove Tail Dining Set",
    slug: "dove-tail-dining-set",
    description: "Unique dovetail joinery dining set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243581/Dove_Tail_Dinning_Set_huw41m.png",
    price:"Rp 22.000.000"
  },
  {
    title: "Montego Corner Set",
    slug: "montego-corner-set",
    description: "Space-saving and elegant corner set.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243630/Montego_Corner_Set_omynyo.png",
    price:"Rp 20.000.000"
  },
  {
    title: "Ovieado Dining Set",
    slug: "ovieado-dining-set",
    description: "Modern dining with Ovieado style.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752244922/Ovieado_Dinning_Set_miskq7.png",
    price:"Rp 12.000.000"
  },
  {
    title: "Pattern Top",
    slug: "pattern-top",
    description: "Patterned table top for elegance.",
    image: "https://res.cloudinary.com/dpswqafiq/image/upload/v1752243452/Bawah_xwf6kc.png",
    price:"Rp 2.000.000"
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <p className="text-gray-600">Sorry, we couldn't find that product.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-center items-center mb-6">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 m-0">{product.title}</h1>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
      <p className="text-center text-lg text-gray-700">{product.description}</p>
      <Card title={product.title} img={product.image} price={product.price} isWide />
    </div>
  );
}

function Card({ title, img, price, isWide = false }) {
  const navigate = useNavigate();

  const slug = title.toLowerCase().replace(/ /g, "-");

  return (
    <div
      className="relative w-[40vh] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                 border border-gray-400 rounded-[20px] overflow-hidden 
                 shadow-sm hover:shadow-lg transition duration-300 mt-6 bg-white"
    >
      {/* Gambar Produk */}
      <div className="flex justify-center items-center p-4">
        <img
          src={img}
          alt={title}
          className="w-full max-w-[300px] md:max-w-[250px] h-auto object-contain transition-all duration-500"
        />
      </div>

      {/* Konten Deskripsi */}
      <div className="flex flex-col justify-center px-4 border-t pt-2 border-gray-400 pb-4">
        <h1 className="font-medium text-lg text-gray-800 hover:underline mb-2">
          {title}
        </h1>

        <div className="flex justify-between items-center pb-2">
          <p className="text-sm border border-red-700 rounded-full px-5 py-0.5 text-red-700">
            Table
          </p>
          <p className="text-md font-semibold text-gray-800">{price}</p>
        </div>

        <button className="bg-red-800 text-white text-sm py-2 w-full mt-1 rounded-full hover:bg-red-700 transition duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
}

