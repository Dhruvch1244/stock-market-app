// pages/_app.tsx
import '../styles/global.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;