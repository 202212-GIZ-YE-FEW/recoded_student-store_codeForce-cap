import { appWithTranslation } from "next-i18next"

import "../styles/globals.css"

import { AuthChecker } from "@/utils/AuthChecker"
import { StoreProvider } from "@/utils/store"

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-iceblue'>
      <StoreProvider>
        <AuthChecker Component={Component} pageProps={pageProps} />
      </StoreProvider>
    </div>
  )
}

export default appWithTranslation(MyApp)
