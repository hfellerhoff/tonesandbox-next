import type { AppProps } from 'next/app';
import useHandleKeyboard from '../src/hooks/useHandleKeyboard';
import { globalStyles } from '../stitches.config';

function MyApp({ Component, pageProps }: AppProps) {
  useHandleKeyboard();
  globalStyles();

  return <Component {...pageProps} />;
}

export default MyApp;
