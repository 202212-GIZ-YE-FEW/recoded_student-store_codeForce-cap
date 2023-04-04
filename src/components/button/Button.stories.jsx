import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  text: "Submit",
}

export const OrangeSignIn = Template.bind({})
OrangeSignIn.args = {
  buttonStyle: "orangeSignIn",
  text: "Sign In",
}

export const ForgotPassword = Template.bind({})
ForgotPassword.args = {
  buttonStyle: "forgotPassword",
  text: "Forgot Password",
}

export const OrangeSignUp = Template.bind({})
OrangeSignUp.args = {
  buttonStyle: "orangeSignUp",
  text: "Sign Up",
}

export const PurpleSignIn = Template.bind({})
PurpleSignIn.args = {
  buttonStyle: "purpleSignIn",
  text: "Sign In",
}

export const PurpleSignUp = Template.bind({})
PurpleSignUp.args = {
  buttonStyle: "purpleSignUp",
  text: "Sign Up",
}

export const ListItem = Template.bind({})
ListItem.args = {
  buttonStyle: "listItem",
  text: "List Item",
}

export const SaveChanges = Template.bind({})
SaveChanges.args = {
  buttonStyle: "saveChanges",
  text: "Save Changes",
}
