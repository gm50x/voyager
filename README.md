# Voyager

This repository is a sandbox using NextJS and Material-UI. The central idea is to cover the main points about configuring Material-UI on NextJS for Server Side Usage as well as learn some Layout skills.

## Getting Started

- App Creation with NextJS:

```bash
npx create-next-app <App-Name>
```
- Running the App is also very straightforward:

```bash
# development
npm run dev

# production
npm run build
npm start
```

- Converting everything to Typescript:

NextJS works with both .JS and .TS files, in fact you can even use a combination of both. We are converting this project to typescript at the very beginning, but we are not forcing the usage of it on tsconfig.json. The usage of typescript may help in the future, so we are letting everything ready in case we come to need it. A few development dependencies are required to run NextJS with Typescript.
```bash
npm i --save-dev typescript @types/react @types/node
```

You can rename all the .js files to .tsx files and run Next now.
- Installing Material-UI:

Material-UI is a rich environmnet of UI components, you can find pretty much any piece of front end component in the library. We are using two libraries from the Material-UI, core and icons:
```bash
npm i @material-ui/core @material-ui/icons
```

- Configuring Material-UI for NextJS SSR:

If you start using material-ui at this moment without configuring the server side rendering stuff, you'll come accross multiple warnings on the console about class names not matching... This basically happens because material will be generating css classes on the server, but then once the page gets to the user browser, these classes will be generated again... At least, that's how I get what's going on. In order to fix it, there are a few steps you have to do on both de _document.tsx and the _app.tsx:

First we need to create a _document.tsx on the pages directory with the following code inside:

```javascript
// pages/_document.tsx

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
```

Once you have done that, we need to alter _app.tsx to remove some server side jss too. You can also take this oportunity to create a theme with createMuiTheme() from @material/core and add the ThemeProvider to the app so the 'global' theme is applied globally on your app.

```javascript
import { useEffect } from 'react'
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import Head from 'next/head'

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
        <title>--YOUR-APP-TITLE--</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
    </>

  )
}

export default CustomApp
```

You are now good to go with the material library working on NextJS Server Side Rendering