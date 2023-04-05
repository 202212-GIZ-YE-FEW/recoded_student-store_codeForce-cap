import Link from "next/link"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Donation from "@/components/donation"
import Filter from "@/components/Filter"
import Footer from "@/components/Footer"
import Hero from "@/components/hero/Hero"
import Navbar from "@/components/Navbar"
import Signup from "@/components/Signup"

import RootLayout from "@/layout/root/RootLayout"

export default function HomePage() {
  const { t } = useTranslation("common")

  return (
    <>
      <RootLayout>
        <Navbar />
        <Signup />
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
        <Filter />
        <Donation />
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
