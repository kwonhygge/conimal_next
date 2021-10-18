const colors = {
  black: '#000',
  brightGray: '#eee',
  bg_sidebar: '#313A46',
  bg_sidebar_over: '#262E38',
  grey: '#f0f0f0',
  grey02: '#C8C8C8',
  darkGray: '#4F4F4F',
  yellow: '#EFB661',
  primary: '#002F6C',
  txt_disabled_gray: '#BCBFDA',
  white: '#fff',
  whiteGray: '#f5f5f5',
};

const fontFamily = `'Noto Sans KR', -apple-system,
    BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Segoe UI', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`;

const fontSizes = {
  size11: '1.1rem',
  size12: '1.2rem',
  size14: '1.4rem',
  size15: '1.5rem',
  size16: '1.6rem',
  size30: '3rem',
};

const theme = {
  colors,
  fontFamily,
  fontSizes,
};

export type CustomThemeType = typeof theme;

export default theme;
