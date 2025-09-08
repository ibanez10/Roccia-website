import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCollections } from "../api/collectionApi";

export default function collectionPage() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetchCollections();
        setCollections(res.data);
      } catch (e) {
        console.error("Gagal fetch collections", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className="bg-white h-full px-4 pb-10 space-y-10">
      {/* Hero */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img
          src="/Collection Bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-semibold">Collection</h1>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mt-5">
        <div className="flex justify-center items-center mb-5">
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
          <p className="text-lg text-gray-700 m-0">Introducing</p>
          <div className="w-12 h-px bg-gray-700 mx-2"></div>
        </div>
        <h1 className="text-2xl md:text-3xl">
          Effortless <span className="text-red-800 underline">Elegance</span> in every piece
        </h1>
      </div>

      {/* Collections from API */}
      <div className="max-w-[1140px] mx-auto space-y-4">
        {loading ? (
          <p className="text-center">Memuat koleksi...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {collections.map((item, index) => (
              <Card
                key={item.id}
                title={item.name}
                slug={item.slug}
                img={`https://res.cloudinary.com/dpswqafiq/image/upload/v1752243359/sample.jpg`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ title, slug, img }) {
  const navigate = useNavigate();

  return (
    <div className="w-full md:w-[260px] h-[240px] md:h-[320px] rounded-[20px] overflow-hidden shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 relative">
      <img src={img} alt={title} className="w-full h-full object-cover" />
      <button
        onClick={() => navigate(`/product/${slug}`)}
        className="absolute bottom-4 left-4 right-4 bg-white/30 hover:bg-white/80 duration-500 backdrop-blur-sm rounded-full px-4 py-2 flex items-center justify-between"
      >
        <span className="text-xs md:text-sm font-medium text-gray-800 truncate">{title}</span>
        <ArrowRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}