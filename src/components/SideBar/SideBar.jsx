import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import Highlighter from "../highlighter"

const SIDE_BAR = {
  largeScreen:
    "hidden lg:block lg:w-[331px] lg:h-[947px] text-center lg:shadow-2xl lg:pt-12",
  smallScreen: "lg:hidden",
}

export default function SideBar({
  img = "/productImg.png",
  name = "Name",
  email = "Email",
  location = "Location",
  link = "Link",
  currentPage = "editeProfile",
  highlighterText = "Text",
}) {
  const [currentPageStyle, setCurrentPageStyle] = useState("smallScreen")

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCurrentPageStyle("largeScreen")
      } else {
        setCurrentPageStyle("smallScreen")
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return currentPageStyle === "largeScreen" ? (
    // If the expression true
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
        <Link href={link}>
          <Highlighter highlighterStyle={currentPage} text={highlighterText} />
        </Link>
        <div className='font-bold text-[31px] grid grid-rows-2 gap-8'>
          <h1>
            <Link href={link}>My Listing</Link>
          </h1>
          <h1>
            <Link href={link}>My Orders</Link>
          </h1>
        </div>
      </div>
    </section>
  ) : (
    //If the expression false
    <section className={SIDE_BAR[currentPageStyle]}>
      <div className='grid grid-cols-3 text-[17px] items-center text-purple-dark text-center bg-[#90EEE1] h-[38px]'>
        <Link className='focus:bg-[#7874F2] focus:text-[#d7d7d7]' href={link}>
          My Orders
        </Link>
        <Link className='focus:bg-[#7874F2] focus:text-[#d7d7d7]' href={link}>
          My Listing
        </Link>
        <Link className='focus:bg-[#7874F2] focus:text-[#d7d7d7]' href={link}>
          Edit Profile
        </Link>
      </div>
      <br />
      <br />
      <Highlighter highlighterStyle={currentPage} text={highlighterText} />
      <hr className='w-[82%] h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <br />
      <br />
      {currentPage === "editProfile" ? (
        <Image
          className='rounded-full mx-auto'
          src={img}
          alt='...'
          width={274}
          height={275}
        />
      ) : null}
    </section>
  )
}
