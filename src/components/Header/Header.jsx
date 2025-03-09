import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Logo de la tienda" />
        </Link>
      </div>
      <nav className="nav">
        <button className="nav-button">Categorías</button>
        <Link to="/quienes" className="nav-button">
          Servicios
        </Link>
        <Link to="/carrito" className="cart-icon">
          🛒
        </Link>
        {/* Botón de Inicio de Sesión */}
        <Link to="/login" className="login-button">
          Iniciar Sesión
        </Link>
      </nav>
    </header>
  );
}

export default Header;