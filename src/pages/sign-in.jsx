import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Signin from "@/components/Signin"

import RootLayout from "@/layout/root/RootLayout"

export default function SignInPage() {
  return (
    <RootLayout>
      <Signin />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signin", "common"])),
      // Will be passed to the page component as props
    },
  }
}
