import '../styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderComponent from '../components/HeaderComponent'

function MyApp({ Component, pageProps }: AppProps) {

  return (
      <div className={'grid grid-rows-12'}>
        <div className={'row-span-1'}>
            <HeaderComponent />
        </div>
        <div className={'row-span-11'}>
          <Component {...pageProps} />
        </div>
      </div>
  )
}

export default MyApp
