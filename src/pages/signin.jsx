import Signin from "@/components/Signin"

import RootLayout from "@/layout/root/RootLayout"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

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
      ...(await serverSideTranslations(locale, ["donation", "common"])),
      // Will be passed to the page component as props
    },
  }
}
