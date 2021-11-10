import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useHandleKeyboard from '../src/hooks/useHandleKeyboard';
import { ThemeProvider } from 'theme-ui';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  useHandleKeyboard();

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
