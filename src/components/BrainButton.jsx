import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBrain } from 'react-icons/fa';

export default function BrainButton() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isCVPage = location.pathname === '/cv';

  useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
      >
        <FaBrain className="text-white w-5 h-5" />
      </button>

      {open && (
        <div
          className="
            absolute
            left-20 md:left-20
            transform -translate-x-1/2
            md:top-full md:mt-2
            bottom-full mb-2 md:bottom-auto md:mb-0
            bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4
            border-2 border-indigo-600 dark:border-white
            w-48 text-center
          "
        >
          <p className="mb-2 text-gray-800 dark:text-gray-200">¡Hola! 👋</p>

          <Link
            to={isCVPage ? '/' : '/cv'}
            className="block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            {isCVPage ? 'Home' : 'Ver CV'}
          </Link>
        </div>
      )}
    </div>
  );
}
