import React from 'react'
import { ServerStyleSheets } from '@material-ui/styles'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class VoyagerDocument extends Document {
  static async getInitialProps(context) {
    const styleSheets = new ServerStyleSheets()
    const originalRenderPage = context.renderPage

    context.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => styleSheets.collect(<App {...props} />)
      })

    const initialProps = await Document.getInitialProps(context)

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        styleSheets.getStyleElement()
      ]
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}