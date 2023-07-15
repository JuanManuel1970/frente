import React, { useState, useEffect } from 'react';
import Navegar from "./Componentes/Navegar";
import Home from "./Componentes/Home";
import Productos from "./Componentes/Productos";
import Formulario from "./Componentes/Formulario";
import EdicionFormulario from "./Componentes/EdicionFormulario";
import Faq from "./Componentes/faq";
import Update from "./Componentes/Update";
import Runing from "./Componentes/Runing";
import Footer from "./Componentes/Footer";
import { Routes, Route } from 'react-router-dom';
import Login from "./Componentes/Login"; // Asegúrate de que la ruta sea correcta si el archivo está en una ubicación diferente

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Navegar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/edicionformulario" element={<EdicionFormulario />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/runing" element={<Runing />} />
        <Route path="/update" element={<Update />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;