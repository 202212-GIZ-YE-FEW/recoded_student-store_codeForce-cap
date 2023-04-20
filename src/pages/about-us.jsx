import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Aboutus from "@/components/aboutus"

import RootLayout from "@/layout/root/RootLayout"

export default function AboutUs() {
  return (
    <RootLayout>
      <Aboutus />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["aboutus", "common"])),
      // Will be passed to the page component as props
    },
  }
}
