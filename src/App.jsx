import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/colectionPage";
import ProductDetail from "./components/productDetail";
import ProductPage from "./components/productPage";
import OurStory from "./components/ourStory";
import Footer from "./components/Footer";
import  ImageUploadForm from "./components/ImageUploadForm";
import CloudinaryPage from "./Cloudinary";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/ourStory" element={<OurStory/>} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="/productPage" element={<ProductPage />} />
            <Route path="/cloudinary" element={<CloudinaryPage/>} />
            <Route path="/upload" element={<ImageUploadForm/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}