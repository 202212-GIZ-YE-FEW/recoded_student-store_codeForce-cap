import Image from "next/image"

import PhotosGallery from "@/components/PhotosGallery"

import { SectionWrapper } from "@/hoc"

function SingleProduct() {
  return (
    <section className='py-12 sm:py-16'>
      <div className='container mx-auto px-4'>
        <div className='lg:col-gap-12 xl:col-gap-16 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-4 lg:gap-16 justify-items-center'>
          <div className='lg:col-span-2 lg:row-end-1'>
            <PhotosGallery />
          </div>

          <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
            <h1 className='text-2xl font-bold text-[#7874F2] bg-background-title bg-no-repeat sm:text-3xl'>
              3-Seat Sofa, Gray
            </h1>
            <div className='mt-5 items-center font-poppins pl-4'>
              <p className='text-1xl text-[#585785]'>
                <span className='font-bold'>Category: </span>Furniture
              </p>
              <p className='text-1xl text-[#585785]'>
                <span className='font-bold'>Condition: </span>Used
              </p>
            </div>
            <h2 className='mt-8 font-poppins text-[#585785] text-2xl pl-4'>
              Details:
            </h2>
            <hr className='border-2 ml-4 bg-[#7874F2]' />
            <div className='flex flex-col text-[#585785] items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0'></div>
            <div className='font-poppins text-[#585785] text-1xl pl-4'>
              <p>
                I’ve been scratching this sofa for 2 years. Selling due to
                boredom. Bought it from Ikea, model name is : EKTORP. No
                bedbugs, cleaned it.
              </p>
              <p>
                <span className='block'>Dimensions:</span> Width: 218 cm ,Depth:
                88 cm, Height: 88 cm, Seat depth: 49 cm, Seat height: 45 cm.
              </p>
            </div>
            <div className='mt-10 flex select-none flex-wrap items-center gap-1'>
              <div className='flex flex-row bg-[#585785] w-64 h-20 lg:w-96 lg:h-36 md:w-96 md:h-36 rounded-l-full -mx-1 border-r-4 border-dashed'>
                <div className='m-auto ml-2'>
                  <Image
                    src='cat-photo.svg'
                    width={130}
                    height={100}
                    alt=''
                    className='w-16 h-16 lg:w-32 lg:h-28 md:w-32 md:h-28'
                  />
                </div>
                <div className='m-auto lg:m-auto font-poppins text-white text-[14px] lg:text-xl md:text-xl'>
                  <h1 className='font-semibold text-1xl'>Rifik Haspolat</h1>
                  <h2>
                    <span className='font-bold'>email:</span> miyav@gmail.com
                  </h2>
                  <h2>
                    <span className='font-bold'>Location:</span> istanbul/turkey
                  </h2>
                </div>
              </div>
              <div className='grid justify-items-center bg-orange-500 w-20 h-20 lg:w-36 lg:h-36 md:w-36 md:h-36'>
                <h1 className='font-poppins text-white font-semibold text-[14px] lg:text-3xl md:text-3xl m-auto'>
                  150<span>$</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 w-full object-cover grid justify-items-center'>
          <Image src='map.svg' width={1400} height={350} alt='' />
        </div>
      </div>
    </section>
  )
}

export default SectionWrapper(SingleProduct)
