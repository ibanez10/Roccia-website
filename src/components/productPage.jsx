import React from "react";
import productsData from "../components/productData"; 
import Card from "../components/Card"; 

export default function ProductPage() {
  // Gabungkan semua produk dari berbagai kategori menjadi satu array
  const allProducts = productsData.flatMap((collection) => collection.items);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {allProducts.map((product) => (
          <Card
            key={product.slug}
            title={product.title}
            img={product.image}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
}
