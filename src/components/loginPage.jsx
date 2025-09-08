import React, { useState } from "react";
import Logo from "/Roccia white.png";
import { useNavigate } from "react-router-dom";
import { requestOtp } from "../api/userApi"; 
import { useAuth } from "../api/authContext"; 

function LoginPage() {
  const navigate = useNavigate();
  const { setEmail } = useAuth();
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      console.log('Mengirim requestOtp untuk email:', emailInput);
      await requestOtp(emailInput);
      setEmail(emailInput);
      console.log('Email disimpan ke context:', emailInput);
      navigate("/verificationPage", { replace: true });
    } catch (err) {
      setError(err.message || "Gagal mengirim OTP. Coba lagi.");
      console.error('Error in handleSubmit:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen font-sans">
      <div
        className="w-1/2 bg-cover bg-center relative hidden lg:block"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dm8cekwjg/image/upload/v1753773855/Rectangle_94_n3lmju.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-16 text-white">
          <div className="w-44">
            <img src={Logo} alt="" className="" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
          <p className="text-lg">
            Start your journey with Roccia — <br /> where concrete meets
            elegance.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your email and we'll send you a verification code
          </p>
          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="border border-red-800 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`bg-red-800 text-white py-2 rounded-full hover:bg-red-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;