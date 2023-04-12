import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  return (
    <>
      <Input placeholder='Name' type='text' required />
      <Input placeholder='Surname' type='text' />
      <Input placeholder='Email' type='email' required />
      <Input placeholder='Phone number' type='number' />
      <Input placeholder='New Password' type='password' required />
      <Input placeholder='Confirm Nwe Password' type='password' />
      <Button buttonStyle='saveChanges' text='Save Changes' />
    </>
  )
}
