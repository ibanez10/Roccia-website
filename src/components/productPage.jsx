import { useParams } from "react-router-dom";
import products from "./dataProduct"; // pastikan path sesuai

export default function ProductPage() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div className="p-4 text-red-600">Produk tidak ditemukan</div>;
  }

  return (
    <section className="w-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
        <img
          src={product.img}
          alt={product.title}
          className="w-full max-w-md rounded-lg shadow"
        />
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </section>
  );
}
