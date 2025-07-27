import { useState, useMemo, useEffect } from 'react';
import { FiCode, FiTool, FiUsers, FiAward, FiArrowUp } from 'react-icons/fi';

// Datos
const techSkills = [
  { name: 'React.js' },
  { name: 'Node.js' },
  { name: 'TailwindCSS' },
  { name: 'Git & GitHub' },
];

const tools = [
  { name: 'VSCode' },
  { name: 'Figma' },
  { name: 'Postman' },
  { name: 'Notion' },
];

const softSkills = [
  { name: 'Comunicación efectiva' },
  { name: 'Trabajo en equipo' },
  { name: 'Resolución de problemas' },
  { name: 'Autogestión' },
];

const certifications = [
  {
    name: 'Full Stack Developer',
    desc: 'Certificado por SENA - Desarrollo de aplicaciones web con tecnologías modernas.',
    icon: <FiAward className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />,
  },
  {
    name: 'JavaScript Avanzado',
    desc: 'Certificado por FreeCodeCamp - Algoritmos y estructuras de datos avanzadas.',
    icon: <FiAward className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />,
  },
  {
    name: 'Desarrollo Frontend',
    desc: 'Certificado por Coursera - Especialización en React y UI responsive.',
    icon: <FiAward className="w-5 h-5 text-yellow-500 dark:text-yellow-400 animate-pulse" />,
  },
];

const studies = [
  {
    name: 'Ingeniería de Sistemas',
    desc: 'Universidad Tecnológica - En curso',
    icon: <FiAward className="w-5 h-5 text-blue-600 dark:text-blue-400 animate-pulse" />,
  },
  {
    name: 'Desarrollador Fullstack',
    desc: 'Alura Latam / Oracle ONE',
    icon: <FiAward className="w-5 h-5 text-purple-600 dark:text-purple-400 animate-pulse" />,
  },
  {
    name: 'Desarrollo de Software',
    desc: 'SENA',
    icon: <FiAward className="w-5 h-5 text-pink-600 dark:text-pink-400 animate-pulse" />,
  },
];

export default function Habilidades() {
  const [activeTab, setActiveTab] = useState('skills');
  const combinedCerts = useMemo(() => [...certifications, ...studies], []);
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
      id="skills"
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-900 pt-28 pb-16 px-4 text-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo Habilidades"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
          loading="lazy"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-5xl sm:text-5xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-300 mb-3 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
          {activeTab === 'skills' ? 'Habilidades' : 'Certificaciones'}
        </h1>

        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-5 rounded-full animate-pulse"></div>

        <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-300 max-w-3xl mb-10">
          {activeTab === 'skills'
            ? 'Una visión general de mis habilidades técnicas y blandas, organizadas en categorías.'
            : 'Certificados y estudios que respaldan mi trayectoria profesional.'}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition border-2 ${
              activeTab === 'skills'
                ? 'bg-indigo-800 text-white border-indigo-600'
                : 'bg-transparent text-indigo-600 border-indigo-600 dark:text-indigo-400'
            }`}
          >
            Habilidades
          </button>
          <button
            onClick={() => setActiveTab('certs')}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition border-2 ${
              activeTab === 'certs'
                ? 'bg-green-800 text-white border-green-600'
                : 'bg-transparent text-green-600 border-green-600 dark:text-green-400'
            }`}
          >
            Certificaciones
          </button>
        </div>

        {/* Grids */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            <div className="bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-300 rounded-2xl p-6 sm:p-8 shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100 drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]">
                <FiCode className="w-6 h-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                Tecnologías
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {techSkills.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-300 rounded-2xl p-6 sm:p-8 shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100 drop-shadow-[0_0_6px_rgba(34,197,94,0.5)]">
                <FiTool className="w-6 h-6 text-green-600 dark:text-green-400 animate-pulse" />
                Herramientas
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {tools.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-300 rounded-2xl p-6 sm:p-8 shadow hover:shadow-xl transition">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800 dark:text-gray-100 drop-shadow-[0_0_6px_rgba(234,179,8,0.5)]">
                <FiUsers className="w-6 h-6 text-yellow-500 dark:text-yellow-400 animate-pulse" />
                Habilidades Blandas
              </h2>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                {softSkills.map((item) => (
                  <li key={item.name}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'certs' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            {combinedCerts.map((cert) => (
              <div
                key={cert.name}
                className="bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-300 rounded-2xl p-6 sm:p-8 shadow hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-100">
                  {cert.icon}
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{cert.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Flecha Scroll Top */}
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
