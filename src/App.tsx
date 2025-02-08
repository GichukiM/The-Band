import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <div className="h-8"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1 className="text-center mt-10">Products Page</h1>} />
        <Route path="/about" element={<h1 className="text-center mt-10">About Us</h1>} />
        <Route path="/contact" element={<h1 className="text-center mt-10">Contact</h1>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
