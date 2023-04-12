import { useState } from "react"

import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  // * Form data handler
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmNewPassword: "",
    address: "",
  })
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent form from submitting
    alert("Form submitted")
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
      />
      <Input
        name='surname'
        type='text'
        placeholder='Surname'
        required={true}
        minLength={2}
        maxLength={50}
        pattern='[a-zA-Z]+'
      />
      <Input
        name='email'
        type='email'
        placeholder='Email'
        required={true}
        maxLength={50}
        pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
      />
      <Input
        name='phoneNumber'
        type='tel'
        placeholder='Phone number'
        required={true}
        pattern='\d{10,}'
      />
      <Input
        name='newPassword'
        type='password'
        placeholder='New Password'
        required={true}
        minLength={8}
        maxLength={50}
      />
      <Input
        name='confirmNewPassword'
        type='password'
        placeholder='Confirm New Password'
        required={true}
        minLength={8}
        maxLength={50}
      />
      <Button buttonStyle='saveChanges' text='Save Changes' type='submit' />
    </form>
  )
}
