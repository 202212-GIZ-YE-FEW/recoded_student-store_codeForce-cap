import { appWithTranslation } from "next-i18next"

import "../styles/globals.css"

import { AuthChecker } from "@/utils/AuthChecker"
import ErrorBoundary from "@/utils/ErrorBundary"
import { StoreProvider } from "@/utils/store"

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-iceblue'>
      <ErrorBoundary>
        <StoreProvider>
          <AuthChecker Component={Component} pageProps={pageProps} />
        </StoreProvider>
      </ErrorBoundary>
    </div>
  )
}

export default appWithTranslation(MyApp)
