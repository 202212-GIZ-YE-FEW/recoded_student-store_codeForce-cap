import ProgressBar from "@ramonak/react-progress-bar"
import { withTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  AiOutlineClose,
  AiOutlineProfile,
  AiOutlineSearch,
} from "react-icons/ai"
import { HiHeart } from "react-icons/hi"
import { RxHamburgerMenu } from "react-icons/rx"
import { TfiWorld } from "react-icons/tfi"
import { toast } from "react-toastify"

import styles from "./Navbar.module.css"

import { auth } from "@/utils/firebase/config"
import SignOut from "@/utils/firebase/signout"
import { useAuth, useProfileData } from "@/utils/store"

function Navbar({ t }) {
  const [open, setOpen] = useState(false)
  const [user] = useAuthState(auth)
  const [scrollProgress, setScrollProgress] = useState(0)
  const profile = useProfileData()
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  // set the activated language key next to the language icon
  const [activeLanguage, setActiveLanguage] = useState(router.locale)

  // toggle between the tow languages so that it's not necessary to have a links to chose the language that we need
  const toggleLanguage = () => {
    // implement the language locale so that make sure we to set the locale without redirect us to the home page again
    const currentLocale = router.locale
    // activated locale checker
    const newLocale = currentLocale === "en" ? "ar" : "en"
    // set the toggle to be the second or the first language depends on the activated one
    setActiveLanguage(newLocale)
    // set the locale to be the other without redirect to the ome page
    router.push(router.pathname, router.asPath, { locale: newLocale })
  }

  // scroll calculator
  const calculateScrollProgress = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const progress = (scrollTop / scrollHeight) * 100
    setScrollProgress(Math.floor(progress))
  }

  // page scroll listener
  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress)
    return () => window.removeEventListener("scroll", calculateScrollProgress)
  }, [])

  // protect the listing page from accessing when the user is not signed in
  const handleloginClick = () => {
    if (!isLoggedIn) {
      toast.error("Hold on, You have to sign in or sign up first !!")
    } else {
      router.push("/listing")
    }
  }

  return (
    <header
      className='sticky top-0 z-40'
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
            className='rtl:mr-[180px] rtl:sm:mr-[550px] rtl:md:mr-[0px]'
          />
        </Link>
        {/* ----------- Languages ----------- */}
        <div className='flex items-end cursor-pointer absolute right-14 top-6 md:static order-2 md:hidden'>
          <div
            className='flex gap-1 hover:border-purple border-2 p-1 rounded-3xl'
            onClick={toggleLanguage}
          >
            <TfiWorld className='text-3xl text-gray-700' />
            <span className='text-gray-700'>{activeLanguage}</span>
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
              className='flex gap-1 hover:border-purple border-2 p-1 rounded-3xl'
              onClick={toggleLanguage}
            >
              <TfiWorld className='text-3xl text-gray-700' />
              <span className='text-gray-700'>{activeLanguage}</span>
            </div>
          </div>
          {/* ----------- Buttons ----------- */}
          <div className='flex  justify-between items-center gap-5 flex-col md:flex-row '>
            <div className='flex gap-4 capitalize flex-col md:flex-row'>
              {user ? (
                // Display user icon if signed in
                <div className='flex items-center'>
                  <div className='block md:relative text-center md:border-2 hover:border-purple rounded-full'>
                    <span className='hidden md:flex items-center cursor-pointer'>
                      <Image
                        alt='User'
                        src={
                          profile?.profileImg?.url || "/images/cat-photo.svg"
                        }
                        width={37}
                        height={37}
                      />
                    </span>
                    <button
                      onClick={() => setOpen(!open)}
                      className='hidden md:block absolute top-0 right-0 h-full w-full cursor-pointer'
                    />
                    {open && (
                      <div
                        className={`md:absolute top-10 right-0 bg-white md:border border-gray-200 rounded-lg md:shadow-md py-2 ${styles.show}`}
                      >
                        <p>{profile?.firstName || "user"}</p>
                        <hr className='bg-purple p-[1px]' />
                        <Link
                          href={isLoggedIn ? "/profile" : "/signup"}
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

              <button onClick={handleloginClick}>
                <div className='bg-purple-light py-2 px-5 text-white rounded-3xl text-sm hover:bg-violet-800 transition-all cursor-pointer'>
                  {t("sell-items")}
                </div>
              </button>
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
