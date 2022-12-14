import { Global, ThemeProvider } from '@emotion/react'
import type { AppProps } from 'next/app'
import { globalStyles } from '~/styles/global'
import { light } from '~/styles/themes/light'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
