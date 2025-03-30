import React from 'react';

const Cintaopt = ({ onSelectOption }) => {
  return (
    <div className="option-tape">
      <button onClick={() => onSelectOption(1)}>Pedidos</button>
      <button onClick={() => onSelectOption(2)}>Solicitud de diseños</button>
      <button onClick={() => onSelectOption(3)}>Cotizaciones</button>
      <button onClick={() => onSelectOption(4)}>Ventas</button>
      <button onClick={() => onSelectOption(5)}>Publicar</button>
    </div>
  );
};

export default Cintaopt;

// Estilos CSS
const styles = `
  .option-tape {
    width: 20%; /* Ocupa el 20% del ancho */
    height: 100vh; /* Altura completa de la ventana */
    padding: 20px;
    padding-top: 80px;
    background-color: #f4f4f4;
    border-right: 2px solid #ccc;
    position: fixed; /* Fija la cinta en el lado izquierdo */
    left: 0;
    top: 0;
    overflow-y: auto; /* Permite desplazamiento si hay muchos botones */
  }

  .option-tape button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    margin-bottom: 10px; /* Espacio entre botones */
  }

  .option-tape button:hover {
    background-color: #0056b3;
  }
`;

// Añadir estilos al documento
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);