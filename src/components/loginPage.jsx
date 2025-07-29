import React from "react";
import Logo from "/Roccia white.png";
import { useNavigate } from "react-router-dom";

function loginPage() {
    const navigate = useNavigate();

    const navigateToVerification = (e) => {
        navigate('/verificationPage');
    }

  return (
    <div className="flex h-screen font-sans">
      {/* Left Panel */}
      <div
        className="w-1/2 bg-cover bg-center relative hidden lg:block"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dm8cekwjg/image/upload/v1753773855/Rectangle_94_n3lmju.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-16 text-white">
          <div className="w-44">
            <img src={Logo} alt="" className=""/>
          </div>
          <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
          <p className="text-lg">
            Start your journey with Roccia — <br /> where concrete meets
            elegance.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h2 className="text-2xl font-semibold text-center mb-2">Sign Up</h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Enter your email and we'll send you a verification code
          </p>
          <form onSubmit={navigateToVerification} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="border border-red-800 px-4 py-2 rounded-full outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            <button
              type="submit"
              className="bg-red-800 text-white py-2 rounded-full hover:bg-red-700 transition"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
