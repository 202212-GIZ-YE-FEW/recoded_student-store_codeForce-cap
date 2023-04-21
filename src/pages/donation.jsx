import Donation from "@/components/donation"

import RootLayout from "@/layout/root/RootLayout"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function donation() {
  return (
    <RootLayout>
      <Donation />
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
