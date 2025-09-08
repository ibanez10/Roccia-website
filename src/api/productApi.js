import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL

export const fetchProducts = async ({
  priceMin,
  priceMax,
  type,
  color,
  page = 1,
  size = 4,
} = {}) => {
  const params = {};

  if (priceMin !== undefined) params.price_min = priceMin;
  if (priceMax !== undefined) params.price_max = priceMax;
  if (type) params.type = type;
  if (color) params.color = color;
  params.page = page;
  params.size = size;

  try {
    const response = await axios.get(`${BASE_URL}/api/products`, {
      params,
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true' // Bypass Ngrok warning page
      }
    });
    console.log('Raw response.data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error.message, error.response?.data);
    throw error; // Biarkan caller tangani error
  }
};

