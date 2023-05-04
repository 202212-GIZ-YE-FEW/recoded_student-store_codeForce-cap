// ! The libraries that been used in this code
import { doc, updateDoc } from "firebase/firestore"
import { getStorage, ref, uploadBytes } from "firebase/storage"
import { withTranslation } from "next-i18next"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import { ToastContainer, toast } from "react-toastify"

// ! The phone input default style
import "react-phone-input-2/lib/style.css"
import "react-toastify/dist/ReactToastify.css"

import { auth, db } from "@/utils/firebase/config"

// ! Components import
import Button from "../button"
import Input from "../input"
// ! Map dynamic import
const Maps = dynamic(() => import("./Maps"), {
  ssr: false,
})

function EditProfile({ t }) {
  // * Form data handler
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    profileImg: { file: null, url: "/images/cat-photo.svg" },
  })

  // * Browser image uploader
  const uploadedImgHandler = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImg: {
          file: file,
          url: reader.result,
        },
      }) // update the profile image in the form data with the user-uploaded image
    }
  }

  // firebase Image uploader
  const firebaseImgUploader = async () => {
    try {
      const storage = getStorage()
      const user = auth.currentUser
      const userId = user.uid
      const file = formData.profileImg.file
      const storageRef = ref(storage, `users/${userId}/${file.name}`)
      const snapshot = await uploadBytes(storageRef, file)
      const url = await snapshot.ref.getDownloadURL()
      return url
    } catch (error) {
      console.error(error)
      return null
    }
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
            const profileImgUrl = await firebaseImgUploader()
            const user = auth.currentUser
            const userId = user.uid
            const docRef = doc(db, "users", userId)
            const updatedForm = {
              ...formData,
              profileImg: {
                file: null,
                url: profileImgUrl,
              },
            }
            updateDoc(docRef, updatedForm)
            resolve({ docRef })
          } catch (err) {
            reject(err)
            alert(err)
          }
        })()
      })

      toast
        .promise(
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
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            address: "",
            profileImg: { file: null, url: "/images/cat-photo.svg" },
          })
        })
    } catch (error) {
      alert(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div
        className='grid lg:grid-cols-2 lg:ml-36 w-[86%] overflow-y-auto gap-x-12 mt-10 lg:mt-28 mx-auto h-[577px] md:h-[744px] lg:h-[100%]'
        // dir={t("language") === "ar" ? "rtl" : "ltr"}
      >
        <label
          htmlFor='profileImg'
          className='block lg:hidden cursor-pointer rounded-full'
        >
          <Image
            className='rounded-full mx-auto mb-10'
            src={formData.profileImg.url}
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
            placeholder={t("name")}
            required={true}
            minLength={2}
            maxLength={50}
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />

          <Input
            name='surname'
            type='text'
            placeholder={t("surname")}
            required={true}
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
            placeholder={t("email")}
            required={true}
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
            required={true}
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
            required={true}
            minLength={8}
            maxLength={50}
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          <Input
            className='lg:hidden block'
            name='address'
            type='text'
            placeholder={t("address")}
            required={true}
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

export default withTranslation("signup")(EditProfile)
