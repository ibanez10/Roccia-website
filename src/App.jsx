import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collection from "./components/colectionPage";
import ProductPage from "./components/productPage";
import OurStory from "./components/ourStory";
import Footer from "./components/Footer";

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
            {/* <Route path="/product/:slug" element={<ProductPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}