import axios from "axios";

const BASE_URL = import.meta.env.VITE_BE_BASE_URL;

export const requestOtp = async (email) => {
  if (!email || typeof email !== 'string') {
    console.error('Invalid email for requestOtp:', email);
    throw new Error('Invalid email format');
  }
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/request-otp`, { email }, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });
    console.log('Raw response.data (requestOtp):', response.data);
    return response.data;
  } catch (error) {
    console.error('Request OTP error:', error.message, error.response?.data);
    throw new Error(
      error.response?.data?.message || "Gagal mengirim OTP. Coba lagi."
    );
  }
};

export const verifyOtp = async (params) => {
  console.log('Received params in verifyOtp:', params);
  if (!params || Array.isArray(params) || typeof params !== 'object') {
    console.error('Invalid parameter type for verifyOtp:', params);
    throw new Error('Invalid parameter: Expected object with email and otp');
  }
  const { email, otp } = params;
  if (!email || typeof otp !== 'string') {
    console.error('Invalid parameters for verifyOtp:', { email, otp });
    throw new Error('Invalid email or OTP format');
  }
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/verify-otp`, { email, otp }, {
      headers: {
        'Accept': 'application/json',
        'ngrok-skip-browser-warning': 'true'
      }
    });
    console.log('Raw response.data (verifyOtp):', response.data);
    return response.data;
  } catch (error) {
    console.error('Verify OTP error:', error.message, error.response?.data);
    throw new Error(
      error.response?.data?.message || "OTP tidak valid. Coba lagi."
    );
  }
};