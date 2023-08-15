import '@/styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { AnimatePresence } from 'framer-motion';
// import "@fontsource/source-sans-pro";
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
	const pageKey = router.asPath


  return <AnimatePresence initial={false} mode="popLayout">
          <Component key={pageKey} {...pageProps} />
        </AnimatePresence>
}
