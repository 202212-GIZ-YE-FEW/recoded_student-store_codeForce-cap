import NextNProgress from "nextjs-progressbar"

import { useAuth } from "@/utils/store"

export const AuthChecker = ({ Component, pageProps }) => {
  const { initialAuthCheck } = useAuth()

  return (
    <>
      <NextNProgress />
      {initialAuthCheck && <Component {...pageProps} />}
    </>
  )
}
