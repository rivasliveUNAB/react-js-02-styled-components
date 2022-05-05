const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  background: '#ffffff',
  text: '#000000',
  nav: 'rgba(255, 255, 255, 0.8)',
};

const colorsDark = {
  ...colorsLight,
  background: '#000000',
  text: '#ffffff',
  nav: 'rgba(0, 0, 0, .5)',
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30,
};

export const themeLight = {
  colors: colorsLight,
  zIndex,
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark,
};
