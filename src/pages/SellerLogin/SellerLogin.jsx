import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellerLogin.css';

function SellerLogin() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aquí iría la lógica para autenticar al vendedor en el backend
    console.log('Iniciando sesión:', { correo, contraseña });
    // Redirigir al panel del vendedor después del login
    navigate('/vendedor/dashboard');
  };

  return (
    <div className="seller-login">
      <h1>Iniciar Sesión (Vendedor)</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <Link to="/seller-register">¿No tienes cuenta? Regístrate</Link>
    </div>
  );
}

export default SellerLogin;