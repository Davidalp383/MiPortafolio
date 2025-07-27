import { FiCode, FiDatabase } from 'react-icons/fi';

export default function Experiencia() {
  return (
    <section className="relative min-h-screen px-4 pt-32 pb-20 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo Experiencia"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1
          className="text-5xl font-extrabold mb-4 tracking-wider text-gray-900 dark:text-gray-200 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          data-aos="fade-up"
        >
          Mi{' '}
          <span className="text-indigo-600 dark:text-indigo-400">
            Experiencia
          </span>
        </h1>
        <div
          className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-8 rounded-full animate-pulse"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        <p
          className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Un vistazo a mi trayectoria profesional, logros clave y roles
          destacados.
        </p>

        {/* Timeline */}
        <div className="relative border-l-4 border-gray-500 dark:border-gray-400 pl-8 space-y-12">
          {/* Item 1 */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <div className="absolute -left-5 top-1 w-4 h-4 bg-gray-700 dark:bg-gray-300 rounded-full border-4 border-white dark:border-gray-900 drop-shadow-[0_0_6px_rgba(31,41,55,0.5)]"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition border-4 dark:border-gray-300 border-gray-700">
              <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]">
                <FiCode className="w-6 h-6 text-indigo-500 animate-pulse" />
                Frontend Developer
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Empresa XYZ · 2021 - Presente
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                Desarrollé interfaces web responsivas usando React, Tailwind y
                mejores prácticas de diseño UX/UI.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="absolute -left-5 top-1 w-4 h-4 bg-gray-700 dark:bg-gray-300 rounded-full border-4 border-white dark:border-gray-900 drop-shadow-[0_0_6px_rgba(31,41,55,0.5)]"></div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition border-4 dark:border-gray-300 border-gray-700">
              <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]">
                <FiDatabase className="w-6 h-6 text-green-500 animate-pulse" />
                Backend Developer
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Empresa ABC · 2019 - 2021
              </p>
              <p className="text-gray-800 dark:text-gray-300">
                Creé APIs RESTful, gestioné bases de datos y optimicé la
                performance de servicios en producción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
