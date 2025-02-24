import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Inicio from './pages/Inicio/Inicio';
//import Carrito from './pages/Carrito/Carrito';<Route path="/carrito" element={<Carrito />} />
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;