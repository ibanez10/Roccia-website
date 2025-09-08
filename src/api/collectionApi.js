import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL;

export const fetchCollections = async (page = 1, size = 10) => {
  if (!BASE_URL) console.log('BASE_URL is undefined');
  const params = { page, size };
  try {
    const response = await axios.get(`${BASE_URL}/api/collections`, {
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