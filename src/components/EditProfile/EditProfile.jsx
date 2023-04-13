/* eslint-disable no-console */
import dynamic from "next/dynamic"
import { useState } from "react"
import PhoneInput from "react-phone-input-2"

import "react-phone-input-2/lib/style.css"

import Button from "../button"
import Input from "../input"

const Maps = dynamic(() => import("./Maps"), {
  ssr: false,
})

export default function EditProfile() {
  // * Form data handler
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmNewPassword: "",
  })

  // * Form submitting handler
  const handleSubmit = (event) => {
    event.preventDefault()

    // * Password comparison
    if (formData.newPassword !== formData.confirmNewPassword) {
      return alert("New passwords do not match.")
    }

    // * Confirmation window
    const confirmSave = window.confirm("Save changes?")
    if (confirmSave) {
      // * display form values in console
      console.log(formData)

      // * save changes
      alert("Changes saved.")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name='name'
        type='text'
        placeholder='Name'
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
        placeholder='Surname'
        required={true}
        minLength={2}
        maxLength={50}
        pattern='[a-zA-Z]+'
        value={formData.surname}
        onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
      />

      <Input
        name='email'
        type='email'
        placeholder='Email'
        required={true}
        maxLength={50}
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <PhoneInput
        country='ye'
        value={formData.phoneNumber}
        onChange={(phoneNumber) => setFormData({ ...formData, phoneNumber })}
        inputStyle={{ width: "100%" }}
      />

      <Input
        name='newPassword'
        type='password'
        placeholder='New Password'
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
        placeholder='Confirm New Password'
        required={true}
        minLength={8}
        maxLength={50}
        value={formData.confirmNewPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmNewPassword: e.target.value })
        }
      />

      <Maps />

      <Button buttonStyle='saveChanges' text='Save Changes' type='submit' />
    </form>
  )
}
