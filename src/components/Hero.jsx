import { motion } from 'framer-motion';
import { FaHandPeace, FaLaptopCode, FaArrowDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function Hero() {

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-900 pt-28 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo Hero"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      {/* Contenido principal */}
      <div
        className="max-w-3xl relative z-10"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <p
          className="flex items-center justify-center gap-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-1"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <FaHandPeace className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-bounce-slow" />
          Hola, soy
        </p>

        <h1
          className="text-6xl sm:text-6xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 mb-3"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          David López
        </h1>

        <div
          className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-3 mx-auto rounded-full"
          data-aos="fade-right"
          data-aos-delay="500"
        ></div>

        <h2
          className="flex items-center justify-center gap-2 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <FaLaptopCode className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          Desarrollador Full Stack
        </h2>

        <p
          className="text-base sm:text-lg text-gray-800 dark:text-gray-300 max-w-md mx-auto mb-5"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Transformo ideas en experiencias visuales que impactan y comunican.
        </p>

        <motion.a
          href="#about"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(79, 70, 229, 0.8))',
          }}
          whileHover={{
            scale: 1.05,
          }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-400 transition"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          Mira mi trabajo
          <FaArrowDown className="w-4 h-4 animate-bounce" />
        </motion.a>

      </div>

      {showScrollTop && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-24 right-5 p-4 rounded-full bg-indigo-600 dark:bg-indigo-400 text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 z-[999] transition animate-bounce"
        aria-label="Volver arriba"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    )}

    </section>
  );
}
