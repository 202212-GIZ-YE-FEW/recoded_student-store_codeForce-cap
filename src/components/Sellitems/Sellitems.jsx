import Image from "next/image"

import defaultImageInput from "../../../public/images/imagesDefaultInput.png"
import Highlighter from "../highlighter"
import Input from "../input"

export default function Sellitems() {
  return (
    <div>
      <Highlighter text='List an Item/Service' />
      <label htmlFor='primaryImage' className='inline-block cursor-pointer'>
        <Image
          src={defaultImageInput}
          alt='primaryImage'
          width={620}
          height={340}
        />
        <Input
          className='hidden'
          type='file'
          id='primaryImage'
          name='primaryImage'
          accept='image/*'
        />
      </label>
      <label htmlFor='secondaryImage' className='inline-block cursor-pointer'>
        <Image
          src={defaultImageInput}
          alt='secondaryImage'
          width={190}
          height={137}
        />
        <Input
          className='hidden'
          type='file'
          id='secondaryImage'
          name='secondaryImage'
          accept='image/*'
        />
      </label>
      <label htmlFor='tertiaryImage' className='inline-block cursor-pointer'>
        <Image
          src={defaultImageInput}
          alt='tertiaryImage'
          width={190}
          height={137}
        />
        <Input
          className='hidden'
          type='file'
          id='tertiaryImage'
          name='tertiaryImage'
          accept='image/*'
        />
      </label>
      <label htmlFor='quaternaryImage' className='inline-block cursor-pointer'>
        <Image
          src={defaultImageInput}
          alt='quaternaryImage'
          width={190}
          height={137}
        />
        <Input
          className='hidden'
          type='file'
          id='quaternaryImage'
          name='quaternaryImage'
          accept='image/*'
        />
      </label>

      <select
        id='typeSelector'
        className='cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0'
      >
        <option selected>Choose a type</option>
        <option value='product'>Product</option>
        <option value='service'>Service</option>
      </select>
      <select
        id='categorySelector'
        className='cursor-pointer block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0'
      >
        <option selected>Category</option>
        <option value='Books'>Books</option>
        <option value='Furniture'>Furniture</option>
        <option value='Electronics'>Electronics</option>
        <option value='Two-wheeler'>Two-wheeler</option>
      </select>
    </div>
  )
}
