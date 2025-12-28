import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  dark: {
    name: 'Dark',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: '#0a0a1a',
      surface: 'rgba(15, 15, 35, 0.8)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(255, 255, 255, 0.15)',
    }
  },
  light: {
    name: 'Light',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: '#ffffff',
      surface: 'rgba(255, 255, 255, 0.95)',
      text: '#1a1a2e',
      textSecondary: 'rgba(26, 26, 46, 0.7)',
      border: 'rgba(102, 126, 234, 0.2)',
    }
  },
  purple: {
    name: 'Purple',
    colors: {
      primary: '#8b5cf6',
      secondary: '#a855f7',
      accent: '#c084fc',
      background: '#1e1b4b',
      surface: 'rgba(30, 27, 75, 0.8)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(139, 92, 246, 0.3)',
    }
  },
  blue: {
    name: 'Blue',
    colors: {
      primary: '#3b82f6',
      secondary: '#2563eb',
      accent: '#60a5fa',
      background: '#0f172a',
      surface: 'rgba(15, 23, 42, 0.8)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(59, 130, 246, 0.3)',
    }
  },
  green: {
    name: 'Green',
    colors: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399',
      background: '#064e3b',
      surface: 'rgba(6, 78, 59, 0.8)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(16, 185, 129, 0.3)',
    }
  },
  orange: {
    name: 'Orange',
    colors: {
      primary: '#f97316',
      secondary: '#ea580c',
      accent: '#fb923c',
      background: '#7c2d12',
      surface: 'rgba(124, 45, 18, 0.8)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(249, 115, 22, 0.3)',
    }
  }
};

export const ThemeProvider = ({ children }) => {
  // Initialize with dark mode as default
  const [mode, setMode] = useState(() => {
    const saved = localStorage.getItem('themeMode');
    return saved || 'dark'; // Default to dark if no saved preference
  });
  
  const [colorTheme, setColorTheme] = useState(() => {
    const saved = localStorage.getItem('colorTheme');
    return saved || 'dark'; // Default to dark if no saved preference
  });

  useEffect(() => {
    // Ensure dark mode is set on initial load if no preference exists
    if (!localStorage.getItem('themeMode')) {
      localStorage.setItem('themeMode', 'dark');
      setMode('dark');
    } else {
      const savedMode = localStorage.getItem('themeMode');
      setMode(savedMode);
    }
    
    if (!localStorage.getItem('colorTheme')) {
      localStorage.setItem('colorTheme', 'dark');
      setColorTheme('dark');
    } else {
      const savedColorTheme = localStorage.getItem('colorTheme');
      setColorTheme(savedColorTheme);
    }
  }, []);

  // Convert hex to RGB for rgba usage
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const currentTheme = themes[colorTheme] || themes.dark;
  const isDark = mode === 'dark';
  
  // Use light theme colors when mode is light, otherwise use current color theme
  const lightTheme = themes.light;
  const activeColors = isDark ? currentTheme.colors : {
    ...currentTheme.colors,
    text: lightTheme.colors.text,
    textSecondary: lightTheme.colors.textSecondary,
    background: lightTheme.colors.background,
    surface: lightTheme.colors.surface,
    border: lightTheme.colors.border,
  };

  const primaryRgb = hexToRgb(currentTheme.colors.primary);
  const secondaryRgb = hexToRgb(currentTheme.colors.secondary);

  // Apply theme class and CSS variables to body/html for fixed elements like navbar
  useEffect(() => {
    // Apply theme classes
    document.body.className = document.body.className
      .replace(/theme-\w+/g, '')
      .trim();
    document.body.classList.add(`theme-${mode}`, `theme-${colorTheme}`);
    
    document.documentElement.className = document.documentElement.className
      .replace(/theme-\w+/g, '')
      .trim();
    document.documentElement.classList.add(`theme-${mode}`, `theme-${colorTheme}`);
    
    // Apply CSS variables to body and html
    const styleVars = {
      '--primary-color': currentTheme.colors.primary,
      '--secondary-color': currentTheme.colors.secondary,
      '--accent-color': currentTheme.colors.accent,
      '--bg-color': activeColors.background,
      '--surface-color': activeColors.surface,
      '--text-color': activeColors.text,
      '--text-secondary': activeColors.textSecondary,
      '--border-color': activeColors.border,
      '--primary-rgb': primaryRgb ? `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}` : '102, 126, 234',
      '--secondary-rgb': secondaryRgb ? `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}` : '118, 75, 162',
    };
    
    Object.entries(styleVars).forEach(([key, value]) => {
      document.body.style.setProperty(key, value);
      document.documentElement.style.setProperty(key, value);
    });
  }, [mode, colorTheme, currentTheme, activeColors, primaryRgb, secondaryRgb]);

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const changeColorTheme = (themeName) => {
    setColorTheme(themeName);
    localStorage.setItem('colorTheme', themeName);
  };

  const theme = {
    mode,
    isDark,
    colorTheme,
    colors: activeColors,
    toggleMode,
    changeColorTheme,
    themes: Object.keys(themes),
    currentThemeName: currentTheme.name,
  };

  return (
    <ThemeContext.Provider value={theme}>
      <div 
        className={`theme-${mode} theme-${colorTheme}`}
        style={{
          '--primary-color': currentTheme.colors.primary,
          '--secondary-color': currentTheme.colors.secondary,
          '--accent-color': currentTheme.colors.accent,
          '--bg-color': activeColors.background,
          '--surface-color': activeColors.surface,
          '--text-color': activeColors.text,
          '--text-secondary': activeColors.textSecondary,
          '--border-color': activeColors.border,
          '--primary-rgb': primaryRgb ? `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}` : '102, 126, 234',
          '--secondary-rgb': secondaryRgb ? `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}` : '118, 75, 162',
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

