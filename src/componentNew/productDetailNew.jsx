// src/pages/CollectionProductDetail.jsx

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export default function CollectionProductDetail() {
  const { collectionId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `/api/collections/${collectionId}/products`,
          {
            params: {
              price_min: 5000,
              price_max: 20000,
              type: "Sofa",
              color: "red",
            },
          }
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching collection products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [collectionId]);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-700">Memuat produk...</h1>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Produk tidak ditemukan</h1>
        <p className="text-gray-600">Maaf, produk dalam koleksi ini tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <div className="flex justify-center items-center mb-6">
        <div className="w-12 h-px bg-gray-700 mx-2"></div>
        <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 m-0">
          Koleksi Produk
        </h1>
        <div className="w-12 h-px bg-gray-700 mx-2"></div>
      </div>

      <p className="text-center text-lg text-gray-700 mb-4">
        Menampilkan semua produk dalam koleksi yang dipilih
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.name}
            img={product.usage_image}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}