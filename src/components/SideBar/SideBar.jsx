import Image from "next/image"
import Link from "next/link"

import Highlighter from "../highlighter"

const SIDE_BAR = {
  ordersPage: "",
  listingPage: "",
  editProfile: "lg:w-[331px] lg:h-[947px] text-center lg:shadow-2xl lg:pt-12",
}

export default function SideBar({
  img = "/productImg.png",
  name = "Name",
  email = "Email",
  location = "Location",
  currentPageStyle = "editProfile",
}) {
  return (
    <section className={SIDE_BAR[currentPageStyle]}>
      <div className='flex flex-col justify-around h-[75%]'>
        <Image
          className='rounded-full mx-auto mb-3'
          src={img}
          alt='...'
          width={171}
          height={171}
        />
        <div className='text-[22px]'>
          <h2 className='font-semibold'>{name}</h2>
          <p>{email}</p>
          <p>{location}</p>
        </div>
        <Highlighter highlighterStyle='editProfile' text='Edit Profile' />
        <div className='font-bold text-[31px] grid grid-rows-2 gap-8'>
          <h1>
            <Link href={currentPageStyle}>My Listing</Link>
          </h1>
          <h1>
            <Link href={currentPageStyle}>My Orders</Link>
          </h1>
        </div>
      </div>
    </section>
  )
}
