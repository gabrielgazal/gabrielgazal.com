import { KBarProvider } from 'kbar'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider>
      <Component {...pageProps} />
    </KBarProvider>
  )
}
