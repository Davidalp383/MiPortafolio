import { createContext, useState, useEffect, useContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Lee el valor de localStorage al iniciar
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    // Aplica clase dark al <html>
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Guarda en localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado (opcional, pero muy práctico)
export function useTheme() {
  return useContext(ThemeContext);
}
