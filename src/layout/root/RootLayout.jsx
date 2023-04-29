import Head from "next/head"

import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

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
