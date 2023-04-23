// This file contains the Donation page component, which displays information about donating to charity.
import Image from "next/image"
import { withTranslation } from "next-i18next"

import Highlighter from "../highlighter"

/**
 * Renders the Donation page component.
 * @returns {JSX.Element} The Donation page component.
 */
function Donation({ t }) {
  return (
    <div
      className='flex flex-col items-center justify-center font-poppins'
      dir={t("language") === "ar" ? "rtl" : "ltr"}
    >
      {/* Main image */}
      <div className='lg:max-w-[100%] max-w-[85%] mx-auto'>
        <Image
          className='rounded'
          src='/images/unsplash_1.jpg'
          alt='donation image'
          width={1124}
          height={524}
        ></Image>
      </div>
      <div className='flex flex-col mt-20 items-center justify-center max-w-screen-md'>
        <Highlighter highlighterClassName='donate' text={t("donate")} />
        <p className='text-purple-dark p-3 text-4xl leading-relaxed text-center'>
          {t("donate-des")}
        </p>
      </div>
      <Highlighter highlighterClassName='donating' text={t("make-donate")} />
      {/* Cards section */}
      <div className='flex flex-row flex-wrap items-center justify-around gap-12 p-10'>
        <div className='mt-20 h-[240px] w-[280px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <div className='mt-8 flex flex-col items-center gap-2'>
            <span className='text-xl'>{t("small-help")}</span>
            <div className='relative flex items-center'>
              {/* Displays currency icon */}
              <span className='absolute text-2xl -left-3 top-6'>
                <Image
                  src='/images/currency.svg'
                  alt='currency icon'
                  width={8}
                  height={12}
                />
              </span>
              <span className='font-bold text-[44px]'>10</span>
            </div>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-14 text-sm text-white  transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            {t("donate-button")}
          </button>
        </div>
        <div className='mt-10 h-[280px] w-[320px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <div className='mt-6 flex flex-col items-center'>
            <span className='mb-4 text-2xl'>{t("some-help")}</span>
            <div className='relative flex items-center'>
              <span className='absolute text-2xl -left-3 top-8'>
                <Image
                  src='/images/currency.svg'
                  alt='currency icon'
                  width={12}
                  height={12}
                />
              </span>
              <span className='font-bold text-[58px]'>25</span>
            </div>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-[70px] text-sm  text-white transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            {t("donate-button")}
          </button>
        </div>
        <div className='h-[320px] w-[380px] flex flex-col  justify-center items-center rounded-xl bg-white text-purple-almostblack shadow-lg'>
          <span className='text-3xl'>{t("big-help")}</span>
          <div className='relative flex items-center'>
            <span className='absolute text-3xl -left-4 top-18'>
              <Image
                src='/images/currency.svg'
                alt='currency icon'
                width={16}
                height={16}
              />
            </span>
            <span className='text-[69px] font-bold'>50</span>
          </div>
          <button className='flex h-12 w-[65%] items-center justify-center rounded bg-pumpkin px-20 text-xl text-white transition-all duration-[0.3s] ease-[ease-in-out] cursor-pointer hover:bg-purple'>
            {t("donate-button")}
          </button>
        </div>
      </div>
    </div>
  )
}

// Higher order component for wrapping and to assure semantics & consistency.
export default withTranslation("donation")(Donation)
