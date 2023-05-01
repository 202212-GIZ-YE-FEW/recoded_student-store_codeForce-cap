import { useState } from "react"

import EditProfile from "@/components/EditProfile"

import SideBar from "@/components/SideBar"

import UserListings from "@/components/UserListings"

import UserOrders from "@/components/UserOrders"

import RootLayout from "@/layout/root/RootLayout"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

import { useTranslation } from "react-i18next"

export default function UserPage() {
  const [selectedPage, setSelectedPage] = useState("UserOrders")
  function handleSelectedPage(page) {
    setSelectedPage(page)
  }
  const { t } = useTranslation("index")
  return (
    <RootLayout>
      <div
        className='lg:flex h-[800px] lg:h-[816.2px]'
        dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
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
      ...(await serverSideTranslations(locale, ["index", "signup", "common"])),
      // Will be passed to the page component as props
    },
  }
}
