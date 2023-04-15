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
      <div className='lg:flex'>
        <SideBar handleSelectedPage={handleSelectedPage} />
        {selectedPage === "EditProfile" && <EditProfile />}
        {selectedPage === "UserListings" && <UserListings />}
        {selectedPage === "UserOrders" && <UserOrders />}
      </div>
    </>
  )
}
