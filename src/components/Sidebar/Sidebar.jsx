import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><Link to="/vendedor/dashboard">Panel de Control</Link></li>
        <li><Link to="/productos">Mis Productos</Link></li>
        <li><Link to="/cotizaciones">Cotizaciones</Link></li>
        <li><Link to="/pedidos">Pedidos</Link></li>
        <li><Link to="/promociones">Promociones</Link></li>
        <li><Link to="/perfil">Perfil de Tienda</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;