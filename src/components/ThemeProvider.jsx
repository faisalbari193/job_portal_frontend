'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('jobboard-theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : systemTheme);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    window.localStorage.setItem('jobboard-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));

  return <ThemeContext.Provider value={{ theme: theme || 'dark', toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
