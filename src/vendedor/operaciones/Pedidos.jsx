import React, { useState, useEffect } from 'react';

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [error, setError] = useState('');

  // Obtener el id_tienda del vendedor desde localStorage
  const id_tienda = localStorage.getItem('id_tienda');

  // Función para cargar los pedidos de la tienda
  const cargarPedidos = async () => {
    try {
      const response = await fetch('http://localhost/obtener-pedidos.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_tienda }),
      });

      const data = await response.json();

      if (data.success) {
        setPedidos(data.pedidos);
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cargar los pedidos');
    }
  };

  // Función para cambiar el estado de un pedido
  const cambiarEstadoPedido = async (id_pedido, nuevoEstado) => {
    try {
      const response = await fetch('http://localhost/cambiar-estado-pedido.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_pedido, nuevoEstado }),
      });

      const data = await response.json();

      if (data.success) {
        // Recargar los pedidos después de cambiar el estado
        cargarPedidos();
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al cambiar el estado del pedido');
    }
  };

  // Cargar los pedidos al montar el componente
  useEffect(() => {
    cargarPedidos();
  }, []);

  return (
    <div>
      <h2>Gestión de Pedidos</h2>
      {error && <p className="error-message">{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID Pedido</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id_pedido}>
              <td>{pedido.id_pedido}</td>
              <td>{pedido.id_producto}</td>
              <td>${pedido.precio}</td>
              <td>{pedido.cantidad}</td>
              <td>{pedido.estado}</td>
              <td>
                <select
                  value={pedido.estado}
                  onChange={(e) => cambiarEstadoPedido(pedido.id_pedido, e.target.value)}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="aceptado">Aceptado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pedidos;