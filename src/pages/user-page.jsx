import { useState } from "react"

import EditProfile from "@/components/EditProfile"

import SideBar from "@/components/SideBar"

import UserListings from "@/components/UserListings"

import UserOrders from "@/components/UserOrders"

import RootLayout from "@/layout/root/RootLayout"

import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function UserPage() {
  const [selectedPage, setSelectedPage] = useState("UserOrders")
  function handleSelectedPage(page) {
    setSelectedPage(page)
  }
  return (
    <RootLayout>
      <div className='lg:flex h-[40px] lg:h-[816.2px]'>
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
      ...(await serverSideTranslations(locale, ["index", "common"])),
      // Will be passed to the page component as props
    },
  }
}
