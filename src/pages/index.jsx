// import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Filter from "@/components/Filter"
import Hero from "@/components/hero/Hero"

import RootLayout from "@/layout/root/RootLayout"
import FavProducts from "@/components/FavProducts"

export default function HomePage() {
  // const { t } = useTranslation("common")

  return (
    <>
      <RootLayout>
        <FavProducts />
        <Hero />
        <Filter />
      </RootLayout>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  }
}
