import React from 'react';
import { Link } from 'react-router-dom';
import './SellerRegister.css';

function SellerRegister() {
  return (
    <div className="seller-register-page">
      <h1>Registro (Vendedor)</h1>
      <form className="seller-register-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <input type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
      <div className="seller-register-links">
        <Link to="/seller-login">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
}

export default SellerRegister;