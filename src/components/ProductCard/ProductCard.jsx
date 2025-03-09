import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Link to={`/producto/${product.id}`} className="product-card"> {/* Enlace a la página de detalle */}
      <div className="product-image">
        <img src={product.imagenes[0]} alt={product.name} /> {/* Mostrar la primera imagen */}
      </div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </Link>
  );
}

export default ProductCard;