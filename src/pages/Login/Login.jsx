import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Lógica de inicio de sesión
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo de AliSport" className="login-logo" />
          <h1 id='inicio'>Iniciar Sesión</h1>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">Iniciar Sesión</button>
        </form>
        <div className="login-links">
          <Link to="/register">¿No tienes cuenta? Regístrate</Link>
          <Link to="/seller-login">¿Eres vendedor? Inicia sesión aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;