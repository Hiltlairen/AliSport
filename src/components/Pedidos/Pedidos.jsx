import React from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Importar el Sidebar
import './Pedidos.css';

const Pedidos = () => {
  const pedidos = [
    { id: 1, cliente: 'Cliente A', producto: 'Polera Negra', estado: 'En proceso' },
    { id: 2, cliente: 'Cliente B', producto: 'Chamarra Azul', estado: 'Enviado' },
  ];

  return (
    <div className="dashboard">
      <Sidebar /> {/* Llamar al Sidebar */}
      <div className="pedidos">
        <h1>Pedidos</h1>
        <div className="lista-pedidos">
          {pedidos.map((pedido) => (
            <div key={pedido.id} className="pedido">
              <h3>{pedido.producto}</h3>
              <p><strong>Cliente:</strong> {pedido.cliente}</p>
              <p><strong>Estado:</strong> {pedido.estado}</p>
              <button>Actualizar Estado</button>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Pedidos; 