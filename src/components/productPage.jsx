import React from "react";
import { useEffect, useState } from "react";
import { fetchProducts} from "../api/productApi" ;
import Card from "../components/Card"; 

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => { 
      setLoading(true);
      try {
        const res = await fetchProducts();
        console.log('response dari fetchProduct', res)
        setProducts(res.data || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([])
      } finally {
        setLoading(false);
      }
    }; loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.name}
            img={product.image_url}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
