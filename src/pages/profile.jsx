import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import EditProfile from "@/components/EditProfile"
import SideBar from "@/components/SideBar"
import UserListings from "@/components/UserListings"
import UserOrders from "@/components/UserOrders"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth } from "@/utils/store"

export default function UserPage() {
  const { t } = useTranslation("signup")
  const [selectedPage, setSelectedPage] = useState("UserOrders")
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/").then(() => {
        toast.info(t("hey") + " " + t("you") + " " + t("notFound"))
      })
    }
  }, [isLoggedIn, router, t])
  function handleSelectedPage(page) {
    setSelectedPage(page)
  }
  return (
    <RootLayout>
      <div className='lg:flex lg:h-[816.2px]'>
        <div>
          <SideBar
            handleSelectedPage={handleSelectedPage}
            selectedPage={selectedPage}
          />
        </div>
        <div className='w-full'>
          {selectedPage === "EditProfile" && <EditProfile />}
          {selectedPage === "UserListings" && <UserListings />}
          {selectedPage === "UserOrders" && <UserOrders />}
        </div>
      </div>
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "signup",
        "listingItems",
        "index",
      ])),
      // Will be passed to the page component as props
    },
  }
}
