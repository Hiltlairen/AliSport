import React, { useState, useEffect } from 'react';

const MetricasVentas = () => {
  const [metricas, setMetricas] = useState({});
  const [error, setError] = useState('');

  // Obtener el id_tienda del vendedor desde localStorage
  const id_tienda = localStorage.getItem('id_tienda');

  // Función para cargar las métricas de ventas
  const cargarMetricas = async () => {
    try {
      const response = await fetch('http://localhost/obtener-metricas-ventas.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_tienda }),
      });

      const data = await response.json();

      if (data.success) {
        setMetricas(data.metricas);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cargar las métricas de ventas');
    }
  };

  // Cargar las métricas al montar el componente
  useEffect(() => {
    cargarMetricas();
  }, []);

  return (
    <div>
      <h2>Métricas de Ventas</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="metricas-container">
        <div className="metrica">
          <h3>Total de Ventas</h3>
          <p>${metricas.totalVentas || 0}</p>
        </div>
        <div className="metrica">
          <h3>Ventas por Producto</h3>
          <ul>
            {metricas.ventasPorProducto?.map((producto) => (
              <li key={producto.id_producto}>
                {producto.nombre_producto}: ${producto.total} (Cantidad: {producto.cantidad})
              </li>
            ))}
          </ul>
        </div>
        <div className="metrica">
          <h3>Ventas por Categoría</h3>
          <ul>
            {metricas.ventasPorCategoria?.map((categoria) => (
              <li key={categoria.categoria}>
                {categoria.categoria}: ${categoria.total}
              </li>
            ))}
          </ul>
        </div>
        <div className="metrica">
          <h3>Pedidos Pendientes</h3>
          <p>{metricas.pedidosPendientes || 0}</p>
        </div>
        <div className="metrica">
          <h3>Pedidos Cancelados</h3>
          <p>{metricas.pedidosCancelados || 0}</p>
        </div>
        <div className="metrica">
          <h3>Diseños Aceptados</h3>
          <p>{metricas.disenosAceptados || 0}</p>
        </div>
        <div className="metrica">
          <h3>Diseños Rechazados</h3>
          <p>{metricas.disenosRechazados || 0}</p>
        </div>
        <div className="metrica">
          <h3>Ingresos por Cotizaciones</h3>
          <p>${metricas.ingresosCotizaciones || 0}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricasVentas;