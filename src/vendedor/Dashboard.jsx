import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cintaopt from './cintaopt';
import Contenido from './Contenido';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // Verificar si el vendedor está autenticado
  useEffect(() => {
    const id_vendedor = localStorage.getItem('id_vendedor');
    if (!id_vendedor) {
      navigate('/seller-login'); // Redirigir al login si no está autenticado
    }
  }, [navigate]);

  // Obtener los datos del vendedor desde localStorage
  const nombre_vendedor = localStorage.getItem('nombre_vendedor');
  const correo = localStorage.getItem('correo');

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('id_vendedor');
    localStorage.removeItem('nombre_vendedor');
    localStorage.removeItem('correo');
    navigate('/seller-login');
  };

  return (
    <div>
      <h1 id='inic'>Dashboard de Opciones</h1>
      <div className="dashboard-header">
        <p>Bienvenido, {nombre_vendedor}!</p>
        <p>Correo: {correo}</p>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
      <div className="dashboard-container">
        <Cintaopt onSelectOption={setSelectedOption} />
        <Contenido selectedOption={selectedOption} />
      </div>
    </div>
  );
};

export default Dashboard;

// Estilos CSS
const styles = `
  .dashboard-container {
    display: flex;
  }
  #inic {
    padding-left: 40%;
  }
  .dashboard-header {
    padding: 10px;
    background-color: #f0f0f0;
    border-bottom: 1px solid #ccc;
    text-align: right;
  }
  .dashboard-header button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  .dashboard-header button:hover {
    background-color: #ff1a1a;
  }
`;

// Añadir estilos al documento
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);