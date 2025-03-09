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
import PanelControl from "./components/PanelControl/PanelControl";
import MisProductos from "./components/MisProductos/MisProductos";
import "./App.css";
import Cotizaciones from "./components/Cotizaciones/Cotizaciones";
import Promociones from "./components/Promociones/Promociones";
import PerfilTienda from "./components/PerfilTienda/PerfilTienda";

import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Pedidos from "./components/Pedidos/Pedidos";

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
          <Route path="/panel-control" element={<PanelControl />} />
          <Route path="/productos" element={<MisProductos />} />
          <Route path="/cotizaciones" element={<Cotizaciones />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/perfil" element={<PerfilTienda />} />
          <Route path="/quienes" element={<QuienesSomos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;