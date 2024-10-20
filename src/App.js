import React, { useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css"; 
import ThemeButton from "./ThemeButton"; 

function App() {
  const { theme, toggleTheme, handleCustomColorChange } = useContext(ThemeContext);
  const [notification, setNotification] = useState("");

  const handleThemeChange = (themeName) => {
    toggleTheme(themeName);
    setNotification(`Theme changed to ${themeName}!`); 
    setTimeout(() => setNotification(""), 3000); 
  };

  return (
    <div className="app" style={{ background: theme.background, color: theme.color }}>
      <h1>Enhanced Theme Switcher</h1>
      
      <div className="theme-buttons">
        {/* Use ThemeButton for each theme */}
        <ThemeButton theme="light" label="Light" setTheme={handleThemeChange} />
        <ThemeButton theme="dark" label="Dark" setTheme={handleThemeChange} />
        <ThemeButton theme="blue" label="Blue" setTheme={handleThemeChange} />
        <ThemeButton theme="sepia" label="Sepia" setTheme={handleThemeChange} />
      </div>

      {/* Custom Color Picker */}
      <input
        type="color"
        onChange={(e) => handleCustomColorChange(e.target.value)}
        title="Pick a custom color" 
      />

      {/* Theme Preview Area */}
      <div className="theme-preview" style={{ background: theme.background, color: theme.color }}>
        Preview Area
      </div>

      {/* Portfolio Link */}
      <a
        href="https://mfaiz01.github.io/MyPortfolio/" 
        className="portfolio-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit My Portfolio
      </a>

      {/* Notification for Theme Change */}
      {notification && <div className="notification">{notification}</div>}
    </div>
  );
}

export default App;
