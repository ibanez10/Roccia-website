import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext"; 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/colectionPage"; 
import ProductDetail from "./components/productDetail";
import ProductPage from "./components/ProductPage";
import OurStory from "./components/OurStory";
import Footer from "./components/Footer";
import CloudinaryPage from "./Cloudinary";
import Contact from "./components/Contact";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/ourStory" element={<OurStory />} />
              <Route path="/product/:slug" element={<ProductDetail />} />
              <Route path="/productPage" element={<ProductPage />} />
              <Route path="/cloudinary" element={<CloudinaryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
