import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Hero />} />
      </Routes>
    </Router>
  );
}
