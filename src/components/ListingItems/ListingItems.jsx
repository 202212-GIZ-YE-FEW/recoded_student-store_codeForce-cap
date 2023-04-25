import { addDoc, collection } from "firebase/firestore"
import { useTranslation, withTranslation } from "next-i18next"
import Image from "next/image"
import { useState } from "react"

import { db } from "@/utils/firebase/config"

import Button from "../button"
import Highlighter from "../highlighter"
import Input from "../input"

function Sellitems() {
  const { t } = useTranslation("listingItems")
  // Form data handler
  const [formData, setFormData] = useState({
    primaryImage: { file: null, url: "/images/emptyImage.png" },
    secondaryImage: { file: null, url: "/images/emptyImage.png" },
    tertiaryImage: { file: null, url: "/images/emptyImage.png" },
    quaternaryImage: { file: null, url: "/images/emptyImage.png" },
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
  const uploadedImageHandler = (event, imageField) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [imageField]: {
            file: file,
            url: reader.result,
          },
        }))
      }
    }
  }

  // Submit handler
  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      // Save the form data to the sellItems collection
      const docRef = await addDoc(collection(db, "listing Items"), formData)

      alert(t("addedAlert"), docRef.id)

      // Clear the form data
      setFormData({
        primaryImage: { file: null, url: "/images/emptyImage.png" },
        secondaryImage: { file: null, url: "/images/emptyImage.png" },
        tertiaryImage: { file: null, url: "/images/emptyImage.png" },
        quaternaryImage: { file: null, url: "/images/emptyImage.png" },
        type: "",
        category: "",
        productName: "",
        description: "",
        location: "",
        price: "",
      })
    } catch (error) {
      alert(t("notAddedAlert"), error)
    }
  }

  return (
    <form onSubmit={submitHandler} className='mx-5 mb-3'>
      {/* Head text */}
      <Highlighter text={`${t("headerText")}`} />

      {/* Black line between the head text and the content*/}
      <hr className='w-[100%] h-[1.5px] mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700'></hr>
      <br />

      {/* Displayed images */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-5'>
          <label htmlFor='primaryImageInput' className='cursor-pointer'>
            <Image // * First Image
              className='block drop-shadow-2xl lg:w-full'
              src={formData.primaryImage.url}
              alt={t("primaryImage")}
              width={570}
              height={340}
            />
            <Input
              id='primaryImageInput'
              type='file'
              accept='image/*'
              onChange={(event) => uploadedImageHandler(event, "primaryImage")}
              className='hidden'
            />
          </label>
          <div className='flex flex-row sm:flex-col lg:flex-row gap-10 sm:gap-4 lg:gap-20'>
            <label htmlFor='secondaryImageInput' className='cursor-pointer'>
              <Image // * Second Image
                className='block drop-shadow-2xl sm:w-full lg:w-[190px]'
                src={formData.secondaryImage.url}
                alt={t("secondaryImage")}
                width={190}
                height={137}
              />
              <Input
                id='secondaryImageInput'
                type='file'
                accept='image/*'
                onChange={(event) =>
                  uploadedImageHandler(event, "secondaryImage")
                }
                className='hidden'
              />
            </label>
            <div className='flex gap-10 sm:gap-4 lg:gap-20'>
              <label htmlFor='tertiaryImageInput' className='cursor-pointer'>
                <Image // * Third Image
                  className='block drop-shadow-2xl'
                  src={formData.tertiaryImage.url}
                  alt={t("tertiaryImage")}
                  width={190}
                  height={137}
                />
                <Input
                  id='tertiaryImageInput'
                  type='file'
                  accept='image/*'
                  onChange={(event) =>
                    uploadedImageHandler(event, "tertiaryImage")
                  }
                  className='hidden'
                />
              </label>
              <label htmlFor='quaternaryImageInput' className='cursor-pointer'>
                <Image // * Fourth Image
                  className='block drop-shadow-2xl'
                  src={formData.quaternaryImage.url}
                  alt={t("quaternaryImage")}
                  width={190}
                  height={137}
                />
                <Input
                  id='quaternaryImageInput'
                  type='file'
                  accept='image/*'
                  onChange={(event) =>
                    uploadedImageHandler(event, "quaternaryImage")
                  }
                  className='hidden'
                />
              </label>
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
                value='default value'
                selected
              >
                {t("typeSelector")}
              </option>
              <option value='product'>{t("product")}</option>
              <option value='service'>{t("service")}</option>
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
                value='default value'
                selected
              >
                {t("categorySelector")}
              </option>
              <option value='Books'>{t("books")}</option>
              <option value='Furniture'>{t("furniture")}</option>
              <option value='Electronics'>{t("electronics")}</option>
              <option value='Two-wheeler'>{t("two-wheeler")}</option>
            </select>
          </div>

          {/* Product Information Inputs */}
          <div>
            <Input // * Product name input
              name='productName'
              placeholder={t("productName")}
              type='text'
              value={formData.productName}
              onChange={inputsHandler}
            />
            <Input // * Product description input
              name='description'
              placeholder={t("description")}
              className='py-[75px]'
              type='text'
              value={formData.description}
              onChange={inputsHandler}
            />
            <span className='flex gap-4'>
              <Input // * Product location input
                name='location'
                placeholder={t("location")}
                className='w-[47%]'
                type='text'
                value={formData.location}
                onChange={inputsHandler}
              />
              <Input // * Product price input
                name='price'
                placeholder={t("price")}
                className='w-[47%]'
                type='text'
                value={formData.price}
                onChange={inputsHandler}
              />
            </span>

            <span className='flex'>
              <Button // * Image uploader button
                buttonStyle='uploadImage'
                text={t("uploadImage")}
                type='button'
              />
              <Button // * Submission button
                buttonStyle='listItem'
                text={t("list")}
                type='submit'
              />
            </span>
          </div>
        </div>
      </div>
    </form>
  )
}
export default withTranslation("listingItems")(Sellitems)
