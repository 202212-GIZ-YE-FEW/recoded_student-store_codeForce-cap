import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Donation from "@/components/donation"
import Footer from "@/components/Footer"
import Hero from "@/components/hero/Hero"
import Navbar from "@/components/Navbar"
import ProductList from "@/components/ProductList"

import RootLayout from "@/layout/root/RootLayout"

export default function HomePage() {
  const { t } = useTranslation("common")

  return (
    <>
      <RootLayout>
        <Navbar />
        <p>{t("test")}</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <Link href='/' locale='en'>
            English
          </Link>
          <Link href='/' locale='ar'>
            العربية
          </Link>
        </div>
        <Hero />
        <Donation />
        <ProductList />
        <Footer />
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
