import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiencia from './pages/Experiencia';
import Habilidades from './pages/Habilidades';
import Contacto from './pages/Contacto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />     
          <Route path="/experience" element={<Experiencia />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/contact" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
