import { useEffect, useState } from 'react';

const KEY_THEME_NAME = 'theme';

export const useAppTheme = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem(KEY_THEME_NAME, mode);
    setTheme(mode);
    window.location.reload();
  };

  const themeToggle = () => {
    setMode(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(KEY_THEME_NAME);
    localTheme && setTheme(localTheme);
  }, []);

  return { theme, themeToggle };
};
