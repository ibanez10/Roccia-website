// src/api/ordersApi.js
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL

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
export const getUserOrders = async (token, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/users/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
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
