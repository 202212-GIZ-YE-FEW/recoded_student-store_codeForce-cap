import { useState } from "react"

import EditProfile from "@/components/EditProfile"
import SideBar from "@/components/SideBar"
import UserListings from "@/components/UserListings"
import UserOrders from "@/components/UserOrders"

export default function UserPage() {
  const [selectedPage, setSelectedPage] = useState("UserOrders")
  function handleSelectedPage(page) {
    setSelectedPage(page)
  }
  return (
    <div className='flex'>
      <SideBar handleSelectedPage={handleSelectedPage} />
      {selectedPage === "EditProfile" && <EditProfile />}
      {selectedPage === "UserListings" && <UserListings />}
      {selectedPage === "UserOrders" && <UserOrders />}
    </div>
  )
}
