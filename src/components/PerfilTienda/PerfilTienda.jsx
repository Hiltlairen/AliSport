import React, { useState } from 'react';
import './PerfilTienda.css';
import Sidebar from '../Sidebar/Sidebar';
const PerfilTienda = () => {
  const [tienda, setTienda] = useState({
    nombre: 'Tienda Deportiva',
    descripcion: 'Especialistas en ropa deportiva de alta calidad.',
    logo: '/images/logo-tienda.png',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTienda({ ...tienda, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos actualizados:', tienda);
  };

  return (
    
    <div className="perfil-tienda">
      <Sidebar /> {/* Llamar al Sidebar */}
      <h1>Perfil de Tienda</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de la Tienda</label>
          <input
            type="text"
            name="nombre"
            value={tienda.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <textarea
            name="descripcion"
            value={tienda.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Logo</label>
          <input
            type="text"
            name="logo"
            value={tienda.logo}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
      
    </div>

  );
};

export default PerfilTienda;