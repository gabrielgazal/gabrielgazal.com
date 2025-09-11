import { KBarProvider } from 'kbar'
import '../styles/globals.css'
import 'remixicon/fonts/remixicon.css'
import { useEffect } from 'react'
import { globalStyles } from '../stitches.config'
import CommandBar from '../components/CommandBar'

const Noop = ({ children }) => children

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    globalStyles()
  }, [])
  const Layout = Component.Layout || Noop
  return (
    <CommandBar>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CommandBar>
  )
}
