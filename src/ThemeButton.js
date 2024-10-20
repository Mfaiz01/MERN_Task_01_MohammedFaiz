import React from 'react';
import { Tooltip } from 'react-tooltip'; // Use named import

const ThemeButton = ({ theme, label, setTheme }) => (
  <>
    <button 
      data-tip={label} 
      className={`theme-button ${theme}`} 
      onClick={() => setTheme(theme)}
    >
      {label}
    </button>
    <Tooltip place="top" effect="solid" />
  </>
);

export default ThemeButton;
