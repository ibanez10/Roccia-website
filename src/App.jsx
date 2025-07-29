import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/colectionPage";
import ProductDetail from "./components/productDetail";
import ProductPage from "./components/productPage";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";
import CloudinaryPage from "./Cloudinary";
import LoginPage from "./components/loginPage";
import VerificationPage from "./components/verificationPage";
import Contact from "./components/Contact";
import CheckoutPage from "./components/checkoutPage";
import ProductDescription from "./components/productDescription";
import Catalogue from "./components/catalogue";

function AppContent() {
  const location = useLocation();

  // Tentukan halaman yang tidak ingin menampilkan navbar/footer
  const hideNavbarFooterLogin = location.pathname === "/loginPage";
  const hideNavbarFooterVerification = location.pathname === "/verificationPage";

  return (
    <div className="flex flex-col min-h-screen">
      {(!hideNavbarFooterLogin && !hideNavbarFooterVerification) && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/productDescription" element={<ProductDescription />} />
          <Route path="/productPage" element={<ProductPage />} />
          <Route path="/cloudinary" element={<CloudinaryPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/verificationPage" element={<VerificationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </main>
      {(!hideNavbarFooterLogin && !hideNavbarFooterVerification) && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
}
