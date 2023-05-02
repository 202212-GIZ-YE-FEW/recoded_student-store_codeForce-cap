import { appWithTranslation } from "next-i18next"
import NextNProgress from "nextjs-progressbar"

import "../styles/globals.css"

import { StoreProvider } from "@/utils/store"

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-iceblue'>
      <NextNProgress />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </div>
  )
}

export default appWithTranslation(MyApp)
