import Image from "next/image"

import defaultImageInput from "../../../public/images/imagesDefaultInput.png"
import Button from "../button"
import Highlighter from "../highlighter"
import Input from "../input"

export default function Sellitems() {
  return (
    <section className='mx-5 mb-3'>
      <Highlighter text='List an Item/Service' />
      <hr className='w-[95%] h-[1.5px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <br />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4'>
          <label
            htmlFor='primaryImage'
            className='inline-block cursor-pointer bg-[#979797] max-w-[690px] min-h-full'
          >
            <Image
              className='mx-auto'
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
          <span className='flex flex-row sm:flex-col lg:flex-row gap-[60px] sm:gap-4 lg:gap-[60px]'>
            <label
              htmlFor='secondaryImage'
              className='inline-block cursor-pointer bg-[#979797]'
            >
              <Image
                className='mx-auto'
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
            <span className='flex gap-[60px] sm:gap-4 lg:gap-[60px]'>
              <label
                htmlFor='tertiaryImage'
                className='inline-block cursor-pointer bg-[#979797]'
              >
                <Image
                  className='mx-auto'
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
              <label
                htmlFor='quaternaryImage'
                className='inline-block cursor-pointer bg-[#979797]'
              >
                <Image
                  className='mx-auto'
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
            </span>
          </span>
        </div>

        <div>
          <div className='flex flex-col sm:flex-row sm:gap-16'>
            <select
              id='typeSelector'
              className='cursor-pointer text-center block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0'
            >
              <option selected>Choose a type</option>
              <option value='product'>Product</option>
              <option value='service'>Service</option>
            </select>
            <select
              id='categorySelector'
              className='cursor-pointer text-center block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0'
            >
              <option selected>Choose a Category</option>
              <option value='Books'>Books</option>
              <option value='Furniture'>Furniture</option>
              <option value='Electronics'>Electronics</option>
              <option value='Two-wheeler'>Two-wheeler</option>
            </select>
          </div>

          <Input placeholder='Product name' />
          <Input placeholder='Description' className='py-[75px]' />
          <span className='flex justify-between'>
            <Input placeholder='Location' className='w-[47%]' />
            <Input placeholder='Price' className='w-[47%]' />
          </span>
          <span className='flex'>
            <Button buttonStyle='listItem' text='Upload image(s)' />
            <Button buttonStyle='listItem' text='List' type='submit' />
          </span>
        </div>
      </div>
    </section>
  )
}
