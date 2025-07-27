import { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link, useLocation } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import BrainButton from './BrainButton';
import { FaBrain, FaBriefcase, FaTools, FaEnvelope } from 'react-icons/fa';

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const currentPath = location.pathname;

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Navbar flotante arriba - SOLO DESKTOP/TABLET */}
      <nav className="hidden md:flex fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-200 rounded-2xl shadow-lg px-6 py-2 items-center space-x-4 z-50 border-4 border-gray-700 dark:border-gray-300">
        <BrainButton />

        <div className="flex space-x-4">
          <Link
            to={currentPath === '/experience' ? '/' : '/experience'}
            className="flex items-center gap-2 bg-gray-700 text-white dark:text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition min-w-[8rem] justify-center drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaBriefcase className="w-4 h-4 animate-pulse" />
            {currentPath === '/experience' ? 'Home' : 'Experiencia'}
          </Link>

          <Link
            to={currentPath === '/habilidades' ? '/' : '/habilidades'}
            className="flex items-center gap-2 bg-gray-700 text-white dark:text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition min-w-[8rem] justify-center drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaTools className="w-4 h-4 animate-pulse" />
            {currentPath === '/habilidades' ? 'Home' : 'Habilidades'}
          </Link>

          <Link
            to={currentPath === '/contact' ? '/' : '/contact'}
            className="flex items-center gap-2 bg-gray-700 text-white dark:text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition min-w-[7rem] justify-center drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaEnvelope className="w-4 h-4 animate-pulse" />
            {currentPath === '/contact' ? 'Home' : 'Contacto'}
          </Link>
        </div>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button
            onClick={toggleTheme}
            className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
            aria-label="Cambiar Tema"
          >
            <FiSun className="text-white dark:text-gray-300 w-6 h-6 animate-spin-slow" />
          </button>

          {showTooltip && (
            <div className="absolute -top-10 right-0 bg-gray-700 text-white text-xs px-2 py-1 rounded-md shadow-md dark:bg-gray-300 dark:text-gray-900">
              Cambiar Tema
            </div>
          )}
        </div>
      </nav>

      {/* Bottom Navbar - SOLO MOBILE */}
      <nav className="flex md:hidden fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-gray-200 shadow-inner justify-between items-center px-4 py-2 rounded-t-xl z-50 border-4 border-gray-700 dark:border-gray-300">
        <BrainButton />

        <div className="flex justify-around flex-1 mx-4">
          <Link
            to={currentPath === '/experience' ? '/' : '/experience'}
            className="flex flex-col items-center text-gray-700 hover:text-gray-900 text-xs dark:text-gray-950 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaBriefcase className="w-5 h-5 mb-0.5 animate-pulse" />
            {currentPath === '/experience' ? 'Home' : 'Experiencia'}
          </Link>

          <Link
            to={currentPath === '/habilidades' ? '/' : '/habilidades'}
            className="flex flex-col items-center text-gray-700 hover:text-gray-900 text-xs dark:text-gray-950 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaTools className="w-5 h-5 mb-0.5 animate-pulse" />
            {currentPath === '/habilidades' ? 'Home' : 'Habilidades'}
          </Link>

          <Link
            to={currentPath === '/contact' ? '/' : '/contact'}
            className="flex flex-col items-center text-gray-700 hover:text-gray-900 text-xs dark:text-gray-950 drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
          >
            <FaEnvelope className="w-5 h-5 mb-0.5 animate-pulse" />
            {currentPath === '/contact' ? 'Home' : 'Contacto'}
          </Link>
        </div>

        <div
          className="relative flex items-center"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <button
            onClick={toggleTheme}
            className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition drop-shadow-[0_0_6px_rgba(0,0,0,0.3)]"
            aria-label="Cambiar Tema"
          >
            <FiSun className="text-white dark:text-gray-300 w-6 h-6 animate-spin-slow" />
          </button>

          {showTooltip && (
            <div className="absolute top-5 right-2 bg-gray-800 text-white text-xs px-2 py-2 rounded-md shadow-md dark:bg-gray-300 dark:text-gray-900">
              Cambiar Tema
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
