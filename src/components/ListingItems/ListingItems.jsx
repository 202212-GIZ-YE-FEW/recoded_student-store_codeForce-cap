import DOMPurify from "dompurify"
import { addDoc, collection } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useTranslation, withTranslation } from "next-i18next"
import Image from "next/image"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { auth, db, storage, timestamp } from "@/utils/firebase/config"
import { listingsValidation } from "@/utils/schemaValidations/listingItems"

import Button from "../button"
import Highlighter from "../highlighter"
import Input from "../input"

function ListingItems() {
  // Translation state
  const { t } = useTranslation("listingItems")
  // Errors state
  const [errors, setErrors] = useState({})
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
    createdAt: timestamp,
  })

  // Input handler
  const inputsHandler = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: DOMPurify.sanitize(value),
    }))
  }

  // Browser image uploader
  const imageBrowserUploader = (event, imageField) => {
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

  // firebase Image uploader
  async function imageFirebaseUploader(imageField) {
    const image = formData[imageField]
    const storageRef = ref(storage, `images/${image.file.name}`)
    await uploadBytes(storageRef, image.file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  }

  // Submit handler
  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      await listingsValidation.validate(formData, { abortEarly: false })
      toast.info("Pleas wait")
      const user = auth.currentUser
      const uid = user.uid

      const primaryImageURL = await imageFirebaseUploader("primaryImage")
      const secondaryImageURL = await imageFirebaseUploader("secondaryImage")
      const tertiaryImageURL = await imageFirebaseUploader("tertiaryImage")
      const quaternaryImageURL = await imageFirebaseUploader("quaternaryImage")

      // Save the form data to the sellItems collection
      const userCollection = collection(db, "users", uid, "listingItems")
      const docRef = await addDoc(userCollection, formData)

      toast.success(t("addedAlert"), { toastId: docRef.id })

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
        createdAt: timestamp,
      })
    } catch (error) {
      // Setting the error to be displayed from the validationErrors
      toast.error("Oh no There is an error the list doesn't uploaded")
      const schemaErrors = {}
      error.inner.forEach((error) => {
        schemaErrors[error.path] = error.message
      })
      setErrors(schemaErrors)
    }
  }

  return (
    <>
      <ToastContainer pauseOnHover={false} newestOnTop={true} theme='colored' />
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
                className='block drop-shadow-2xl lg:w-full max-h-[340px] sm:max-h-[262px] lg:max-h-[405px]'
                src={formData.primaryImage.url}
                alt={t("primaryImage")}
                width={570}
                height={340}
              />
              <Input
                id='primaryImageInput'
                type='file'
                accept='image/*'
                onChange={(event) =>
                  imageBrowserUploader(event, "primaryImage")
                }
                className='hidden'
              />
            </label>
            <div className='flex flex-row sm:flex-col lg:flex-row gap-10 sm:gap-4 lg:gap-20'>
              <label htmlFor='secondaryImageInput' className='cursor-pointer'>
                <Image // * Second Image
                  className='block drop-shadow-2xl sm:w-full lg:w-[190px] max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
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
                    imageBrowserUploader(event, "secondaryImage")
                  }
                  className='hidden'
                />
              </label>
              <div className='flex gap-10 sm:gap-4 lg:gap-20'>
                <label htmlFor='tertiaryImageInput' className='cursor-pointer'>
                  <Image // * Third Image
                    className='block drop-shadow-2xl max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
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
                      imageBrowserUploader(event, "tertiaryImage")
                    }
                    className='hidden'
                  />
                </label>
                <label
                  htmlFor='quaternaryImageInput'
                  className='cursor-pointer'
                >
                  <Image // * Fourth Image
                    className='block drop-shadow-2xl max-h-[90px] sm:max-h-[137px] lg:max-h-[105px]'
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
                      imageBrowserUploader(event, "quaternaryImage")
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
                onError={`${toast.error(errors.type).type}`}
              >
                <option // * Default value selected
                  value=''
                  hidden={true}
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
                onError={`${toast.error(errors.category).category}`}
              >
                <option // * Default value selected
                  value=''
                  hidden={true}
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
                onError={`${toast.error(errors.productName).productName}`}
              />

              <Input // * Product description input
                name='description'
                placeholder={t("description")}
                className='py-[75px]'
                type='text'
                value={formData.description}
                onChange={inputsHandler}
                onError={`${toast.error(errors.description).description}`}
              />

              <span className='flex gap-4'>
                <Input // * Product location input
                  name='location'
                  placeholder={t("location")}
                  className='w-[47%]'
                  type='text'
                  value={formData.location}
                  onChange={inputsHandler}
                  onError={`${toast.error(errors.location).location}`}
                />

                <Input // * Product price input
                  name='price'
                  placeholder={t("price")}
                  className='w-[47%]'
                  type='text'
                  value={formData.price}
                  onChange={inputsHandler}
                  onError={`${toast.error(errors.price)}`}
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
    </>
  )
}
export default withTranslation("listingItems")(ListingItems)
