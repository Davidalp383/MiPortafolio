import { FiCode, FiTool, FiUsers } from 'react-icons/fi';

export default function Habilidades() {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col justify-start items-center bg-gray-300 dark:bg-gray-900 pt-40 pb-16 px-6 text-center overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <img
          src="/public/fondoPantalla.jpg"
          alt="Fondo Habilidades"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
        {/* Título principal */}
        <h1
          className="text-5xl font-extrabold tracking-wider mb-2 text-gray-900 dark:text-gray-200"
          data-aos="fade-up"
        >
          Habilidades
        </h1>
        <div
          className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-10 rounded-full"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        {/* Descripción */}
        <p
          className="mb-14 text-lg text-gray-700 dark:text-gray-400 max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Aquí encontrarás una visión general de mis principales habilidades técnicas y blandas,
          organizadas en categorías para mostrar mis fortalezas como profesional.
        </p>

        {/* GRID DE CATEGORÍAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* Tecnologías */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow hover:shadow-xl transition border-4 dark:border-gray-300 border-gray-600"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <FiCode className="w-6 h-6 text-indigo-500" />
              Tecnologías
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>React.js</li>
              <li>Node.js</li>
              <li>TailwindCSS</li>
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Herramientas */}
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow hover:shadow-xl transition border-4 dark:border-gray-300 border-gray-600"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <FiTool className="w-6 h-6 text-green-500" />
              Herramientas
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>VSCode</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>Notion</li>
            </ul>
          </div>

          {/* Habilidades Blandas */}
          <div
            className="bg-white dark:bg-gray-800 border-4 dark:border-gray-300 border-gray-600 rounded-2xl p-8 shadow hover:shadow-xl transition"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
              <FiUsers className="w-6 h-6 text-yellow-500" />
              Habilidades Blandas
            </h2>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>Comunicación efectiva</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Autogestión</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
