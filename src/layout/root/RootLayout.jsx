import Head from "next/head"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar"

export default function RootLayout({ children }) {
  // Put Header or Footer around the children element
  // Example
  return (
    <>
      <Head>
        <title>Student Store</title>
        <meta name='description' content='Student Store' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/tapLogo.png' />
      </Head>
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
