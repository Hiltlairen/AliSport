import React, { useState, useEffect } from 'react';

const SolicitudesDiseno = () => {
  const [solicitudes, setSolicitudes] = useState([]);
  const [error, setError] = useState('');

  // Obtener el id_tienda del vendedor desde localStorage
  const id_tienda = localStorage.getItem('id_tienda');

  // Función para cargar las solicitudes de diseño de la tienda
  const cargarSolicitudes = async () => {
    try {
      const response = await fetch('http://localhost/obtener-solicitudes-diseno.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_tienda }),
      });

      const data = await response.json();

      if (data.success) {
        setSolicitudes(data.solicitudes);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cargar las solicitudes');
    }
  };

  // Función para cambiar el estado de una solicitud de diseño
  const cambiarEstadoSolicitud = async (id_diseno, nuevoEstado) => {
    try {
      const response = await fetch('http://localhost/cambiar-estado-solicitud.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_diseno, nuevoEstado }),
      });

      const data = await response.json();

      if (data.success) {
        // Recargar las solicitudes después de cambiar el estado
        cargarSolicitudes();
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cambiar el estado de la solicitud');
    }
  };

  // Cargar las solicitudes al montar el componente
  useEffect(() => {
    cargarSolicitudes();
  }, []);

  return (
    <div>
      <h2>Solicitudes de Diseño</h2>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID Solicitud</th>
            <th>Usuario</th>
            <th>URL 3D</th>
            <th>Cantidad Solicitada</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {solicitudes.map((solicitud) => (
            <tr key={solicitud.id_diseno}>
              <td>{solicitud.id_diseno}</td>
              <td>{solicitud.id_usuario}</td>
              <td>
                <a href={solicitud.url_3d} target="_blank" rel="noopener noreferrer">
                  Ver diseño 3D
                </a>
              </td>
              <td>{solicitud.cantidad_solicitada}</td>
              <td>{solicitud.estado}</td>
              <td>
                {solicitud.estado === 'pendiente' && (
                  <>
                    <button onClick={() => cambiarEstadoSolicitud(solicitud.id_diseno, 'aceptado')}>
                      Aceptar
                    </button>
                    <button onClick={() => cambiarEstadoSolicitud(solicitud.id_diseno, 'rechazado')}>
                      Rechazar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SolicitudesDiseno;