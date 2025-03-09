import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar la autenticación del usuario
    console.log('Iniciando sesión con', email, password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Iniciar Sesión (Cliente)</h1>
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
