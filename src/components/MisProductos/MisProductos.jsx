import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar'; // Importar el Sidebar
import './MisProductos.css';

const MisProductos = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [imagen, setImagen] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [productos, setProductos] = useState([]);

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      nombre,
      precio,
      imagen,
      categoriaId,
    };

    try {
      const response = await fetch('https://lightskyblue-seal-447089.hostingersite.com/api/productos.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si el producto se agrega correctamente, actualizamos la lista de productos
        setProductos([...productos, formData]);
        // Limpiar el formulario
        setNombre('');
        setPrecio('');
        setImagen('');
        setCategoriaId('');
      } else {
        alert('Error al agregar producto');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar /> {/* Llamar al Sidebar */}
      <div className="mis-productos">
        <h1>Mis Productos</h1>

        {/* Formulario para agregar un producto */}
        <form onSubmit={handleSubmit} className="formulario-producto">
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Imagen URL:</label>
            <input
              type="text"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Categoría:</label>
            <select
              value={categoriaId}
              onChange={(e) => setCategoriaId(e.target.value)}
              required
            >
              <option value="">Selecciona una categoría</option>
              <option value="1">Poleras</option>
              <option value="2">Conjuntos</option>
              <option value="3">Uniformes</option>
            </select>
          </div>
          <button type="submit">Agregar Producto</button>
        </form>

        {/* Mostrar la lista de productos */}
        <div className="lista-productos">
          {productos.map((producto, index) => (
            <div key={index} className="producto">
              <h3>{producto.nombre}</h3>
              <p>{producto.precio}</p>
              <img src={producto.imagen} alt={producto.nombre} />
              <button>Editar</button>
              <button>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisProductos;
