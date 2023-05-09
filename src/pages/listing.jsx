import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import ListingItems from "@/components/ListingItems"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth } from "@/utils/store"

function ListingPage() {
  const { t } = useTranslation("listingItems")
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/").then(() => {
        toast.info(t("hi"))
      })
    }
  }, [isLoggedIn, router, t])
  return (
    <RootLayout title='List Product'>
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
