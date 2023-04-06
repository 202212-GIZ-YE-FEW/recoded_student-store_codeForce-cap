import Image from "next/image"
import React, { useEffect, useState } from "react"

function dropLargeImage(GALLERY_SVG, onChangeImageHandler) {
  return (
    <div className='w-full'>
      <div className='border border-solid bg-gray-300 border-black rounded relative '>
        <input
          type='file'
          className='cursor-pointer relative opacity-0 w-full p-14 lg:p-24 md:p-24'
          onChange={onChangeImageHandler}
        ></input>
        <div className='w-12 absolute top-10 md:top-20 lg:top-20 right-0 left-0 m-auto'>
          <Image
            src={GALLERY_SVG}
            width={100}
            height={100}
            alt='drop large image'
          />
        </div>
      </div>
    </div>
  )
}

function dropImage(GALLERY_SVG, onChangeImageHandler) {
  return (
    <div className='w-full'>
      <div className='border border-solid bg-gray-300 border-black rounded relative '>
        <input
          type='file'
          className='cursor-pointer relative opacity-0 w-full p-8 lg:p-10 md:p-10'
          onChange={onChangeImageHandler}
        ></input>
        <div className='w-8 absolute top-8 right-0 left-0 m-auto'>
          <Image src={GALLERY_SVG} width={100} height={100} alt='drop image' />
        </div>
      </div>
    </div>
  )
}

function PhotosGallery(props) {
  const [file, setFile] = useState(null)
  const GALLERY_SVG = "gallery.svg"
  const styles = {
    imagefull: "h-full w-full lg:w-full lg:h-full md:w-full object-cover",
    imageblock: "block h-full w-full rounded-lg object-cover object-center",
    imagesize: "lg:w-full md:w-1/2 w-full p-1",
  }

  const onChangeImageHandler = (e) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setFile(reader.result)
      }
      reader.readAsDataURL(e.target.files[0])
      e.target.value = ""
    }
  }

  return (
    <div className='flex flex-col lg:flex-col md:flex-row w-full justify-center'>
      <div className='lg:m-0 my-auto w-full justify-center'>
        {props.largimage ? (
          <Image
            className={styles.imagefull}
            src={props?.largimage}
            width={500}
            height={500}
            alt='Photo-one'
          />
        ) : (
          dropLargeImage(GALLERY_SVG, onChangeImageHandler)
        )}
      </div>
      <div className='flex lg:w-full md:w-1/2 lg:flex-nowrap md:flex-wrap ml-0 lg:ml-0 md:ml-3 mt-3 lg:mt-3 md:mt-0'>
        <div className='w-full p-1'>
          {props.imgone ? (
            <Image
              className={styles.imageblock}
              src={props?.imgone}
              width={500}
              height={500}
              alt='Photo-three'
            />
          ) : (
            dropImage(GALLERY_SVG, onChangeImageHandler)
          )}
        </div>
        <div className={styles.imagesize}>
          {props.imgtwo ? (
            <Image
              className={styles.imageblock}
              src={props?.imgtwo}
              width={100}
              height={100}
              alt='photo-two'
            />
          ) : (
            dropImage(GALLERY_SVG, onChangeImageHandler)
          )}
        </div>
        <div className={styles.imagesize}>
          {props.imgthree ? (
            <Image
              className={styles.imageblock}
              src={props?.imgthree}
              width={100}
              height={100}
              alt='photo-four'
            />
          ) : (
            dropImage(GALLERY_SVG, onChangeImageHandler)
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotosGallery
