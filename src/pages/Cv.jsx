export default function Cv() {
  return (
    <div className="w-full bg-gray-300 dark:bg-gray-900 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0"
        data-aos="fade"
        data-aos-duration="1200"
      >
        <img
          src="/fondoPantalla.jpg"
          alt="Fondo CV"
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      <section className="relative z-10 min-h-screen px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center text-gray-900 dark:text-gray-300">
        <h1 className="text-5xl font-extrabold mb-4 tracking-wider text-gray-900 dark:text-gray-200 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
          Mi <span className="text-indigo-600 dark:text-indigo-400">CV</span>
        </h1>
        <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mb-8 rounded-full animate-pulse"></div>

        <p className="mb-8 text-lg leading-relaxed max-w-xl text-gray-700 dark:text-gray-400">
          Aquí puedes ver y descargar mi Currículum Vitae en PDF.
        </p>

        {/* 👉 Visible solo en escritorio */}
        <div className="hidden md:block w-full max-w-5xl mb-8">
          <iframe
            src="/CV_DAVID_LOPEZ.pdf"
            className="w-full h-[80vh] border-4 border-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition"
          ></iframe>
        </div>

        {/* 👉 Visible solo en mobile */}
        <div className="md:hidden mb-8">
          <a
            href="/CV_DAVID_LOPEZ.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold animate-pulse"
          >
            Ver CV en PDF
          </a>
        </div>

        <a
          href="/CV_DAVID_LOPEZ.pdf"
          download="CV_DAVID_LOPEZ.pdf"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold animate-pulse"
        >
          Descargar CV
        </a>
      </section>
    </div>
  );
}
