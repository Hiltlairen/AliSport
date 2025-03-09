import React from "react";
import { Routes, Route } from "react-router-dom";
import PanelControl from "../PanelControl/PanelControl"; // Ruta corregida
import MisProductos from "../MisProductos/MisProductos"; // Ruta corregida
import Cotizaciones from "../Cotizaciones/Cotizaciones"; // Ruta corregida
import Pedidos from "../Pedidos/Pedidos"; // Ruta corregida
import Promociones from "../Promociones/Promociones"; // Ruta corregida
import PerfilTienda from "../PerfilTienda/PerfilTienda"; // Ruta corregida
import Sidebar from "../Sidebar/Sidebar";

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <Routes>
        <Route path="/" element={<PanelControl />} />
        <Route path="/productos" element={<MisProductos />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/promociones" element={<Promociones />} />
        <Route path="/perfil" element={<PerfilTienda />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </div>
  );
};

export default DashboardContent;