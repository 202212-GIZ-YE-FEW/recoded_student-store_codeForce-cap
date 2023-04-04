import { SectionWrapper } from "@/hoc"
import React from "react"
import Image from "next/image"

function PhotosGallery() {
  return (
    <div className='flex flex-col lg:flex-col md:flex-row w-full justify-center'>
      <div className='lg:m-0 my-auto'>
        <Image
          className='h-full w-full lg:w-full lg:h-full md:w-96 md:h-60 object-cover'
          src='photo-one.svg'
          width={500}
          height={500}
          alt='Photo-one'
        />
      </div>
      <div className='flex lg:w-full md:w-1/3 lg:flex-nowrap md:flex-wrap'>
        <div className='w-full p-1'>
          <Image
            className='block h-full w-full rounded-lg object-cover object-center'
            src='photo-three.svg'
            width={500}
            height={500}
            alt='Photo-three'
          />
        </div>
        <div className='lg:w-full md:w-1/2 w-full p-1'>
          <Image
            className='block h-full w-full rounded-lg object-cover object-center'
            src='photo-two.svg'
            width={100}
            height={100}
            alt='photo-two'
          />
        </div>
        <div className='lg:w-full md:w-1/2 w-full p-1'>
          <Image
            className='block h-full w-full rounded-lg object-cover object-center'
            src='photo-four.svg'
            width={100}
            height={100}
            alt='photo-four'
          />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(PhotosGallery)
