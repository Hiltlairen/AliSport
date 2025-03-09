import React from "react";
import "./QuienesSomos.css"; // Importa el archivo de estilos
//import logo from "./logo.png"; // Asegúrate de tener la imagen del logo en la carpeta adecuada

const QuienesSomos = () => {
  return (
    <div className="quienes-container">
      <div className="quienes-header">
        <img src="/mouse.png" alt="Alisport Logo" className="quienes-logo" />
      </div>

      <div className="quienes-content">
        <h1 className="quienes-title">¿Quiénes Somos?</h1>
        <p className="quienes-text">
          En <strong>Alisport (AS)</strong>, nos especializamos en la personalización y comercialización de ropa deportiva,
          permitiendo a clientes y vendedores conectar a través de una plataforma innovadora.
        </p>
      </div>

      {/* Sección de Misión y Visión */}
      <div className="quienes-section">
        <h2 className="quienes-subtitle">Nuestra Misión</h2>
        <p className="quienes-text">
          Facilitar el acceso a ropa deportiva personalizada con tecnología avanzada, brindando una experiencia de compra única.
        </p>

        <h2 className="quienes-subtitle">Nuestra Visión</h2>
        <p className="quienes-text">
          Convertirnos en la plataforma líder de personalización de ropa deportiva en Latinoamérica, revolucionando la forma en que clientes y vendedores interactúan en el mercado digital.
        </p>
      </div>

      {/* Sección sobre el sistema */}
      <div className="quienes-section">
        <h2 className="quienes-subtitle">Sobre Alisport (AS)</h2>
        <p className="quienes-text">
          Nuestro sistema permite a los clientes diseñar sus propias prendas en 3D, recibir cotizaciones de diferentes tiendas y realizar compras de manera sencilla y eficiente.
        </p>
        <p className="quienes-text">
          Para los vendedores, ofrecemos una herramienta integral para gestionar sus productos, responder cotizaciones y procesar pedidos, brindando visibilidad a su marca y aumentando sus oportunidades de venta.
        </p>
      </div>

      {/* Sección para Clientes y Vendedores */}
      <div className="quienes-content">
        <h2 className="quienes-title">¿Qué puedes hacer en Alisport?</h2>

        <div className="quienes-section">
          <h3 className="quienes-subtitle">Si eres Cliente</h3>
          <ul className="quienes-list">
            <li><strong>Diseñar tu ropa deportiva:</strong> Personaliza tus prendas con colores, logos y nombres en tiempo real.</li>
            <li><strong>Explorar tiendas y productos:</strong> Accede a una lista de vendedores y revisa sus productos disponibles.</li>
            <li><strong>Solicitar cotizaciones:</strong> Envía tu diseño a diferentes tiendas y compara precios.</li>
            <li><strong>Realizar pedidos:</strong> Confirma la compra y sigue el estado de tu pedido hasta la entrega.</li>
            <li><strong>Recibir notificaciones:</strong> Mantente informado sobre cotizaciones, promociones y estado de tu pedido.</li>
          </ul>
        </div>

        <div className="quienes-section">
          <h3 className="quienes-subtitle">Si eres Vendedor</h3>
          <ul className="quienes-list">
            <li><strong>Administrar tu tienda:</strong> Configura tu perfil, sube un logo y actualiza la información de tu negocio.</li>
            <li><strong>Publicar productos:</strong> Agrega, edita o elimina productos en la plataforma.</li>
            <li><strong>Responder cotizaciones:</strong> Ofrece precios y tiempos de entrega a los clientes.</li>
            <li><strong>Gestionar pedidos:</strong> Administra los pedidos confirmados y actualiza su estado.</li>
            <li><strong>Ofrecer promociones:</strong> Crea descuentos para atraer más clientes.</li>
            <li><strong>Recibir notificaciones:</strong> Mantente al tanto de nuevos pedidos y solicitudes de cotización.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuienesSomos;
