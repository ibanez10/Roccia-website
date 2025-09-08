import React, { useState, useRef, useEffect } from "react";
import Logo from "/Roccia white.png";
import { useNavigate } from "react-router-dom";
import { requestOtp, verifyOtp } from "../api/userApi"; // Sesuaikan path
import { useAuth } from "../api/authContext"; // Sesuaikan path

function VerificationPage() {
  const navigate = useNavigate();
  const { email, login } = useAuth();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 menit

  // Log email untuk debugging
  useEffect(() => {
    console.log('Email from useAuth:', email);
    if (!email) {
      setError("Email tidak tersedia. Kembali ke halaman login.");
      navigate("/loginPage", { replace: true });
    }
  }, [email, navigate]);

  // Validasi state otp
  useEffect(() => {
    if (!Array.isArray(otp) || otp.length !== 6) {
      console.error('Invalid otp state:', otp);
      setOtp(new Array(6).fill(""));
    }
  }, [otp]);

  // Timer countdown
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = value ? value.slice(-1) : "";
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1].focus();
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = Array.isArray(otp) ? otp.join("") : "";
    console.log('OTP array:', otp);
    console.log('OTP code:', otpCode);
    console.log('Type of otpCode:', typeof otpCode);
    console.log('Mengirim ke verifyOtp:', { email, otp: otpCode });
    setError("");
    setLoading(true);

    if (!email) {
      setError("Email tidak tersedia. Kembali ke halaman login.");
      setLoading(false);
      navigate("/loginPage", { replace: true });
      return;
    }

    if (otpCode.length !== 6 || typeof otpCode !== 'string') {
      setError("Masukkan kode OTP 6 digit yang valid!");
      setLoading(false);
      return;
    }

    try {
      const response = await verifyOtp({ email, otp: otpCode });
      console.log('Verify OTP response:', response);
      login(email); // Set status login
      console.log('Login called with email:', email);
      // Tunggu hingga state diperbarui
      setTimeout(() => {
        console.log('Navigating to /profilePage');
        navigate("/profile", { replace: true });
      }, 100); // Penundaan 100ms untuk memastikan state diperbarui
    } catch (err) {
      setError(err.message || "OTP tidak valid. Coba lagi.");
      console.error('Error in handleSubmit:', err);
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setLoading(true);
    try {
      console.log('Mengirim requestOtp untuk email:', email);
      if (!email) {
        throw new Error("Email tidak tersedia. Kembali ke halaman login.");
      }
      await requestOtp(email);
      setTimeLeft(300); // Reset timer
      setOtp(new Array(6).fill("")); // Reset OTP
      inputRefs.current[0].focus();
      alert("Kode OTP baru sudah dikirim!");
    } catch (err) {
      setError(err.message || "Gagal mengirim OTP ulang. Coba lagi.");
      console.error('Error in handleResend:', err);
    } finally {
      setLoading(false);
    }
  };

  // Format menit:detik
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (!email) {
    return (
      <div className="flex h-screen font-sans">
        <div className="w-full flex items-center justify-center">
          <p className="text-red-600">
            Error: Email tidak tersedia. Silakan kembali ke halaman login.
          </p>
        </div>
      </div>
    );
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
            <img src={Logo} alt="" className="" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Verify Your Account</h1>
          <p className="text-lg">
            Enter the 6-digit code we’ve sent to your email.
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full px-8">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Verification Code
          </h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Please enter the 6-digit code sent to your email
          </p>
          {error && (
            <p className="text-red-600 text-sm text-center mb-4">{error}</p>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex justify-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center border border-red-800 rounded-lg text-xl focus:ring-2 focus:ring-red-500 outline-none"
                  disabled={loading}
                />
              ))}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`bg-red-800 text-white py-2 rounded-full hover:bg-red-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Verifying..." : "Verify"}
            </button>
          </form>

          {/* Resend Section */}
          <div className="text-center mt-4">
            {timeLeft > 0 ? (
              <p className="text-gray-600 text-sm">
                Resend code in <span className="font-semibold">{formatTime(timeLeft)}</span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={loading}
                className={`text-red-800 font-semibold hover:underline ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Resend Code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationPage;