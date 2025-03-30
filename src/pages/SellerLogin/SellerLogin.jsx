import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellerLogin.css';

function SellerLogin() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost/seller-login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ correo, contraseña }),
      });

      const data = await response.json();

      if (data.success) {
        // Guardar las credenciales en localStorage
        localStorage.setItem('id_vendedor', data.id_vendedor);
        localStorage.setItem('nombre_vendedor', data.nombre_vendedor);
        localStorage.setItem('correo', data.correo);

        // Redirigir al dashboard
        navigate('/vendedor/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="seller-login-page">
      <div className="seller-login-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo de AliSport" className="seller-login-logo" />
          <h1 id='inicio'>Iniciar Sesión (Vendedor)</h1>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form className="seller-login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Iniciar Sesión</button>
        </form>
        <div className="seller-login-links">
          <Link to="/seller-register">¿No tienes cuenta? Regístrate</Link>
        </div>
      </div>
    </div>
  );
}

export default SellerLogin;