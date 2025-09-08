import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import { AuthProvider } from "./api/authContext"; 
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
import Profile from "./components/profile";
import ProtectedRoute from "./components/protectedRoute";

function AppContent() {
  const location = useLocation();

  // Tentukan halaman yang tidak ingin menampilkan navbar/footer
  const hideNavbarFooterLogin = location.pathname === "/loginPage";
  const hideNavbarFooterVerification = location.pathname === "/verificationPage";
  const hideFooterProfile = location.pathname === "/profile";

  return (
    <div className="flex flex-col min-h-screen">
      {(!hideNavbarFooterLogin && !hideNavbarFooterVerification) && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/collection/:collectionId/products" element={<ProductDetail />} />
          <Route path="/product/:productId" element={<ProductDescription />} />
          <Route path="/productPage" element={<ProductPage />} />   
          <Route path="/cloudinary" element={<CloudinaryPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/verificationPage" element={<VerificationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkoutPage" element={<CheckoutPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>
      {(!hideNavbarFooterLogin && !hideNavbarFooterVerification && !hideFooterProfile) && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AuthProvider> 
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </CartProvider>
  );
}
