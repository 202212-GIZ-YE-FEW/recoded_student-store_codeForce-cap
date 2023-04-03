import { SectionWrapper } from "@/hoc"
import React from "react"
import Image from "next/image"

function PhotosGallery() {
  return (
    <div className='flex flex-col lg:flex-col md:flex-row w-full'>
      <div>
        <Image
          className='h-full w-full lg:w-full lg:h-full md:w-96 md:h-60 object-cover'
          src='photo-one.svg'
          width={500}
          height={500}
          alt='Photo-one'
        />
      </div>
      <div className='flex justify-between lg:flex-row md:flex-col'>
        <Image
          className='w-full object-cover'
          src='photo-two.svg'
          width={100}
          height={100}
          alt='photo-two'
        />
        <Image
          className='w-full lg:w-full md:w-60 object-cover'
          src='photo-three.svg'
          width={100}
          height={100}
          alt='photo-three'
        />
        <Image
          className='w-full object-cover'
          src='photo-four.svg'
          width={100}
          height={100}
          alt='photo-four'
        />
      </div>
    </div>
  )
}

export default SectionWrapper(PhotosGallery)
