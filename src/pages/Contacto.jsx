import { useState } from 'react';
import {
  FiMail,
  FiLinkedin,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

export default function Contacto() {
  const faqs = [
    {
      question: '¿En cuánto tiempo respondes los mensajes?',
      answer:
        'Normalmente respondo dentro de 24 a 48 horas. Siempre intento contestar lo antes posible.',
    },
    {
      question: '¿Qué tipo de proyectos aceptas?',
      answer:
        'Principalmente desarrollo web Full Stack, interfaces interactivas y proyectos de diseño con React, Node y Tailwind.',
    },
    {
      question: '¿Podemos agendar una llamada?',
      answer:
        'Sí, claro. Escríbeme y coordinamos un horario que se ajuste a ambos.',
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % faqs.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

  return (
    <div className="w-full bg-gray-300 dark:bg-gray-900 relative overflow-hidden">
      {/* Imagen de fondo con fade */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <img
          src="/public/fondoPantalla.jpg"
          alt="Fondo Contacto"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      <section className="relative z-10 min-h-screen w-full flex flex-col justify-start items-center max-w-3xl mx-auto px-6 pb-20 pt-32 text-center scroll-mt-20">
        {/* Título con fade-up */}
        <h1
          className="text-5xl font-extrabold tracking-wider mb-2 text-gray-900 dark:text-gray-200"
          data-aos="fade-up"
        >
          Contáctame
        </h1>
        <div
          className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-8 rounded-full"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* Descripción */}
        <p
          className="mb-10 text-lg text-gray-700 dark:text-gray-400 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          ¿Te interesa trabajar conmigo o tienes alguna pregunta? Puedes escribirme directamente o seguirme en mis redes:
        </p>

        {/* Botones de contacto */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <a
            href="mailto:tuemail@dominio.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition
              bg-indigo-600 text-white hover:bg-indigo-700
              dark:bg-gray-300 dark:text-indigo-700 dark:hover:bg-gray-200"
          >
            <FiMail className="w-5 h-5 animate-pulse" />
            Enviar Email
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition
              bg-blue-600 text-white hover:bg-blue-700
              dark:bg-gray-300 dark:text-blue-700 dark:hover:bg-gray-200"
          >
            <FiLinkedin className="w-5 h-5" />
            LinkedIn
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition
              bg-gray-800 text-white hover:bg-gray-900
              dark:bg-gray-300 dark:text-gray-800 dark:hover:bg-gray-200"
          >
            <FiGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>

        <p
          className="text-sm text-gray-600 dark:text-gray-400 mb-16"
          data-aos="fade"
          data-aos-delay="400"
        >
          Te responderé lo antes posible. ¡Gracias por visitar mi sitio!
        </p>

        {/* Carrusel FAQs */}
        <div
          className="text-center max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-200">
            Preguntas Frecuentes
          </h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition border-4 dark:border-gray-300 border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
              {faqs[current].question}
            </h3>
            <p className="text-gray-700 dark:text-gray-400">
              {faqs[current].answer}
            </p>

            <div className="flex flex-wrap justify-center mt-6 gap-4">
              <button
                onClick={prev}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition
                  bg-indigo-600 text-white hover:bg-indigo-700
                  dark:bg-gray-300 dark:text-indigo-700 dark:hover:bg-gray-200"
              >
                <FiChevronLeft className="w-5 h-5" />
                Anterior
              </button>
              <button
                onClick={next}
                className="inline-flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition
                  bg-indigo-600 text-white hover:bg-indigo-700
                  dark:bg-gray-300 dark:text-indigo-700 dark:hover:bg-gray-200"
              >
                Siguiente
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
