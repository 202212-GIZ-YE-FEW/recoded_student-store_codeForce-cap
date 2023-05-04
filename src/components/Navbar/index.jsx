import ProgressBar from "@ramonak/react-progress-bar"
import Image from "next/image"
import Link from "next/link"
import { withTranslation } from "next-i18next"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  AiOutlineClose,
  AiOutlineProfile,
  AiOutlineSearch,
} from "react-icons/ai"
import { HiHeart } from "react-icons/hi"
import { RxHamburgerMenu } from "react-icons/rx"
import { TbArrowBadgeDown } from "react-icons/tb"
import { TfiWorld } from "react-icons/tfi"

import styles from "./Navbar.module.css"

import { auth } from "@/utils/firebase/config"
import SignOut from "@/utils/firebase/signout"
import { useProfileData } from "@/utils/store"

function Navbar({ t }) {
  const [languages, setLanguages] = useState(false)
  const [open, setOpen] = useState(false)
  const [user] = useAuthState(auth)
  const [scrollProgress, setScrollProgress] = useState(0)
  const userName = useProfileData()

  const calculateScrollProgress = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const progress = (scrollTop / scrollHeight) * 100
    setScrollProgress(Math.floor(progress))
  }

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress)
    return () => window.removeEventListener("scroll", calculateScrollProgress)
  }, [])

  return (
    <header
      className='sticky top-0 z-50'
      dir={t("language") === "ar" ? "rtl" : "ltr"}
    >
      <div
        className={`${styles.navbar} m-auto px-10 md:flex md:flex-row py-4 justify-between gap-5 items-center bg-white transition-all 
      `}
      >
        <Link href='/'>
          <Image
            src='/images/Logo.png'
            alt='logo'
            width={130}
            height={130}
            className='rtl:mr-[180px] rtl:sm:mr-[550px] rtl:lg:mr-[0px]'
          />
        </Link>
        {/* ----------- Languages ----------- */}
        <div className='flex items-end cursor-pointer absolute right-14 top-8 md:static order-2 md:hidden'>
          <div
            className='flex items-end'
            onClick={() => setLanguages(!languages)}
          >
            <TfiWorld className='text-2xl text-gray-700' />
            <TbArrowBadgeDown className='text-xl text-violet-700' />
          </div>
          <div className='relative z-50 '>
            <div
              className={`absolute left-[-100px] top-2 bg-white capitalize border border-solid border-violet-600 ${
                languages ? `${styles.show}` : " hidden"
              }`}
            >
              <div className='my-2 px-5 py-2 hover:bg-gray-200 transition-all duration-500'>
                English
              </div>
              <div className='my-2 px-5 py-2 hover:bg-gray-200 transition-all duration-500'>
                العربية
              </div>
            </div>
          </div>
        </div>
        {/* ----------- Burger ----------- */}
        <RxHamburgerMenu
          className={`absolute right-6 top-8 text-2xl cursor-pointer md:hidden ${
            open ? "hidden" : `${styles.show}`
          }`}
          onClick={() => setOpen(true)}
        />
        <AiOutlineClose
          className={`absolute right-6 top-8 text-2xl cursor-pointer md:hidden ${
            open ? `${styles.show}` : "hidden"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`flex-1 md:static flex items-center flex-col gap-5 md:flex-row md:gap-2 md:z-auto absolute  ${
            open ? "top-20 opacity-100" : "top-[-1000px]"
          } left-0  w-full  md:w-auto bg-white p-5 md:p-0 transition-all duration-500 ease-in-out`}
        >
          {/* ----------- Links ----------- */}
          <div className='flex flex-col md:flex-row gap-5'>
            <Link
              href='/donation'
              className='relative mx-4 capitalize text-sm hover:text-violet-800   transition-all duration-1000 before:absolute before:-bottom-2 before:left-0  before:h-[1px]  before:w-0 before:opacity-0 before:bg-violet-700 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100'
            >
              {t("donation")}
            </Link>
            <Link
              href='/about'
              className='relative mx-4 capitalize text-sm  hover:text-violet-800   transition-all duration-1000 before:absolute before:-bottom-2 before:left-0  before:h-[1px]  before:w-0 before:opacity-0 before:bg-violet-700 before:transition-all before:duration-500 hover:before:w-full hover:before:opacity-100'
            >
              {t("about-us")}
            </Link>
          </div>
          {/* ----------- Search ----------- */}
          <div className=' flex-1 border flex items-center py-2 px-4 rounded-3xl'>
            <input
              type='text'
              placeholder={t("search-here")}
              className={`${styles.search} ${styles.input} w-full text-sm placeholder:text-gray-300 placeholder:capitalize text-gray-600
              `}
            />
            <div className=''>
              <AiOutlineSearch />
            </div>
          </div>
          {/* ----------- Languages ----------- */}
          <div className='md:flex items-end cursor-pointer hidden'>
            <div
              className='flex items-end'
              onClick={() => setLanguages(!languages)}
            >
              <TfiWorld className='text-2xl text-gray-700' />
              <TbArrowBadgeDown className='text-xl text-violet-700' />
            </div>
            <div className='relative'>
              <div
                className={`absolute left-[-70px] rtl:left-[-10px] top-5 bg-white capitalize ${
                  languages ? `${styles.show}` : "hidden"
                }`}
              >
                <div className='my-2 px-5 py-2 hover:bg-gray-200 transition-all duration-500'>
                  <Link href='' locale='en'>
                    English
                  </Link>
                </div>
                <div className='my-2 px-5 py-2 hover:bg-gray-200 transition-all duration-500'>
                  <Link href='' locale='ar'>
                    العربية
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* ----------- Buttons ----------- */}
          <div className='flex  justify-between items-center gap-5 flex-col md:flex-row '>
            <div className='flex gap-4 capitalize flex-col md:flex-row'>
              {user ? (
                // Display user icon if signed in
                <div className='flex items-center'>
                  <div className='block md:relative text-center'>
                    <span className='hidden md:flex items-center cursor-pointer'>
                      <Image
                        alt='User'
                        src='/images/user-icon.png'
                        width={37}
                        height={37}
                      />
                      <TbArrowBadgeDown className='text-xl text-violet-700' />
                    </span>
                    <button
                      onClick={() => setOpen(!open)}
                      className='hidden md:block absolute top-0 right-0 h-full w-full cursor-pointer'
                    />
                    {open && (
                      <div
                        className={`md:absolute top-10 right-0 bg-white md:border border-gray-200 rounded-lg md:shadow-md py-2 ${styles.show}`}
                      >
                        <p>{userName?.firstName || "user"}</p>
                        <hr className='bg-purple p-[1px]' />
                        <Link
                          href='/profile'
                          className='block px-4 py-2 hover:bg-gray-100'
                        >
                          <span className='flex items-center gap-2'>
                            {t("profile")}
                            <AiOutlineProfile />
                          </span>
                        </Link>
                        <SignOut />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                // Display sign-in button if not signed in
                <Link href='/signin'>
                  <div className='bg-purple-light py-2 px-5 text-white rounded-3xl text-sm hover:bg-violet-800 transition-all cursor-pointer'>
                    {t("sign-in")}
                  </div>
                </Link>
              )}

              <Link href='/listing'>
                <div className='bg-purple-light py-2 px-5 text-white rounded-3xl text-sm hover:bg-violet-800 transition-all cursor-pointer'>
                  {t("sell-items")}
                </div>
              </Link>
            </div>
            <div className='text-2xl text-orange-600 hover:text-orange-700 transition'>
              <Link href='/favorites'>
                {" "}
                <HiHeart />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ProgressBar
        transitionDuration='0.3s'
        transitionTimingFunction='linear'
        isLabelVisible={false}
        height='10px'
        completed={scrollProgress}
        barContainerClassName='bg-white'
      />
    </header>
  )
}

export default withTranslation("common")(Navbar)
