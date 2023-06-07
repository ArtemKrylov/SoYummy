import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 375, md: 768, lg: 1440, xl: 2560 },
  },
});

theme = createTheme(theme, {
  palette: {
    common: {
      white: '#FAFAFA',
      black: '#1E1F28',
    },
    primary: {
      main: '#8BAA36',
      light: '#EBF3D4',
      dark: '#22252A',
    },
    secondary: {
      main: '#FAFAFA',
      dark: '#2A2C36',
    },
    text: {
      primary: '#23262A',
      secondary: '#FAFAFA',
    },
    grey: {
      100: '#FFFFFF',
      200: '#ECECEC',
      300: '#EFEFEF',
      400: '#D9D9D9',
      500: '#C4C4C4',
      600: '#3E4462',
      700: '#001833',
      800: '#2A2C36',
      900: '#000',
    },
    success: { main: '#3CBC81' },
    error: { main: '#E74A3B' },
    warning: { main: '#F6C23E' },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 14,
    body1: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: 1.29,
      letterSpacing: '-0.02em',
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
        lineHeight: 1.33,
      },
    },
    body2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      letterSpacing: '-0.02em',
      [theme.breakpoints.up('lg')]: {
        fontSize: '18px',
        lineHeight: '24px',
      },
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '24px',
      letterSpacing: '-0.02em',
      [theme.breakpoints.up('md')]: {
        fontSize: '28px',
        lineHeight: '28px',
      },
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '28px',
      letterSpacing: '-0.02em',
      [theme.breakpoints.up('md')]: {
        fontSize: '28px',
        lineHeight: '30px',
      },
    },
  },

  // media: {
  //   tablet: `@media screen and (min-width: 768px)`,
  //   desktop: `@media screen and (min-width: 1440px)`,
  // },
  // shadows: {
  //   fontBlack: `.1px .1px #161616`,
  //   fontAccent: `1px 1px #ff006e`,
  //   boxAccent: `0 1px 1px #ff006e, 0 2px 3px #ff004e, 1px 3px 5px #ff005e;`,
  //   boxDark: `0 1px 1px rgb(0 0 0 / 12%), 0 1px 1px rgb(0 0 0 / 6%), 1px 2px 3px rgb(0 0 0 / 16%);`,
  //   boxDarkHover: `0 1px 1px rgb(0 0 0 / 12%), 0 2px 2px rgb(0 0 0 / 6%), 1px 3px 4px rgb(0 0 0 / 16%);`,
  // },
  // cubic: `250ms cubic-bezier(0.4, 0, 0.2, 1)`,
  // borderRadius: '5px',
  // visuallyHidden: `position: absolute;
  //   width: 1px;
  //   height: 1px;
  //   margin: -1px;
  //   padding: 0;
  //   overflow: hidden;
  //   border: 0;
  //   clip: rect(0 0 0 0);`,
  // flexCenterAndGap: (gap = 0) =>
  //   `display:flex; align-items: center: justify-content: center; gap:${gap}px;`,
  // flexCenter: `display:flex; align-items: center: justify-content: center;`,
  // textInherit: `font-size: inherit;
  // line-height: inherit;
  // letter-spacing: inherit;`,
  // text: (fs: number, lh: number, ls: number) => `font-size: ${fs}px;
  // line-height: calc(${lh}px / ${fs}px);
  // letter-spacing: ${ls}px;`,
});

export { theme };
