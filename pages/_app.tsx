import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Montserrat } from "next/font/google"
import Head from "next/head";

const mont = Montserrat({
    subsets: ['latin'],
    variable: '--font-mont',
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div className={`${mont.variable} font-mont`}>
          <Component {...pageProps} />
      </div>
  )
}

export default MyApp
