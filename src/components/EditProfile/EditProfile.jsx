import { useEffect, useState } from "react"

import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  // * Location constant
  const [location, setLocation] = useState("")

  // * Geolocation handler
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        setLocation(`(${latitude}, ${longitude})`)
      },
      (error) => {
        console.error(error)
      }
    )
  }, [])

  // * Form data handler
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    newPassword: "",
    confirmNewPassword: "",
    address: location,
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
      <Input
        name='phoneNumber'
        type='tel'
        placeholder='Phone number'
        required={true}
        pattern='\d{10,}'
        value={formData.phoneNumber}
        onChange={(e) =>
          setFormData({ ...formData, phoneNumber: e.target.value })
        }
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
      <Input
        name='address'
        type='text'
        placeholder='Address'
        required={true}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button buttonStyle='saveChanges' text='Save Changes' type='submit' />
    </form>
  )
}
