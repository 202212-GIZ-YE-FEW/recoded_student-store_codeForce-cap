import NextNProgress from "nextjs-progressbar"

import { useAuth } from "@/utils/store"

export const AuthChecker = ({ Component, pageProps }) => {
  const { initialAuthCheck } = useAuth()

  return (
    <>
      <NextNProgress color='purple' height={5} />
      {initialAuthCheck && <Component {...pageProps} />}
    </>
  )
}
