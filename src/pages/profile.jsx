import { useState } from "react"

import EditProfile from "@/components/EditProfile"
import SideBar from "@/components/SideBar"
import UserListings from "@/components/UserListings"
import UserOrders from "@/components/UserOrders"

import RootLayout from "@/layout/root/RootLayout"

export default function UserPage() {
  const [selectedPage, setSelectedPage] = useState("UserOrders")
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
