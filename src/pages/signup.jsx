import RootLayout from "@/layout/root/RootLayout"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Signup from "./signup"

export default function SignInPage() {
  return (
    <RootLayout>
      <Signup />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup", "common"])),
      // Will be passed to the page component as props
    },
  }
}
