import Image from "next/image"

import Highlighter from "../highlighter"

export default function SideBar({ handleSelectedPage }) {
  return (
    <>
      {/* // If it is large screen */}
      <section className='hidden lg:block lg:w-[331px] lg:h-[947px] text-center lg:shadow-2xl lg:pt-12'>
        <div className='flex flex-col justify-around h-[75%]'>
          <Image
            className='rounded-full mx-auto mb-3'
            src='/productImg.png'
            alt='...'
            width={171}
            height={171}
          />
          <div className='text-[22px]'>
            <h2 className='font-semibold'>User Name</h2>
            <p>User Email</p>
            <p>User Location</p>
          </div>
          <button
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            <Highlighter highlighterStyle='editProfile' text='Edit Profile' />
          </button>
          <div className='font-bold text-[31px] grid grid-rows-2 gap-8'>
            <button aria-label='My Listing'>
              <Highlighter highlighterStyle='listingPage' text='My Listings' />
            </button>
            <button aria-label='My Orders'>
              <Highlighter highlighterStyle='ordersPage' text='My Orders' />
            </button>
          </div>
        </div>
      </section>
      {/* //If the expression false */}
      <section className='lg:hidden'>
        <div className='grid grid-cols-3 text-[17px] items-center text-purple-dark text-center bg-[#90EEE1] h-[38px]'>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Orders'
          >
            My Orders
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Listing'
          >
            My Listing
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            Edit Profile
          </button>
        </div>
        <br />
        <br />
        <Highlighter highlighterStyle='editProfile' text='Edit Profile' />
        <hr className='w-[82%] h-[1px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
        <br />
        <br />
        <Image
          className='rounded-full mx-auto'
          src='/productImg.png'
          alt='...'
          width={274}
          height={275}
        />
      </section>
    </>
  )
}
