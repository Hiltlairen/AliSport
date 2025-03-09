import React, { useState } from 'react';
import './Promociones.css';

const Promociones = () => {
  const [promociones, setPromociones] = useState([
    { id: 1, nombre: 'Descuento del 10%', descripcion: 'En todas las chaquetas' },
    { id: 2, nombre: '2x1 en Camisetas', descripcion: 'Solo este fin de semana' },
  ]);

  const eliminarPromocion = (id) => {
    setPromociones(promociones.filter((promocion) => promocion.id !== id));
  };

  return (
    <div className="promociones">
      <h1>Promociones</h1>
      <button className="btn-agregar">Crear Promoción</button>
      <div className="lista-promociones">
        {promociones.map((promocion) => (
          <div key={promocion.id} className="promocion">
            <h3>{promocion.nombre}</h3>
            <p>{promocion.descripcion}</p>
            <button onClick={() => eliminarPromocion(promocion.id)}>Eliminar</button>
            <button>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promociones;