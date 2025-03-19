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

    try {
      const response = await fetch('http://localhost/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Guardar el usuario en el estado global o en localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        // Redirigir al usuario según su tipo
        if (data.user.tipo === 'cliente') {
          navigate('/dashboard-cliente');
        } else if (data.user.tipo === 'vendedor') {
          navigate('/dashboard-vendedor');
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Iniciar Sesión (Cliente)</h1>
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