import DOMPurify from "dompurify"
import { addDoc, collection } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import Image from "next/image"
import { useTranslation, withTranslation } from "next-i18next"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import { auth, db, storage, timestamp } from "@/utils/firebase/config"
import { listingsValidation } from "@/utils/schemaValidations/listingItems"
import { useProfileData } from "@/utils/store"

import Button from "../button"
import Highlighter from "../highlighter"
import Input from "../input"

function ListingItems() {
  // User profile to take the name, email, and location to implement it with the product listing collection
  const { profileData } = useProfileData()
  // Translation state
  const { t } = useTranslation("listingItems")
  // Errors state
  const [errors, setErrors] = useState({})
  // Form info
  const [formData, setFormData] = useState({
    primaryImage: { file: "", url: "/images/emptyImage.png" },
    secondaryImage: { file: "", url: "/images/emptyImage.png" },
    tertiaryImage: { file: "", url: "/images/emptyImage.png" },
    quaternaryImage: { file: "", url: "/images/emptyImage.png" },
    type: "",
    category: "",
    productName: "",
    description: "",
    location: "",
    price: "",
    createdAt: timestamp,
  })

  // Inputs verifier and handler
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
    if (!imageField) {
      return ""
    }
    const image = formData[imageField]
    const productName = formData.productName.toLowerCase().replace(/\s+/g, "-")
    const storageRef = ref(
      storage,
      `products/${productName}/${image.file.name}`
    )
    await uploadBytes(storageRef, image.file)
    const downloadURL = await getDownloadURL(storageRef)
    return downloadURL
  }

  // Submit handler
  const submitHandler = async (event) => {
    event.preventDefault()
    try {
      // wait to the schema validation to complete
      await listingsValidation.validate(formData, { abortEarly: false })
      const user = auth.currentUser
      const uid = user.uid

      // Uploader confirmation
      const confirm = window.confirm(t("confirmation"))
      if (!confirm) {
        return
      }
      // Fetch owner name, email, and location from user profile data

      const ownerName = profileData?.firstName + profileData?.surname
      const ownerEmail = user?.email
      const ownerLocation = profileData?.address

      // promise uploader
      const uploadPromise = new Promise((resolve, reject) => {
        ;(async () => {
          try {
            //Images urls handlers
            const primaryImageURL = await imageFirebaseUploader("primaryImage")
            const secondaryImageURL = await imageFirebaseUploader(
              "secondaryImage"
            )
            const tertiaryImageURL = await imageFirebaseUploader(
              "tertiaryImage"
            )
            const quaternaryImageURL = await imageFirebaseUploader(
              "quaternaryImage"
            )

            // new form with the images new urls
            const newFormWithImagesUrls = {
              ...formData,
              primaryImage: { url: primaryImageURL },
              secondaryImage: { url: secondaryImageURL },
              tertiaryImage: { url: tertiaryImageURL },
              quaternaryImage: { url: quaternaryImageURL },
              ownerName,
              ownerEmail,
              ownerLocation,
            }
            if (primaryImageURL !== "") {
              newFormWithImagesUrls.primaryImage = { url: primaryImageURL }
            }
            if (secondaryImageURL !== "") {
              newFormWithImagesUrls.secondaryImage = { url: secondaryImageURL }
            }
            if (tertiaryImageURL !== "") {
              newFormWithImagesUrls.tertiaryImage = { url: tertiaryImageURL }
            }
            if (quaternaryImageURL !== "") {
              newFormWithImagesUrls.quaternaryImage = {
                url: quaternaryImageURL,
              }
            }
            // user collection that will be used to fetch the user listed items
            const userCollection = collection(db, "users", uid, "userListings")
            const userDocRef = await addDoc(
              userCollection,
              newFormWithImagesUrls
            )

            // general collection that will be used to fetch the user listed items in the home page
            const generalCollection = collection(db, "generalListings")
            const generalDocRef = await addDoc(
              generalCollection,
              newFormWithImagesUrls
            )

            // formate the form after uploading success
            setFormData({
              primaryImage: { file: "", url: "/images/emptyImage.png" },
              secondaryImage: { file: "", url: "/images/emptyImage.png" },
              tertiaryImage: { file: "", url: "/images/emptyImage.png" },
              quaternaryImage: { file: "", url: "/images/emptyImage.png" },
              type: "",
              category: "",
              productName: "",
              description: "",
              location: "",
              price: "",
              createdAt: timestamp,
            })

            // success promise
            resolve({ userDocRef, generalDocRef })
            // promise errors
          } catch (error) {
            // error promise
            reject(error)
          }
        })()
      })

      // toast fire promise that shows the promise success or error
      toast.promise(
        // the promise it self
        uploadPromise,
        {
          // promise progress
          pending: t("uploadingMessage"),
          // promise success
          success: t("addedAlert"),
          // promise filer
          error: t("notAddedAlert"),
        },
        {
          // allows for more complex toast message workflows where subsequent toast messages depend
          success: ({ userDocRef, generalDocRef }) => ({
            userToastId: userDocRef.id,
            generalToastId: generalDocRef.id,
          }),
        }
      )
      // submit errors
    } catch (error) {
      // general error message
      toast.error(t("generalError"))
      // schema validation errors
      const schemaErrors = {}
      // aa the schema validation errors to the api errors
      error.inner.forEach((error) => {
        schemaErrors[error.path] = error.message
      })
      // set the errors in the errors handler
      setErrors(schemaErrors)
    }
  }

  return (
    <>
      <ToastContainer
        pauseOnHover={false}
        newestOnTop={true}
        theme='colored'
        className='z-50'
      />
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
            {errors.category}
            <br />
            {errors.type}

            {/* Product Information Inputs */}
            <div>
              <Input // * Product name input
                name='productName'
                placeholder={t("productName")}
                type='text'
                value={formData.productName}
                onChange={inputsHandler}
              />
              {errors.productName}

              <Input // * Product description input
                name='description'
                placeholder={t("description")}
                className='py-[75px]'
                type='text'
                value={formData.description}
                onChange={inputsHandler}
              />
              {errors.description}

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
              {errors.location}
              <br />
              {errors.price}
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
