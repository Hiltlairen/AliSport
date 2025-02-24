import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/assets/logo.png" alt="Logo de la tienda" />
        </Link>
      </div>
      <nav className="nav">
        <button className="nav-button">Categorías</button>
        <button className="nav-button">Servicio</button>
        <Link to="/carrito" className="cart-icon">
          🛒
        </Link>
      </nav>
    </header>
  );
}

export default Header;