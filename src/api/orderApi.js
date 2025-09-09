import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL;

// ===== GET ALL ORDERS =====
export const getOrders = async (params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/orders`, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// ===== GET USER ORDERS =====
export const getUserOrders = async (token, userId) => {
  try {
    const url = `${BASE_URL}/api/users/orders/${userId}`;
    console.log("Fetching orders from:", url);

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // pastikan selalu return array
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    }

    if (response.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }

    return [];
  } catch (error) {
    console.error("Error fetching user orders:", error.response?.data || error);
    return []; // fallback agar frontend tidak error
  }
};

// ===== GET ORDER DETAILS =====
export const getOrderDetails = async (orderId) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/orders/${orderId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};

// ===== CREATE NEW ORDER =====
export const createOrder = async (token, orderPayload) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/orders/create`,
      orderPayload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error.response?.data || error);
    throw error;
  }
};
