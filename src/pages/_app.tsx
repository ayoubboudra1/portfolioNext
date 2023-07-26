import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AnimatePresence } from 'framer-motion';
// import "@fontsource/source-sans-pro";
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
}
