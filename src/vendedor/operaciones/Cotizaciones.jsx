import React, { useState, useEffect } from 'react';

const Cotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [error, setError] = useState('');
  const [precioEstimado, setPrecioEstimado] = useState('');
  const [tiempoEstimado, setTiempoEstimado] = useState('');

  // Función para cargar las cotizaciones pendientes
  const cargarCotizaciones = async () => {
    try {
      const response = await fetch('http://localhost/obtener-cotizaciones.php');
      const data = await response.json();

      if (data.success) {
        setCotizaciones(data.cotizaciones);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cargar las cotizaciones');
    }
  };

  // Función para generar una cotización
  const generarCotizacion = async (id_cotizacion) => {
    if (!precioEstimado || !tiempoEstimado) {
      setError('Por favor, ingresa el precio y el tiempo estimado');
      return;
    }

    try {
      const response = await fetch('http://localhost/generar-cotizacion.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_cotizacion,
          precio_estimado: precioEstimado,
          tiempo_estimado: tiempoEstimado,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Recargar las cotizaciones después de generar la cotización
        cargarCotizaciones();
        setPrecioEstimado('');
        setTiempoEstimado('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al generar la cotización');
    }
  };

  // Cargar las cotizaciones al montar el componente
  useEffect(() => {
    cargarCotizaciones();
  }, []);

  return (
    <div>
      <h2>Cotizaciones</h2>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID Cotización</th>
            <th>Usuario</th>
            <th>URL 3D</th>
            <th>Precio Estimado</th>
            <th>Tiempo Estimado</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion) => (
            <tr key={cotizacion.id_cotizacion}>
              <td>{cotizacion.id_cotizacion}</td>
              <td>{cotizacion.id_usuario}</td>
              <td>
                <a href={cotizacion.url_3d} target="_blank" rel="noopener noreferrer">
                  Ver diseño 3D
                </a>
              </td>
              <td>
                {cotizacion.estado === 'pendiente' ? (
                  <input
                    type="number"
                    placeholder="Precio"
                    value={precioEstimado}
                    onChange={(e) => setPrecioEstimado(e.target.value)}
                  />
                ) : (
                  `$${cotizacion.precio_estimado}`
                )}
              </td>
              <td>
                {cotizacion.estado === 'pendiente' ? (
                  <input
                    type="number"
                    placeholder="Tiempo (días)"
                    value={tiempoEstimado}
                    onChange={(e) => setTiempoEstimado(e.target.value)}
                  />
                ) : (
                  `${cotizacion.tiempo_estimado} días`
                )}
              </td>
              <td>{cotizacion.estado}</td>
              <td>
                {cotizacion.estado === 'pendiente' && (
                  <button onClick={() => generarCotizacion(cotizacion.id_cotizacion)}>
                    Generar Cotización
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cotizaciones;