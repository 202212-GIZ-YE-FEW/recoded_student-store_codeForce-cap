import Image from "next/image"
import { useState } from "react"

import Button from "../button"
import Highlighter from "../highlighter"
import Input from "../input"

export default function Sellitems() {
  // Form data handler
  const [formData, setFormData] = useState({
    primaryImage: "/images/emptyImage.png",
    secondaryImage: "/images/emptyImage.png",
    tertiaryImage: "/images/emptyImage.png",
    quaternaryImage: "/images/emptyImage.png",
    type: "",
    category: "",
    productName: "",
    description: "",
    location: "",
    price: "",
  })

  // Input handler
  const inputsHandler = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // Image upload handler
  const UploadedImageHandler = (event, imageField) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [imageField]: reader.result,
        }))
      }
    }
  }

  // Submit handler
  const submitHandler = (event) => {
    event.preventDefault()
    // Display the submitted form in the consol
    console.log(formData)
  }

  return (
    <form onSubmit={submitHandler} className='mx-5 mb-3'>
      {/* Head text */}
      <Highlighter text='List an Item/Service' />

      {/* Black line between the head text and the content*/}
      <hr className='w-[100%] h-[1.5px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <br />

      {/* Displayed images */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-5'>
          <span>
            <Image // * First Image
              className='block drop-shadow-2xl lg:w-full'
              src={formData.primaryImage}
              alt='primaryImage'
              width={570}
              height={340}
            />
          </span>
          <div className='flex flex-row sm:flex-col lg:flex-row gap-10 sm:gap-4 lg:gap-20'>
            <span>
              <Image // * Second Image
                className='block drop-shadow-2xl sm:w-full lg:w-[190px]'
                src={formData.secondaryImage}
                alt='secondaryImage'
                width={190}
                height={137}
              />
            </span>
            <div className='flex gap-10 sm:gap-4 lg:gap-20'>
              <span>
                <Image // * Third Image
                  className='block drop-shadow-2xl'
                  src={formData.tertiaryImage}
                  alt='tertiaryImage'
                  width={190}
                  height={137}
                />
              </span>
              <span>
                <Image // * Fourth Image
                  className='block drop-shadow-2xl'
                  src={formData.quaternaryImage}
                  alt='quaternaryImage'
                  width={190}
                  height={137}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Selectors */}
        <div>
          <div className='flex flex-col sm:flex-row sm:gap-16'>
            {/* //* Type Selector */}
            <select
              id='typeSelector'
              name='type'
              value={formData.type}
              onChange={inputsHandler}
              className='cursor-pointer text-center block py-2.5 w-full text-md text-gray-600 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-700 dark:border-gray-700 focus:outline-none focus:ring-0'
            >
              <option // * Default value selected
                selected
              >
                Choose a type
              </option>
              <option value='product'>Product</option>
              <option value='service'>Service</option>
            </select>

            {/* //* Category Selector */}
            <select
              id='categorySelector'
              name='category'
              value={formData.category}
              onChange={inputsHandler}
              className='cursor-pointer text-center block py-2.5 w-full text-md text-gray-600 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-700 dark:border-gray-700 focus:outline-none focus:ring-0'
            >
              <option // * Default value selected
                selected
              >
                Choose a Category
              </option>
              <option value='Books'>Books</option>
              <option value='Furniture'>Furniture</option>
              <option value='Electronics'>Electronics</option>
              <option value='Two-wheeler'>Two-wheeler</option>
            </select>
          </div>

          {/* Product Information Inputs */}
          <div>
            <Input // * Product name input
              name='productName'
              placeholder='Product name'
              type='text'
              value={formData.productName}
              onChange={inputsHandler}
            />
            <Input // * Product description input
              name='description'
              placeholder='Description'
              className='py-[75px]'
              type='text'
              value={formData.description}
              onChange={inputsHandler}
            />
            <span className='flex gap-4'>
              <Input // * Product location input
                name='location'
                placeholder='Location'
                className='w-[47%]'
                type='text'
                value={formData.location}
                onChange={inputsHandler}
              />
              <Input // * Product price input
                name='price'
                placeholder='Price'
                className='w-[47%]'
                type='text'
                value={formData.price}
                onChange={inputsHandler}
              />
            </span>

            <span className='flex'>
              <Button // * Image uploader button
                buttonStyle='uploadImage'
                text='Upload image(s)'
                type='button'
              />
              <Button // * Submission button
                buttonStyle='listItem'
                text='List'
                type='submit'
              />
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
