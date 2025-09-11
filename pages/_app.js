// _app.js
import { KBarProvider } from 'kbar'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react'
import { globalStyles } from '../stitches.config'

export default function MyApp({ Component, pageProps }) {
  // Aplica os estilos globais apenas uma vez no client
  useEffect(() => {
    globalStyles()
  }, [])

  return (
    <KBarProvider>
      <Component {...pageProps} />
    </KBarProvider>
  )
}
