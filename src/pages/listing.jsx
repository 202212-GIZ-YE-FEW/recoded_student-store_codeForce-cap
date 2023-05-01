import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast } from "react-toastify"

import ListingItems from "@/components/ListingItems"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth } from "@/utils/store"

function ListingPage() {
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/").then(() => {
        toast.info("Hey you i think you have to sign up or sign in first !")
      })
    }
  }, [isLoggedIn, router])
  return (
    <RootLayout>
      <ListingItems />
    </RootLayout>
  )
}

export default ListingPage
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "listingItems"])),
      // Will be passed to the page component as props
    },
  }
}
