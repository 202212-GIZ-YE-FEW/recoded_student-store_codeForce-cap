// ! The libraries that been used in this code
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { withTranslation } from "next-i18next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useRef, useState } from "react"
import PhoneInput from "react-phone-input-2"
import { toast, ToastContainer } from "react-toastify"

// ! The phone input default style
import "react-phone-input-2/lib/style.css"
import "react-toastify/dist/ReactToastify.css"

import { auth, db, storage } from "@/utils/firebase/config"
import { useProfileData } from "@/utils/store"

// ! Components import
import Button from "../button"
import Input from "../input"
import Spinner from "../Spinner/Spinner"
// ! Map dynamic import
const Maps = dynamic(() => import("./Maps"), {
  ssr: false,
})

function EditProfile({ t }) {
  const { profileData, isLoading } = useProfileData()
  const profileImageInputRef = useRef(null)

  // * Form data handler
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "967",
    password: "",
    confirmPassword: "",
    address: "",
    profileImg: { file: null, url: "/images/cat-photo.svg" },
    isProfileImgUpdated: true,
  })

  // * Browser image uploader
  const uploadedImgHandler = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        profileImg: {
          file: file,
          url: reader.result,
        },
      })) // update the profile image in the form data with the user-uploaded image
    }
  }

  // firebase Image uploader
  const firebaseImgUploader = async () => {
    try {
      const user = auth.currentUser
      const userId = user.uid
      const file = formData.profileImg.file
      const storageRef = ref(storage, `users/${userId}/${file.name}`)
      await uploadBytes(storageRef, file)
      const url = await getDownloadURL(storageRef)
      return url
    } catch (error) {
      console.error(error)
      return null
    }
  }

  // Check the form to know what is the updated things so that never update everything
  const getUpdatedFields = (user, formData) => {
    const updatedFields = {}
    Object.keys(formData).forEach((key) => {
      if (key === "profileImg") return
      if (formData[key] !== "" && formData[key] !== user[key]) {
        updatedFields[key] = formData[key]
      }
    })
    return updatedFields
  }

  // Updated profile image checker
  const ProfileImgChecker = (event) => {
    const file = event.target.files[0]
    const url = URL.createObjectURL(file)
    setFormData((prevState) => ({
      ...prevState,
      profileImg: { file, url },
      isProfileImgUpdated: true,
    }))
  }

  // * Form submitting handler
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      // * Password comparison
      if (formData.password !== formData.confirmPassword) {
        return alert(t("password-match"))
      }

      // * Confirmation window

      const confirmSave = window.confirm("Save changes?")
      if (!confirmSave) {
        return
      }
      const uploadPromise = new Promise((resolve, reject) => {
        ;(async () => {
          try {
            const user = auth.currentUser
            const userId = user.uid
            // Get the updated fields
            const updatedFields = getUpdatedFields(user, formData)
            // Add the new profile image URL if it has changed
            let profileImgUrl = formData.profileImg.url
            if (formData.isProfileImgUpdated) {
              profileImgUrl = await firebaseImgUploader()
            }
            if (formData.isProfileImgUpdated) {
              updatedFields.profileImg = {
                file: null,
                url: profileImgUrl,
              }
            }
            if (formData.email !== "" && formData.email !== user.email) {
              try {
                await updateEmail(user, formData.email)
              } catch (error) {
                if (error.code === "auth/requires-recent-login") {
                  // Prompt the user to re-enter their email and password
                  const email = prompt("Please re-enter your email")
                  const password = prompt("Please re-enter your password")

                  // Create the credential object
                  const credential = EmailAuthProvider.credential(
                    email,
                    password
                  )

                  // Reauthenticate the user
                  await reauthenticateWithCredential(user, credential)

                  // Retry the email update
                  await updateEmail(user, formData.email)
                } else if (error.code === "auth/user-mismatch") {
                  try {
                    // Prompt the user to re-enter their email and password
                    const email = prompt(
                      "rung email or password, Please re-enter again"
                    )
                    const password = prompt(
                      "rung email or password, Please re-enter again"
                    )

                    // Create the credential object
                    const credential = EmailAuthProvider.credential(
                      email,
                      password
                    )

                    // Reauthenticate the user
                    await reauthenticateWithCredential(user, credential)

                    // Retry the email update
                    await updateEmail(user, formData.email)
                  } catch (error) {
                    toast.error("Error during reauthentication:", error)
                  }
                } else {
                  toast.error("Unhandled error:", error)
                }
              }
            }
            const docRef = doc(db, "users", userId)
            updateDoc(docRef, updatedFields)
            resolve({ docRef })
          } catch (err) {
            reject(err)
            toast.error(err)
          }
        })()
      })

      toast
        .promise(
          // The  promise
          uploadPromise,
          {
            // promise progress
            pending: t("uploadingAlert"),
            // promise success
            success: t("addedAlert"),
            // promise filer
            error: t("notAddedAlert"),
          },
          {
            // allows for more complex toast message workflows where subsequent toast messages depend
            success: ({ docRef }) => ({
              userToastId: docRef.id,
            }),
          }
        )
        .then(() => {
          setFormData({
            firstName: "",
            surname: "",
            email: "",
            phoneNumber: "967",
            password: "",
            confirmPassword: "",
            address: "",
            profileImg: { file: null, url: "/images/cat-photo.svg" },
            isProfileImgUpdated: false,
          })
        })
    } catch (error) {
      toast.error(error)
    }
  }
  if (isLoading) {
    return <Spinner text='Pleas wait ...' />
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer
        pauseOnHover={false}
        newestOnTop={true}
        theme='colored'
        className='z-50'
      />
      <div
        className='grid lg:grid-cols-2 lg:ml-36 w-[86%] overflow-y-auto gap-x-12 mt-10 lg:mt-28 mx-auto'
        // dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        <Input
          className='hidden'
          type='file'
          id='profile-image-input'
          ref={profileImageInputRef}
          accept='image/*'
          onChange={uploadedImgHandler}
        />
        <label
          htmlFor='profileImg'
          className='block lg:hidden cursor-pointer rounded-full'
        >
          <Image
            className='rounded-full mx-auto mb-10'
            src={profileData?.profileImg?.url || formData.profileImg.url}
            alt='...'
            width={274}
            height={275}
          />
          <Input
            className='hidden'
            type='file'
            id='profileImg'
            name='profileImg'
            accept='image/*'
            onChange={uploadedImgHandler}
          />
        </label>
        <span className='lg:h-[448px] md:h-[390px] flex flex-col justify-between '>
          <Input
            name='name'
            type='text'
            placeholder={profileData?.firstName || t("name")}
            minLength={2}
            maxLength={50}
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />

          <Input
            name='surname'
            type='text'
            placeholder={profileData?.surname || t("surname")}
            minLength={2}
            maxLength={50}
            value={formData.surname}
            onChange={(e) =>
              setFormData({ ...formData, surname: e.target.value })
            }
          />

          <Input
            name='email'
            type='email'
            placeholder={profileData?.email || t("email")}
            maxLength={50}
            pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          <PhoneInput
            country='ye'
            value={formData.phoneNumber}
            onChange={(phoneNumber) =>
              setFormData({ ...formData, phoneNumber })
            }
            inputStyle={{ width: "100%", height: "50px" }}
          />

          <Input
            name='newPassword'
            type='password'
            placeholder={t("new-password")}
            minLength={8}
            maxLength={50}
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />

          <Input
            name='confirmNewPassword'
            type='password'
            placeholder={t("new-password-confirm")}
            minLength={8}
            maxLength={50}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <Input
            name='address'
            type='text'
            placeholder={profileData?.address || t("address")}
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </span>
        <span className='mt-3 hidden lg:block'>
          <Maps />
        </span>
        <span className='mx-auto mt-8'>
          <Button
            buttonStyle='saveChanges'
            text={t("save-changes")}
            type='submit'
          />
        </span>
      </div>
    </form>
  )
}

export default withTranslation("editProfile")(EditProfile)
