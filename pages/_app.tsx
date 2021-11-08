import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useHandleKeyboard from '../src/hooks/useHandleKeyboard';

function MyApp({ Component, pageProps }: AppProps) {
  useHandleKeyboard();

  return <Component {...pageProps} />;
}

export default MyApp;
