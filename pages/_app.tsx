import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div>
          <Head>
              <style>
                  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
              </style>
              <title>Joshua Oguh</title>
          </Head>
          <Component {...pageProps} />
      </div>
  )
}

export default MyApp
