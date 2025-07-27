import { FaUser, FaBriefcase, FaBullseye } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full flex justify-center px-4 bg-gray-300 dark:bg-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1000"
      >
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo About"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      <div
        className="w-full max-w-5xl flex flex-col md:flex-row overflow-hidden rounded-t-2xl shadow-xl relative z-10"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        {/* Columna izquierda */}
        <div
          className="relative w-full md:w-1/2 h-72 md:h-auto flex-shrink-0"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Fondo degradado con brillo */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-2xl opacity-30 animate-pulse -z-10"></div>

          <img
            src="/miFoto.jpg"
            alt="David López"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Columna derecha */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 pb-20 sm:pb-32 bg-gray-800 dark:bg-gray-300 transition-colors duration-300">
          <div
            className="mb-3 mt-8"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white dark:text-gray-900 mb-2">
              <FaUser className="w-4 h-4 text-indigo-500 dark:text-indigo-600 animate-pulse drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
              Sobre Mí
            </h3>
            <div className="w-12 h-1 bg-indigo-500 dark:bg-indigo-600 rounded-full mb-2"></div>
            <p className="text-gray-300 dark:text-gray-800 leading-relaxed">
              Soy David López, un desarrollador Full Stack apasionado por transformar ideas en experiencias digitales impactantes.
            </p>
          </div>

          <div
            className="mb-3"
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white dark:text-gray-900 mb-2">
              <FaBriefcase className="w-4 h-4 text-indigo-500 dark:text-indigo-600 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
              Experiencia
            </h3>
            <div className="w-12 h-1 bg-indigo-500 dark:bg-indigo-600 rounded-full mb-2"></div>
            <p className="text-gray-300 dark:text-gray-800 leading-relaxed">
              Tengo experiencia creando aplicaciones web modernas con tecnologías como React, Tailwind CSS y Node.js. Me enfoco en escribir código limpio y escalable.
            </p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1000"
          >
            <h3 className="flex items-center gap-2 text-2xl font-bold text-white dark:text-gray-900 mb-2">
              <FaBullseye className="w-4 h-4 text-indigo-500 dark:text-indigo-600 drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]" />
              Enfoque
            </h3>
            <div className="w-12 h-1 bg-indigo-500 dark:bg-indigo-600 rounded-full mb-2"></div>
            <p className="text-gray-300 dark:text-gray-800 leading-relaxed">
              Me considero creativo, proactivo y siempre enfocado en resultados. Busco aportar valor a través de soluciones eficientes y bien diseñadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
