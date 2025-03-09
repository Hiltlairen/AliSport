import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import ProductCard from '../../components/ProductCard/ProductCard';
import { productos } from '../../data/ropa';
import './Inicio.css';

function Inicio() {
  return (
    <div className="inicio">
      <Carousel />
      <div className="product-grid">
        {productos.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        
      </div>
    </div>
  );
}

export default Inicio;