import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import SellerLogin from "./pages/SellerLogin/SellerLogin";
import SellerRegister from "./pages/SellerRegister/SellerRegister";
import Producto from "./pages/Producto/Producto";
import Dashboard from "./vendedor/Dashboard"; // Importar el Dashboard del vendedor
import "./App.css";
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller-login" element={<SellerLogin />} />
          <Route path="/seller-register" element={<SellerRegister />} />
          <Route path="/producto/:id" element={<Producto />} />
          <Route path="/vendedor/dashboard" element={<Dashboard />} /> {/* Ruta del dashboard */}
          <Route path="/quienes" element={<QuienesSomos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;