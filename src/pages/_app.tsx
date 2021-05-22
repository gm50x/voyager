import { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Head from 'next/head'
import '@@styles/globals.css'
import { theme } from '@@themes'
import { Layout } from '@@components'

const CustomApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  })
  return (
    <>
      <Head>
        <title>Voyager App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>

  )
}

export default CustomApp
