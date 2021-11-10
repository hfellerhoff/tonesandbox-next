import type { Theme, ThemeUIStyleObject } from 'theme-ui';

const defaultStyle: ThemeUIStyleObject = {
  margin: 0,
  padding: 0,
};

const headerStyle: ThemeUIStyleObject = {
  ...defaultStyle,
  fontFamily: 'heading',
  fontWeight: 'heading',
};

const bodyStyle: ThemeUIStyleObject = {
  ...defaultStyle,
  fontFamily: 'body',
};

export const theme: Theme = {
  fonts: {
    body: '"DM Sans"', // , system-ui, sans-serif',
    heading: '"DM Sans"', // , "Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
  },
  // Increments of 0.25rem, up to 24rem (96)
  space: Array(96)
    .fill(0)
    .map((v, i) => `${v + i * 0.25}rem`),
  fontSizes: [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.125rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '3.75rem',
    '4.5rem',
    '6rem',
  ],
  fontWeights: {
    heading: 200,
    body: 400,
    bold: 700,
  },
  styles: {
    root: {
      background: '#eee',
      minHeight: '100vh',
    },
    h1: {
      ...headerStyle,
      fontSize: 6,
    },
    h2: {
      ...headerStyle,
      fontSize: 6,
    },
    h3: {
      ...headerStyle,
      fontSize: 4,
    },
    h4: {
      ...headerStyle,
      fontSize: 3,
    },
    h5: {
      ...headerStyle,
      fontSize: 2,
    },
    h6: {
      ...headerStyle,
      fontSize: 1,
    },
    p: {
      ...bodyStyle,
    },
  },
  // text: {
  //   paragraph: {
  //     marginTop: 2,
  //   },
  // },
};
