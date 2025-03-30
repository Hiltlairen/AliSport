import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SellerRegister.css';

function SellerRegister() {
  const [nombre_completo, setNombreCompleto] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [numero_telefono, setNumeroTelefono] = useState('');
  const [nombre_tienda, setNombreTienda] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tipos_servicios, setTiposServicios] = useState('');
  const [link_ubicacion, setLinkUbicacion] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contraseña.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    try {
      const response = await fetch('http://localhost/seller-register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre_completo,
          correo,
          contraseña,
          numero_telefono,
          nombre_tienda,
          descripcion,
          tipos_servicios,
          link_ubicacion
        }),
      });

      const text = await response.text();
      console.log("Respuesta del servidor:", text);
      const data = JSON.parse(text);

      if (data.success) {
        navigate('/vendedor/dashboard');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al conectar con el servidor');
    }
  };

  return (
    <div className="seller-register-page">
      <div className="seller-register-container">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo de AliSport" className="seller-register-logo" />
          <h1 id='inicio'>Registro (Vendedor)</h1>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form className="seller-register-form" onSubmit={handleSubmit}>
          <h2>Datos del Vendedor</h2>
          <input type="text" placeholder="Nombre completo" value={nombre_completo} onChange={(e) => setNombreCompleto(e.target.value)} required />
          <input type="email" placeholder="Correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          <input type="password" placeholder="Contraseña (mínimo 8 caracteres)" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required />
          <input type="tel" placeholder="Número de teléfono" value={numero_telefono} onChange={(e) => setNumeroTelefono(e.target.value)} required />

          <h2>Datos de la Tienda</h2>
          <input type="text" placeholder="Nombre de la tienda" value={nombre_tienda} onChange={(e) => setNombreTienda(e.target.value)} required />
          <textarea placeholder="Descripción de la tienda" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          <select value={tipos_servicios} onChange={(e) => setTiposServicios(e.target.value)} required>
            <option value="">Selecciona un servicio</option>
            <option value="poleras">Poleras</option>
            <option value="gorras">Gorras</option>
            <option value="zapatillas">Zapatillas</option>
            <option value="otros">Otros</option>
          </select>
          <input type="text" placeholder="Link de ubicación" value={link_ubicacion} onChange={(e) => setLinkUbicacion(e.target.value)} required />

          <button type="submit" className="submit-btn">Registrarse</button>
        </form>
        <div className="seller-register-links">
          <Link to="/seller-login">¿Ya tienes cuenta? Inicia sesión</Link>
        </div>
      </div>
    </div>
  );
}

export default SellerRegister;
