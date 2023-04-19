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
