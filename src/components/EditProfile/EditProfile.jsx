import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  return (
    <>
      <Input placeholder='Name' type='text' />
      <Input placeholder='Surname' type='text' />
      <Input placeholder='Email' type='email' />
      <Input placeholder='Phone number' type='number' />
      <Input placeholder='New Password' type='password' />
      <Input placeholder='Confirm Nwe Password' type='password' />
      <Button buttonStyle='saveChanges' text='Save Changes' />
    </>
  )
}
