"use client";

import { useState, useEffect } from "react";
import { FiCode, FiDatabase, FiFolder, FiArrowUp } from "react-icons/fi";

// 🚀 Tus proyectos con link e imagen opcionales
const projects = [
  {
    name: "Ecommerce NEXUS",
    desc: "Plataforma de comercio electrónico construida con Next.js, React, Node.js y PostgreSQL, integrada con Stripe para pagos seguros y Cloudinary para gestión de imágenes.",
    icon: <FiFolder className="w-5 h-5 text-indigo-600 dark:text-indigo-400 animate-pulse" />,
    image: "/imagen-ecommerce.png", // ✅ Opcional: pon tu imagen real
    link: "https://mi-proyecto-ecommerce-portafolio-fi.vercel.app/", // ✅ Opcional: pon tu link real
  },
  {
    name: "API RESTful",
    desc: "Backend robusto con Express y autenticación JWT.",
    icon: <FiFolder className="w-5 h-5 text-green-600 dark:text-green-400 animate-pulse" />,
    // Sin image ni link → usa fallback automático
  },
  {
    name: "Dashboard Admin",
    desc: "Panel de administración responsive con TailwindCSS.",
    icon: <FiFolder className="w-5 h-5 text-yellow-500 dark:text-yellow-400 animate-pulse" />,
    image: "/images/dashboard-admin.jpg",
    // Sin link → solo muestra imagen
  },
];

export default function Experiencia() {
  const [activeTab, setActiveTab] = useState("trayectoria");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen px-4 pt-32 pb-20 bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-300 overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0" data-aos="fade" data-aos-duration="1200">
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo Experiencia"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1
          className="text-5xl font-extrabold mb-4 tracking-wider text-gray-900 dark:text-gray-200 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          data-aos="fade-up"
        >
          {activeTab === "trayectoria" ? "Mi Trayectoria" : "Proyectos"}
        </h1>
        <div
          className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-8 rounded-full animate-pulse mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        ></div>

        <p
          className="mb-12 text-lg leading-relaxed text-gray-700 dark:text-gray-400 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {activeTab === "trayectoria"
            ? "Un vistazo a mi trayectoria profesional, logros clave y roles destacados."
            : "Algunos de mis proyectos más representativos y recientes."}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("trayectoria")}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition border-2 ${
              activeTab === "trayectoria"
                ? "bg-indigo-800 text-white border-indigo-600"
                : "bg-transparent text-indigo-600 border-indigo-600 dark:text-indigo-400"
            }`}
          >
            Trayectoria
          </button>
          <button
            onClick={() => setActiveTab("proyectos")}
            className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition border-2 ${
              activeTab === "proyectos"
                ? "bg-green-800 text-white border-green-600"
                : "bg-transparent text-green-600 border-green-600 dark:text-green-400"
            }`}
          >
            Proyectos
          </button>
        </div>

        {/* Contenido */}
        {activeTab === "trayectoria" && (
          <div className="relative border-l-4 border-gray-500 dark:border-gray-400 pl-8 space-y-12 text-left">
            {/* Item 1 */}
            <div className="relative" data-aos="fade-right" data-aos-delay="300">
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
                  Desarrollé interfaces web responsivas usando React, Tailwind y mejores prácticas de diseño UX/UI.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
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
                  Creé APIs RESTful, gestioné bases de datos y optimicé la performance de servicios en producción.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "proyectos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full">
            {projects.map((project) => (
              <div
                key={project.name}
                className="bg-white dark:bg-gray-800 border-4 border-gray-600 dark:border-gray-300 rounded-2xl shadow hover:shadow-xl transition overflow-hidden flex flex-col"
              >
                {/* Imagen con fallback */}
                <img
                  src={project.image ?? "/images/placeholder.jpg"}
                  alt={`Imagen de ${project.name}`}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />

                {/* Contenido */}
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    {project.icon}
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-1">
                    {project.desc}
                  </p>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition font-semibold"
                    >
                      Ver Proyecto
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Botón Scroll Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-5 p-4 rounded-full bg-indigo-600 dark:bg-indigo-400 text-white shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-500 z-[999] transition animate-bounce"
          aria-label="Volver arriba"
        >
          <FiArrowUp className="w-5 h-5" />
        </button>
      )}
    </section>
  );
}
