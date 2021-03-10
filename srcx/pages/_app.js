import { HomeProvider } from '../contexts/homeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <HomeProvider>

      <Component {...pageProps} />
    </HomeProvider>

  )
}

export default MyApp