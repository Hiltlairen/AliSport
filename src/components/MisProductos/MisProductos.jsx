import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Importar el Sidebar
import './MisProductos.css';

const MisProductos = () => {
  const productos = [
    { id: 1, nombre: 'Polera Negra', precio: '$20' },
    { id: 2, nombre: 'Chamarra Azul', precio: '$50' },
  ];

  return (
    <div className="dashboard">
      <Sidebar /> {/* Llamar al Sidebar */}
      <div className="mis-productos">
        <h1>Mis Productos</h1>
        <div className="lista-productos">
          {productos.map((producto) => (
            <div key={producto.id} className="producto">
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisProductos;