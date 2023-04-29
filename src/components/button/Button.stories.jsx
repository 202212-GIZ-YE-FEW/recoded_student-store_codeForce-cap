import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Submit",
  type: "button",
}

export const OrangeSignIn = Template.bind({})
OrangeSignIn.args = {
  buttonStyle: "orangeSignIn",
  text: "Sign In",
  type: "button",
}

export const ForgotPassword = Template.bind({})
ForgotPassword.args = {
  buttonStyle: "forgotPassword",
  text: "Forgot Password",
  type: "button",
}

export const OrangeSignUp = Template.bind({})
OrangeSignUp.args = {
  buttonStyle: "orangeSignUp",
  text: "Sign Up",
  type: "button",
}

export const PurpleSignIn = Template.bind({})
PurpleSignIn.args = {
  buttonStyle: "purpleSignIn",
  text: "Sign In",
  type: "button",
}

export const PurpleSignUp = Template.bind({})
PurpleSignUp.args = {
  buttonStyle: "purpleSignUp",
  text: "Sign Up",
  type: "button",
}

export const ListItem = Template.bind({})
ListItem.args = {
  buttonStyle: "listItem",
  text: "List Item",
  type: "button",
}

export const UploadImage = Template.bind({})
UploadImage.args = {
  buttonStyle: "uploadImage",
  text: "Upload Image",
  type: "button",
}

export const SaveChanges = Template.bind({})
SaveChanges.args = {
  buttonStyle: "saveChanges",
  text: "Save Changes",
  type: "button",
  handleClick: () => console.log("Changes saved!"),
}
