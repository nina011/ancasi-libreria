import type { AppProps } from 'next/app'
import '../styles/globals.css'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { SWRConfig } from 'swr/_internal'

import { lightTheme } from '../themes'
import { UiProvider } from '../context'
import { CartProvider } from '../context/cart'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <SWRConfig
      value={{
        // refreshInterval: 500,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
      <CartProvider>
        <UiProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UiProvider>
      </CartProvider>
    </SWRConfig>
  )
}

export default MyApp
