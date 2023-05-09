import { t } from "i18next"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import Spinner from "@/components/Spinner/Spinner"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth, useProduct } from "@/utils/store"

const Maps = dynamic(() => import("../../components/Maps"), {
  ssr: false,
})

export default function SingleProduct() {
  const { isLoggedIn } = useAuth()
  const router = useRouter()
  const { id } = router.query
  const { data, error, loading } = useProduct(id)

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (loading) {
    return <Spinner text='Loading product details ...' />
  }

  if (!data) {
    return <h1>No data</h1>
  }

  // Convert the firebase timestamp to extract the date from it
  const formatDate = (timestamp) => {
    const date = timestamp.toDate()
    return new Intl.DateTimeFormat("en-GB").format(date)
  }

  return (
    <RootLayout title={data?.productName}>
      <section className='mb-5'>
        <div className='container mx-auto px-4'>
          <div className='lg:col-gap-12 xl:col-gap-16 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-4 lg:gap-16 justify-items-center'>
            <div className='lg:col-span-2 lg:row-end-1'>
              <div className='flex flex-col sm:flex-row lg:flex-col gap-5'>
                <Image // * First Image
                  className='block border-2 border-slate-700 drop-shadow-2xl lg:w-full max-h-[340px] sm:max-h-[262px] lg:max-h-[405px]'
                  src={data?.primaryImage?.url || "/images/emptyImage.png"}
                  alt={t("primaryImage")}
                  width={570}
                  height={340}
                />
                <div className='flex flex-row sm:flex-col lg:flex-row gap-10 sm:gap-4 lg:gap-20'>
                  <Image // * Second Image
                    className='block border-2 border-slate-700 drop-shadow-2xl sm:w-full lg:w-[190px] max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
                    src={data?.secondaryImage?.url || "/images/donate.png"}
                    alt={t("secondaryImage")}
                    width={190}
                    height={137}
                  />
                  <div className='flex gap-10 sm:gap-4 lg:gap-20'>
                    <Image // * Third Image
                      className='block border-2 border-slate-700 drop-shadow-2xl max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
                      src={data?.tertiaryImage?.url || "/images/emptyImage.png"}
                      alt={t("tertiaryImage")}
                      width={190}
                      height={137}
                    />
                    <Image // * Fourth Image
                      className='block border-2 border-slate-700 drop-shadow-2xl max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
                      src={
                        data?.quaternaryImage?.url || "/images/emptyImage.png"
                      }
                      alt={t("quaternaryImage")}
                      width={190}
                      height={137}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
              <h1 className='text-2xl font-bold text-[#7874F2] bg-background-title bg-no-repeat sm:text-3xl'>
                {data?.productName}
              </h1>
              <div className='mt-5 items-center font-poppins pl-4 flex justify-between'>
                <span className='flex flex-col gap-5'>
                  <p className='text-1xl text-[#585785]'>
                    <span className='font-bold'>Category: </span>
                    {data?.category}
                  </p>
                  <p className='text-1xl text-[#585785]'>
                    <span className='font-bold'>Listed from: </span>
                    {data?.location}
                  </p>
                </span>
                <span className='flex flex-col gap-5'>
                  <p className='text-1xl text-[#585785]'>
                    <span className='font-bold'>Created at: </span>
                    {formatDate(data?.createdAt)}
                  </p>
                  <p className='text-1xl text-[#585785]'>
                    <span className='font-bold'>Type: </span>
                    {data?.type}
                  </p>
                </span>
              </div>
              <h2 className='mt-8 font-poppins text-[#585785] text-2xl pl-4'>
                Details:
              </h2>
              <hr className='border-2 ml-4 bg-[#7874F2]' />
              <div className='flex flex-col text-[#585785] items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0'></div>
              <div className='font-poppins text-[#585785] text-1xl pl-4 h-28 overflow-y-scroll'>
                <p>{data?.description}</p>
              </div>
              <div className='mt-10 mb-6 flex select-none mx-auto items-center gap-1 sm:ml-28 lg:ml-0'>
                {!isLoggedIn ? (
                  <h1 className='font-extrabold'>
                    Like this product ? Need to contact Owner ?{" "}
                    <Link
                      href='/signin'
                      className='underline hover:no-underline text-purple'
                    >
                      Sign in first 😊
                    </Link>
                  </h1>
                ) : (
                  <div className='flex flex-row bg-[#585785] w-64 h-20 lg:w-96 lg:h-36 md:w-96 md:h-36 rounded-l-full -mx-1 border-r-4 border-dashed'>
                    <div className='m-auto ml-2'>
                      <Image
                        src='/images/cat-photo.svg'
                        width={130}
                        height={100}
                        alt='profile'
                        className='w-16 h-16 lg:w-32 lg:h-28 md:w-32 md:h-28'
                      />
                    </div>
                    <div className='m-auto lg:m-auto font-poppins text-white text-[14px] lg:text-xl md:text-xl'>
                      <h1 className='font-semibold text-1xl'>
                        {data?.ownerName || "Owner name"}
                      </h1>
                      <h2 className='w-[27vh] overflow-hidden'>
                        <span className='font-bold'>email:</span>{" "}
                        <span className='truncate'>
                          {data?.ownerEmail || "Owner email"}
                        </span>
                      </h2>
                      <h2>
                        <span className='font-bold'>Location:</span>{" "}
                        {data?.ownerLocation || "Owner location"}
                      </h2>
                    </div>
                  </div>
                )}
                <div className='grid justify-items-center bg-orange-500 w-20 h-20 lg:w-36 lg:h-36 md:w-36 md:h-36'>
                  <h1 className='font-poppins text-white font-semibold text-[14px] lg:text-3xl md:text-3xl m-auto'>
                    {data?.price}
                    <span>$</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <Maps />
        </div>
      </section>
    </RootLayout>
  )
}
