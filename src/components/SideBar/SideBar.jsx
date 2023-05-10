import Image from "next/image"
import { withTranslation } from "next-i18next"

import { useProfileData } from "@/utils/store"

import Highlighter from "../highlighter"
import Spinner from "../Spinner/Spinner"

function SideBar({ handleSelectedPage, selectedPage, t }) {
  const { profileData, isLoading } = useProfileData()

  if (isLoading) {
    return <Spinner text='Pleas wait ...' />
  }

  // Image on click event that will let the image an input filed when the page is edite profile
  const imageOnClick = () => {
    if (selectedPage === "EditProfile") {
      document.getElementById("profile-image-input").click()
    }
  }

  // The image that will be displayed in the screen as it is a normal image
  const imageComponent = (
    <Image
      className={`rounded-full mx-auto max-w-[171px] max-h-[171px] ${
        selectedPage === "EditProfile" ? "cursor-pointer" : ""
      }`}
      src={profileData?.profileImg?.url || "/images/cat-photo.svg"}
      alt='...'
      width={171}
      height={171}
      onClick={imageOnClick}
    />
  )
  return (
    <>
      {/* // * If it is large screen */}
      <section
        className='hidden lg:block shadow-2xl overflow-hidden h-[100%]'
        dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        <div className='flex flex-col justify-around text-center w-[331px] pt-10 h-[80%]'>
          {imageComponent}
          <div className='text-[22px]'>
            <span className='flex font-semibold justify-center gap-1'>
              <h2>Name:</h2>
              <span className='flex gap-1'>
                <h2> {profileData?.firstName || ""} </h2>
                <h2> {profileData?.surname || ""} </h2>
              </span>
            </span>
            <p>Email: {profileData?.email || ""}</p>
            <p>Location: {profileData?.address || ""}</p>
          </div>
          <button
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            <Highlighter
              highlighterStyle={
                selectedPage === "EditProfile" ? "editProfile" : ""
              }
              text={t("edit-profile")}
              textClassName='text-[30px] hover:opacity-60'
            />
          </button>
          <div className='grid grid-rows-2 gap-8'>
            <button
              aria-label='My Listing'
              onClick={() => handleSelectedPage("UserListings")}
            >
              <Highlighter
                highlighterStyle={
                  selectedPage === "UserListings" ? "listingPage" : ""
                }
                text={t("my-listing")}
                textClassName='text-[40px] hover:opacity-60'
              />
            </button>
            <button
              aria-label='My Orders'
              onClick={() => handleSelectedPage("UserOrders")}
            >
              <Highlighter
                highlighterStyle={
                  selectedPage === "UserOrders" ? "ordersPage" : ""
                }
                text={t("my-orders")}
                textClassName='text-[38px] hover:opacity-60'
              />
            </button>
          </div>
        </div>
      </section>
      {/* // * If it is small screen */}
      <section className='block lg:hidden'>
        <div className='grid grid-cols-3 text-[17px] items-center text-purple-dark text-center bg-[#90EEE1] h-[37.5px]'>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Orders'
            onClick={() => handleSelectedPage("UserOrders")}
          >
            {t("my-orders")}
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='My Listing'
            onClick={() => handleSelectedPage("UserListings")}
          >
            {t("my-listing")}
          </button>
          <button
            className='focus:bg-[#7874F2] focus:text-[#d7d7d7]'
            aria-label='Edit Profile'
            onClick={() => handleSelectedPage("EditProfile")}
          >
            {t("edit-profile")}
          </button>
        </div>
        <br />
        <br />
        <Highlighter
          highlighterStyle='editProfile'
          text={
            selectedPage === "EditProfile"
              ? t("edit-profile")
              : selectedPage === "UserListings"
              ? t("my-listing")
              : t("my-orders")
          }
        />
        <br />
        <hr className='w-[89%] h-[1.5px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      </section>
    </>
  )
}

export default withTranslation("common")(SideBar)
