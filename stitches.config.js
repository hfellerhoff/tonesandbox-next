import {
  slate,
  blue,
  amber,
  plum,
  slateDark,
  blueDark,
  amberDark,
  plumDark,
} from '@radix-ui/colors';

import { createStitches } from '@stitches/react';
export const { styled, createTheme, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      ...slate,
      ...blue,
      ...amber,
      ...plum,
    },
    fonts: {
      body: '"DM Sans"', // , system-ui, sans-serif',
      heading: '"DM Sans"', // , "Avenir Next", sans-serif',
      monospace: 'Menlo, monospace',
    },
    fontWeights: {
      heading: 200,
      body: 400,
      bold: 700,
    },
  },
});

// const darkTheme = createTheme({
//   colors: {
//     ...slateDark,
//     ...blueDark,
//     ...redDark,
//     ...greenDark,
//   },
// });
// Use the colors in your styles

const defaultStyle = {};

const headerStyle = {
  ...defaultStyle,
  fontFamily: '$heading',
  fontWeight: '$heading',
};

const bodyStyle = {
  ...defaultStyle,
  fontFamily: '$body',
};

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
  'html, body, __next': {
    background: '$slate1',
  },
  h1: {
    ...headerStyle,
    fontSize: '1.5rem',
  },
  h2: {
    ...headerStyle,
    fontSize: '1.5rem',
  },
  h3: {
    ...headerStyle,
    fontSize: '1.125rem',
  },
  h4: {
    ...headerStyle,
    fontSize: '1rem',
  },
  h5: {
    ...headerStyle,
    fontSize: '0.875rem',
  },
  h6: {
    ...headerStyle,
    fontSize: '0.75rem',
  },
  p: {
    ...bodyStyle,
  },
  span: {
    ...bodyStyle,
  },
  div: {
    ...bodyStyle,
  },
});
