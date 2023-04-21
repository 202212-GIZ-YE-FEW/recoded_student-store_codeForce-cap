import { SessionProvider } from "next-auth/react"
import { appWithTranslation } from "next-i18next"

import "../styles/globals.css"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <div className='bg-iceblue'>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  )
}

export default appWithTranslation(MyApp)
