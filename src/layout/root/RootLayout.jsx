import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Footer from "@/components/Footer"

import Navbar from "@/components/Navbar"

export default function RootLayout({ children }) {
  // Put Header or Footer around the children element
  // Example
  return (
    <>
      <Navbar />
      {children}
      <Footer />
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
