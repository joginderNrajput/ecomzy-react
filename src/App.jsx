import "./App.css";
// import Navbar from "./components/Navbar";
import Navbar from "./compnents/Navbar"
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-900">
        <Navbar />
      </div>
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
