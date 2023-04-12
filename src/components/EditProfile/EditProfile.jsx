import Button from "../button"
import Input from "../input"

export default function EditProfile() {
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent form from submitting
    alert("Form submitted")
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder='Name' type='text' required />
      <Input placeholder='Surname' type='text' />
      <Input placeholder='Email' type='email' required />
      <Input placeholder='Phone number' type='number' />
      <Input placeholder='New Password' type='password' required />
      <Input placeholder='Confirm Nwe Password' type='password' />
      <Button buttonStyle='saveChanges' text='Save Changes' type='submit' />
    </form>
  )
}
