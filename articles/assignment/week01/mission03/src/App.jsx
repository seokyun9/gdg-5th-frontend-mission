import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin"

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Cart />} /> 
            <Route path="/admin" element={<Admin />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;