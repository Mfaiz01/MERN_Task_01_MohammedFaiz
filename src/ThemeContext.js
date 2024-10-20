import React, { createContext, useState, useEffect } from "react";

// Defining the available themes
const themes = {
  light: { background: "#ffffff", color: "#000000" },
  dark: { background: "#000000", color: "#ffffff" },
  blue: { background: "#000035", color: "#ffffff" },
  sepia: { background: "#f5deb3", color: "#000000" },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initializing theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : themes.light; // Default to the light theme
  });

  // Saving the theme to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = (themeName) => {
    if (themes[themeName]) {
      setTheme(themes[themeName]);
    }
  };

  const handleCustomColorChange = (color) => {
    const newTheme = { ...theme, background: color };
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, handleCustomColorChange }}>
      {children}
    </ThemeContext.Provider>
  );
};
