import { appWithTranslation } from "next-i18next"

import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-iceblue'>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(MyApp)
