import React from 'react';
import Pedidos from './operaciones/Pedidos';
import SolicitudesDiseno from './operaciones/SolicitudesDiseno';
import Cotizaciones from './operaciones/Cotizaciones';
import MetricasVentas from './operaciones/MetricasVentas';
import Producto from './operaciones/Producto'
const Content = ({ selectedOption }) => {
    return (
      <div className="content">
        {selectedOption === 1 && <Pedidos />}
        {selectedOption === 2 && <SolicitudesDiseno />}
        {selectedOption === 3 && <Cotizaciones />}
        {selectedOption === 4 && <MetricasVentas />}
        {selectedOption === 5 && <Producto />}
        {!selectedOption && <p>Selecciona una opción para ver su contenido.</p>}
      </div>
    );
  };
  
  export default Content;
  
  // Estilos CSS
  const styles = `
    .content {
      margin-left: 20%; /* Deja espacio para la cinta de opciones */
      width: 80%; /* Ocupa el 80% del ancho */
      padding-left: 5%;
      box-sizing: border-box; /* Incluye el padding en el ancho */
    }
  
    .content h2 {
      color: #333;
    }
  
    .content p {
      color: #666;
    }
  
    .content ul {
      list-style-type: disc;
      margin-left: 20px;
    }
  `;
  
  // Añadir estilos al documento
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);