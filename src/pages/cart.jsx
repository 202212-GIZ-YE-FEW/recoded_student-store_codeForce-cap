import SideBar from "@/components/SideBar"
import UserOrders from "@/components/UserOrders"

import RootLayout from "@/layout/root/RootLayout"

function CartPage() {
  return (
    <RootLayout>
      <div className='flex'>
        <SideBar />
        <UserOrders />
      </div>
    </RootLayout>
  )
}

export default CartPage
