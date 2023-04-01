import Image from "next/image"

import { SectionWrapper } from "@/hoc"

function ProductListing() {
  return (
    <div className='bg-clay p-10'>
      <div className='border-b-2 border-gray-300 p-2 pb-6'>
        <h1 className='brush w-fit font-bold text-purple xxs:text-2xl sm:text-3xl'>
          list-an-Item/Service
        </h1>
      </div>
      <div className='grid pt-8 md:gap-2 lg:grid-cols-2'>
        {/* product photos & info */}
        <div className='grid gap-3 xss:mb-0 md:grid-flow-row lg:mb-0'>
          {/* photos */}
          <div className='grid items-center justify-center'>
            {/* main photo */}
            <Image
              src='/productImg.png'
              alt='Image'
              width={620}
              height={340}
              className='zoom flashing w-[32rem] rounded-xl shadow-xl hover:cursor-pointer'
            />
          </div>
          <div className='grid justify-center xxs:mx-0 xxs:scale-90 xxs:grid-cols-3 xxs:gap-4 md:mx-[6rem] md:scale-100 md:grid-cols-3 lg:mx-0 xl:px-[4rem]'>
            {/* the 3 photos */}
            <div className='grid justify-center'>
              <Image
                src='/productImg.png'
                alt='Image'
                width={190}
                height={140}
                className='zoom flashing w-[32rem] rounded-xl shadow-xl hover:cursor-pointer'
              />
            </div>
            <div className='grid justify-center'>
              <Image
                src='/productImg.png'
                alt='Image'
                width={190}
                height={140}
                className='zoom flashing w-[32rem] rounded-xl shadow-xl hover:cursor-pointer'
              />
            </div>
            <div className='grid justify-center'>
              <Image
                src='/productImg.png'
                alt='Image'
                width={190}
                height={140}
                className='zoom flashing w-[32rem] rounded-xl shadow-xl hover:cursor-pointer'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(ProductListing)
