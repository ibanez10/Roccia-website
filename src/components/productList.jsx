import productsByCategory from "../data/ProductList";
import Card from "../components/Card";

export default function ProductList() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        All Products
      </h1>

      {productsByCategory.map((section) => (
        <div key={section.category} className="mb-10">
          <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((product) => (
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
      ))}
    </div>
  );
}
