import '../styles/globals.css'

import { AnimatePresence, motion } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {

  return(
      <AnimatePresence exitBeforeEnter initial={false}>

            <Component {...pageProps} key={router.route} />
      </AnimatePresence>

  )
    
  
}

export default MyApp
