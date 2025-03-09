import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Importar el Sidebar
import './Cotizaciones.css';

const Cotizaciones = () => {
  const cotizaciones = [
    { id: 1, cliente: 'Cliente A', producto: 'Polera Negra', fecha: '2023-10-01' },
    { id: 2, cliente: 'Cliente B', producto: 'Chamarra Azul', fecha: '2023-10-02' },
  ];

  return (
    <div className="dashboard">
      <Sidebar /> {/* Llamar al Sidebar */}
      <div className="cotizaciones">
        <h1>Cotizaciones</h1>
        <div className="lista-cotizaciones">
          {cotizaciones.map((cotizacion) => (
            <div key={cotizacion.id} className="cotizacion">
              <h3>{cotizacion.producto}</h3>
              <p><strong>Cliente:</strong> {cotizacion.cliente}</p>
              <p><strong>Fecha:</strong> {cotizacion.fecha}</p>
              <button>Responder</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cotizaciones;