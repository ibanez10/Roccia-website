import { useParams } from "react-router-dom";
import productData from "../components/productData";
import Card from "../components/Card";

export default function ProductDetail() {
  const { slug } = useParams();

  const allProducts = productData.flatMap((section) => section.items);
  const product = allProducts.find((item) => item.slug === slug);

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
        <h1 className="md:text-5xl text-3xl font-semibold text-gray-700 m-0">
          {product.title}
        </h1>
        <div className="w-12 h-px bg-gray-700 mx-2"></div>
      </div>

      <p className="text-center text-lg text-gray-700 mb-4">
        {product.description}
      </p>

      <Card
        title={product.title}
        img={product.image}
        price={product.price}
        slug={product.slug}
      />
    </div>
  );
}
