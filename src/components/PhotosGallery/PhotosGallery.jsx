import Image from "next/image"
import { useState } from "react"

function dropImage(
  GALLERY_SVG,
  onChangeImageHandler,
  dropClass,
  iconsize,
  file
) {
  return (
    <div className='w-full'>
      <div className='border border-solid bg-gray-300 border-black rounded relative '>
        <input
          type='file'
          className={dropClass}
          onChange={onChangeImageHandler}
          value={file}
        ></input>
        <div className={iconsize}>
          <Image src={GALLERY_SVG} width={100} height={100} alt='drop image' />
        </div>
      </div>
    </div>
  )
}

function PhotosGallery(props) {
  const [file, setFile] = useState(null)
  const GALLERY_SVG = "/images/gallery.svg"
  const styles = {
    imagefull: "h-full w-full lg:w-full lg:h-full md:w-full object-cover",
    imageblock: "block h-full w-full rounded-lg object-cover object-center",
    imagesize: "lg:w-full md:w-1/2 w-full p-1",
    drop: "cursor-pointer relative opacity-0 w-full ",
    droplarge: "p-14 lg:p-24 md:p-24",
    dropsmall: "p-8 lg:p-10 md:p-10",
    iconlarge: "w-12 absolute top-10 md:top-20 lg:top-20 right-0 left-0 m-auto",
    iconsmall: "w-8 absolute top-8 right-0 left-0 m-auto",
  }

  const onChangeImageHandler = (e) => {
    if (e.target.files?.[0]) {
      const reader = new FileReader()
      reader.onload = () => {
        setFile(reader.result)
      }
      reader.readAsDataURL(e.target.files?.[0])
      e.target.value = ""
    }
  }

  return (
    <div className='flex flex-col lg:flex-col md:flex-row w-full justify-center'>
      <div className='lg:m-0 my-auto w-full justify-center'>
        {props?.photos?.[0].url ? (
          <Image
            className={styles.imagefull}
            src={props?.photos[0].url}
            width={500}
            height={500}
            alt='Photo-one'
          />
        ) : (
          dropImage(
            GALLERY_SVG,
            onChangeImageHandler,
            styles.drop + styles.droplarge,
            styles.iconlarge,
            file
          )
        )}
      </div>
      <div className='flex lg:w-full md:w-1/2 lg:flex-nowrap md:flex-wrap ml-0 lg:ml-0 md:ml-3 mt-3 lg:mt-3 md:mt-0'>
        <div className='w-full p-1'>
          {props?.photos?.[1].url ? (
            <Image
              className={styles.imageblock}
              src={props?.photos[1].url}
              width={500}
              height={500}
              alt='Photo-three'
            />
          ) : (
            dropImage(
              GALLERY_SVG,
              onChangeImageHandler,
              styles.drop + styles.dropsmall,
              styles.iconsmall,
              file
            )
          )}
        </div>
        <div className={styles.imagesize}>
          {props?.photos?.[2].url ? (
            <Image
              className={styles.imageblock}
              src={props?.photos[2].url}
              width={100}
              height={100}
              alt='photo-two'
            />
          ) : (
            dropImage(
              GALLERY_SVG,
              onChangeImageHandler,
              styles.drop + styles.dropsmall,
              styles.iconsmall,
              file
            )
          )}
        </div>
        <div className={styles.imagesize}>
          {props?.photos?.[3].url ? (
            <Image
              className={styles.imageblock}
              src={props?.photos[3].url}
              width={100}
              height={100}
              alt='photo-four'
            />
          ) : (
            dropImage(
              GALLERY_SVG,
              onChangeImageHandler,
              styles.drop + styles.dropsmall,
              styles.iconsmall,
              file
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default PhotosGallery
