import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../../data/ropa';
import './Producto.css';

function Producto() {
  const { id } = useParams(); // Obtener el ID del producto de la URL
  const producto = productos.find((p) => p.id === parseInt(id)); // Buscar el producto por ID

  if (!producto) {
    return <div>Producto no encontrado</div>; // Manejar caso de producto no encontrado
  }

  return (
    <div className="producto-detalle">
      {/* Lado izquierdo: Imágenes del producto */}
      <div className="imagenes-producto">
        {producto.imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Producto ${index + 1}`} />
        ))}
      </div>

      {/* Lado derecho: Nombre, descripción, precio y opciones */}
      <div className="info-producto">
        <h1>{producto.name}</h1>
        <p className="precio">{producto.price}</p>
        <p className="descripcion">{producto.descripcion}</p>
        <div className="opciones-compra">
          <input type="number" min="1" defaultValue="1" /> {/* Cantidad */}
          <button>Añadir al carrito</button>
          <button>Comprar ahora</button>
        </div>
      </div>

      {/* Parte inferior: Descripción de la tienda */}
      <div className="tienda-info">
        <h2>{producto.tienda.nombre}</h2>
        <p>{producto.tienda.descripcion}</p>
      </div>
    </div>
  );
}

export default Producto;