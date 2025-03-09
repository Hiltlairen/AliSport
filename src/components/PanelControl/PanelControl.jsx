import React from 'react';
import './PanelControl.css';

const PanelControl = () => {
  return (
    <div className="panel-control">
      <h1>Panel de Control</h1>
      <div className="resumen">
        <div className="tarjeta">
          <h2>Ventas Totales</h2>
          <p>$5,000</p>
        </div>
        <div className="tarjeta">
          <h2>Pedidos Pendientes</h2>
          <p>12</p>
        </div>
        <div className="tarjeta">
          <h2>Cotizaciones Respondidas</h2>
          <p>8</p>
        </div>
      </div>
    </div>
  );
};

export default PanelControl;