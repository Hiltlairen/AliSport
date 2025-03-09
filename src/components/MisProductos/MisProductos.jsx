import React, { useState } from 'react';
import './MisProductos.css';

const MisProductos = () => {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Polera Negra', precio: '$20' },
    { id: 2, nombre: 'Chamarra Azul', precio: '$50' },
  ]);

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div className="mis-productos">
      <h1>Mis Productos</h1>
      <button className="btn-agregar">Agregar Producto</button>
      <div className="lista-productos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <h3>{producto.nombre}</h3>
            <p>{producto.precio}</p>
            <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
            <button>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MisProductos;