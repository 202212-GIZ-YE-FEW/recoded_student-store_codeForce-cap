import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Aboutus from "@/components/Aboutus"

import RootLayout from "@/layout/root/RootLayout"

export default function AboutPage() {
  return (
    <RootLayout>
      <Aboutus />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "aboutus",
        "ourteam",
        "common",
      ])),
      // Will be passed to the page component as props
    },
  }
}
