// ! The libraries that been used in this code
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import { withTranslation } from "react-i18next"
import PhoneInput from "react-phone-input-2"

// ! The phone input default style
import "react-phone-input-2/lib/style.css"

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
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmNewPassword: "",
    address: "",
    profileImg: "/productImg.png",
  })

  // * Form submitting handler
  const handleSubmit = (event) => {
    event.preventDefault()

    // * Password comparison
    if (formData.newPassword !== formData.confirmNewPassword) {
      return alert(t("password-match"))
    }

    // * Confirmation window
    const confirmSave = window.confirm("Save changes?")
    if (confirmSave) {
      // * display form values in console
      // console.log(formData)

      // * save changes
      alert(t("save"))
    }
  }

  // * Uploaded Image Handler
  const uploadedImgHandler = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFormData({ ...formData, profileImg: reader.result }) // update the profile image in the form data with the user-uploaded image
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
            src={formData.profileImg}
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
            pattern='[a-zA-Z]+'
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            name='surname'
            type='text'
            placeholder={t("surname")}
            required={true}
            minLength={2}
            maxLength={50}
            pattern='[a-zA-Z]+'
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
            value={formData.newPassword}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
          />

          <Input
            name='confirmNewPassword'
            type='password'
            placeholder={t("new-password-confirm")}
            required={true}
            minLength={8}
            maxLength={50}
            value={formData.confirmNewPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmNewPassword: e.target.value })
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
