import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import GlobalStyle from './styles/global';
import { themeLight, themeDark } from './styles/theme';
import { useAppTheme } from './hooks/useAppTheme';

const App = () => {
  const { theme } = useAppTheme();

  // TODO: cambiar el theme con un provider context
  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
