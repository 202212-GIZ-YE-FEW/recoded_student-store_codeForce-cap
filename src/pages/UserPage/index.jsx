import { useState } from "react"

import EditProfile from "@/components/EditProfile"
import Navbar from "@/components/Navbar"
import SideBar from "@/components/SideBar"
import UserListings from "@/components/UserListings"
import UserOrders from "@/components/UserOrders"

export default function UserPage() {
  const [selectedPage, setSelectedPage] = useState("UserOrders")
  function handleSelectedPage(page) {
    setSelectedPage(page)
  }
  return (
    <>
      <Navbar />
      <div className='lg:flex md:h-[816.2px]'>
        <div>
          <SideBar handleSelectedPage={handleSelectedPage} />
        </div>
        <div className='w-full'>
          {selectedPage === "EditProfile" && <EditProfile />}
          {selectedPage === "UserListings" && <UserListings />}
          {selectedPage === "UserOrders" && <UserOrders />}
        </div>
      </div>
    </>
  )
}
