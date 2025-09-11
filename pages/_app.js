import { KBarProvider } from 'kbar'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import { globalStyles } from '../stitches.config'

globalStyles()

export default function MyApp({ Component, pageProps }) {
  return (
    <KBarProvider>
      <Component {...pageProps} />
    </KBarProvider>
  )
}
