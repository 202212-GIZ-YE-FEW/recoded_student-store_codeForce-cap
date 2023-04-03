import { SectionWrapper } from "@/hoc"
import React from "react"
import Image from "next/image"

function PhotosGallery() {
  return (
    <div>
      <div>
        <Image
          className='h-full w-full max-w-full object-cover'
          src='photo-one.svg'
          width={500}
          height={500}
          alt='Photo-one'
        />
      </div>
      <div>
        <Image
          className='h-full w-full object-cover'
          src='photo-two.svg'
          width={100}
          height={100}
          alt='photo-two'
        />
        <Image
          className='h-full w-full object-cover'
          src='photo-three.svg'
          width={100}
          height={100}
          alt='photo-three'
        />
        <Image
          className='h-full w-full object-cover'
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
