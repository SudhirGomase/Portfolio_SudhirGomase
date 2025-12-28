import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun, FaPalette, FaTimes } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { mode, isDark, toggleMode, changeColorTheme, themes, colorTheme, currentThemeName } = useTheme();
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  const themeColors = {
    dark: { primary: '#667eea', secondary: '#764ba2' },
    purple: { primary: '#8b5cf6', secondary: '#a855f7' },
    blue: { primary: '#3b82f6', secondary: '#2563eb' },
    green: { primary: '#10b981', secondary: '#059669' },
    orange: { primary: '#f97316', secondary: '#ea580c' },
  };

  return (
    <div className="theme-toggle-container">
      <motion.button
        className="theme-toggle-btn"
        onClick={toggleMode}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </motion.button>

      <motion.button
        className="theme-toggle-btn theme-palette-btn"
        onClick={() => setShowThemeMenu(!showThemeMenu)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        title="Change Color Theme"
      >
        <FaPalette />
      </motion.button>

      <AnimatePresence>
        {showThemeMenu && (
          <>
            <motion.div
              className="theme-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowThemeMenu(false)}
            />
            <motion.div
              className="theme-menu"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="theme-menu-header">
                <h3>Choose Theme</h3>
                <button
                  className="theme-close-btn"
                  onClick={() => setShowThemeMenu(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="theme-options">
                {themes.map((theme) => {
                  const colors = themeColors[theme] || themeColors.dark;
                  const isActive = colorTheme === theme;
                  return (
                    <motion.button
                      key={theme}
                      className={`theme-option ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        changeColorTheme(theme);
                        setShowThemeMenu(false);
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className="theme-preview"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                        }}
                      />
                      <span>{theme.charAt(0).toUpperCase() + theme.slice(1)}</span>
                      {isActive && <span className="checkmark">✓</span>}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;

