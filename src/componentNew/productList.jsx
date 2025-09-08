import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceMin: 1000,
    priceMax: 5000,
    type: "Sofa",
    color: "Beige",
    page: 1,
    size: 4,
  });

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const res = await fetchProducts(filters);
        setProducts(res.data);
        setPagination(res.pagination);
      } catch (err) {
        console.error("Gagal fetch produk:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filters]);

  const nextPage = () => {
    setFilters((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const prevPage = () => {
    setFilters((prev) => ({ ...prev, page: Math.max(prev.page - 1, 1) }));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p dangerouslySetInnerHTML={{ __html: product.description }} />
                <img src={product.usage_image} alt={product.name} />
                <p>Harga: {product.price}</p>
              </li>
            ))}
          </ul>

          <div>
            <button onClick={prevPage} disabled={filters.page <= 1}>
              Prev
            </button>
            <span>Page {pagination.page} of {pagination.total_pages}</span>
            <button onClick={nextPage} disabled={pagination.page >= pagination.total_pages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
