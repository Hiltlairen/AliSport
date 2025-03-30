import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AgregarProducto = () => {
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre_producto: '',
    precio: '',
    imagen_url: '',
    categoria: '',
    colores: '',
    talla: '',
    edades: '',
    tiempo_produccion: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Obtener el id_tienda del vendedor desde localStorage
  const id_tienda = localStorage.getItem('id_tienda');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validaciones básicas
    if (!producto.nombre_producto || !producto.precio || !producto.categoria) {
      setError('Nombre, precio y categoría son campos obligatorios');
      return;
    }

    try {
      const response = await fetch('http://localhost/agregar-producto.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...producto,
          id_tienda: id_tienda,
          precio: parseFloat(producto.precio),
          tiempo_produccion: producto.tiempo_produccion ? parseInt(producto.tiempo_produccion) : null
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Producto agregado correctamente');
        // Limpiar formulario después de 2 segundos
        setTimeout(() => {
          setProducto({
            nombre_producto: '',
            precio: '',
            imagen_url: '',
            categoria: '',
            colores: '',
            talla: '',
            edades: '',
            tiempo_produccion: ''
          });
          setSuccess('');
          navigate('/productos'); // Redirigir a la lista de productos
        }, 2000);
      } else {
        setError(data.message || 'Error al agregar el producto');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="container">
      <h2>Agregar Nuevo Producto</h2>
      
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre_producto" className="form-label">Nombre del Producto*</label>
          <input
            type="text"
            className="form-control"
            id="nombre_producto"
            name="nombre_producto"
            value={producto.nombre_producto}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="precio" className="form-label">Precio (USD)*</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            name="precio"
            step="0.01"
            min="0"
            value={producto.precio}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="imagen_url" className="form-label">URL de la Imagen</label>
          <input
            type="url"
            className="form-control"
            id="imagen_url"
            name="imagen_url"
            value={producto.imagen_url}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoría*</label>
          <select
            className="form-select"
            id="categoria"
            name="categoria"
            value={producto.categoria}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una categoría</option>
            <option value="Ropa">Ropa</option>
            <option value="Calzado">Calzado</option>
            <option value="Accesorios">Accesorios</option>
            <option value="Equipamiento">Equipamiento</option>
            <option value="Personalizado">Personalizado</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="colores" className="form-label">Colores Disponibles (separados por comas)</label>
          <input
            type="text"
            className="form-control"
            id="colores"
            name="colores"
            value={producto.colores}
            onChange={handleChange}
            placeholder="Ej: Rojo, Azul, Verde"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="talla" className="form-label">Tallas Disponibles (separadas por comas)</label>
          <input
            type="text"
            className="form-control"
            id="talla"
            name="talla"
            value={producto.talla}
            onChange={handleChange}
            placeholder="Ej: S, M, L, XL"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="edades" className="form-label">Edades Recomendadas</label>
          <input
            type="text"
            className="form-control"
            id="edades"
            name="edades"
            value={producto.edades}
            onChange={handleChange}
            placeholder="Ej: Adultos, Niños 5-10 años"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tiempo_produccion" className="form-label">Tiempo de Producción (días)</label>
          <input
            type="number"
            className="form-control"
            id="tiempo_produccion"
            name="tiempo_produccion"
            min="1"
            value={producto.tiempo_produccion}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AgregarProducto;