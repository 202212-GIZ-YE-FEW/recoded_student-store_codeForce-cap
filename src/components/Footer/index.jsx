import Image from "next/image"
import Link from "next/link"
import { withTranslation } from "next-i18next"

function Footer({ t }) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer dir={t("language") === "ar" ? "rtl" : "ltr"}>
        <div className='relative lg:flex lg:justify-evenly bg-[#32314C] w-full h-full break-all mt-auto pb-32'>
          {/* Logo Section */}
          <div className='ml-5 pt-5'>
            <Link href='/'>
              <Image
                src='/images/logo-footer.svg'
                width={350}
                height={250}
                alt='logo'
              />
            </Link>
            <div className='absolute bottom-16 left-5 lg:left-40 lg:bottom-1 rtl:mr-52 sm:rtl:mr-0'>
              <a href='#'>
                <Image
                  src='/images/play-google.svg'
                  width={175}
                  height={49}
                  alt='Google Play'
                  className='box-content p-2 pt-6 md:w-32 lg:w-48'
                />
              </a>
              <a href='#'>
                <Image
                  src='/images/app-store.svg'
                  width={175}
                  height={49}
                  alt='App Store'
                  className='box-content p-2 md:w-32 lg:w-48'
                />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className='pl-14 pt-5 md:pt-14 rtl:w-96 rtl:mr-40 sm:rtl:mr-0'>
            <ul className='font-poppins text-white font-bold md:text-1xl lg:text-2xl'>
              <li>
                <Link href='/about' className='hover:underline'>
                  {t("about-us")}
                </Link>
              </li>
              <li>
                <h2 className='pt-4'>{t("contact-us")}</h2>
                <ul className='text-gray-600 dark:text-gray-400 font-medium'>
                  <li className='pt-4'>(555)678-9012</li>
                  <li className='pt-2'>contact@studentstore.com</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Link Pages Section */}
          <div className='pl-14 pt-10 md:pt-14 rtl:w-96 rtl:mr-40 sm:rtl:mr-0'>
            <ul className='font-poppins text-white font-bold md:text-1xl lg:text-2xl'>
              <li className='mb-4'>
                <Link href='/sign-up' className='hover:underline '>
                  {t("register-for-free")}
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/listing' className='hover:underline'>
                  {t("start-selling")}
                </Link>
              </li>
              <li className='mb-4'>
                <Link href='/' className='hover:underline'>
                  {t("buy-products")}
                </Link>
              </li>
            </ul>

            {/* Social Media Section */}
            <div className='absolute md:flex justify-between bottom-64 right-0 lg:right-96 lg:top-64'>
              <a href='#'>
                <Image
                  src='/images/facebook.svg'
                  width={60}
                  height={70}
                  alt='Facebook'
                  className='md:w-15 lg:w-15 m-5'
                />
              </a>
              <a href='#'>
                <Image
                  src='/images/twitter.svg'
                  width={60}
                  height={70}
                  alt='Twitter'
                  className='md:w-15 lg:w-15 m-5'
                />
              </a>
              <a href='#'>
                <Image
                  src='/images/instagram.svg'
                  width={60}
                  height={70}
                  alt='Instagram'
                  className='md:w-15 lg:w-15 m-5'
                />
              </a>
            </div>
          </div>

          {/* Scroll UP Section */}
          <div className='flex justify-end h-36 pt-32 lg:pt-14 lg:rtl:ml-0 rtl:ml-56'>
            <h2 className='m-0 font-poppins text-white font-bold md:text-2xl lg:text-2xl pt-2 lg:pt-7'>
              {t("scroll-up")}
            </h2>
            <button onClick={goToTop}>
              <Image
                className='w-10 ml-2 mr-5 lg:mr-0'
                src='/images/up-arrow.svg'
                width={45}
                height={35}
                alt='UP'
              />
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}

export default withTranslation("common")(Footer)
