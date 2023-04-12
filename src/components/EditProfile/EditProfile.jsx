import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  return (
    <>
      <Input placeholder='Name' />
      <Input placeholder='Surname' />
      <Input placeholder='Email' />
      <Input placeholder='Phone number' />
      <Input placeholder='New Password' />
      <Input placeholder='Confirm Nwe Password' />
      <Button buttonStyle='saveChanges' text='Save Changes' />
    </>
  )
}
