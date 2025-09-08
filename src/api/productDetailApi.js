import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL

export async function fetchProductsByCollection(collectionId, filters = {}) {
  try {
    const params = new URLSearchParams();

    // Tambahkan filter jika tersedia
    if (filters.price_min) params.append("price_min", filters.price_min);
    if (filters.price_max) params.append("price_max", filters.price_max);
    if (filters.type) params.append("type", filters.type);
    if (filters.color) params.append("color", filters.color);

    const response = await axios.get(
      `${BASE_URL}/api/collections/${collectionId}/products?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    throw new Error("Gagal fetch data produk koleksi");
  }
}
