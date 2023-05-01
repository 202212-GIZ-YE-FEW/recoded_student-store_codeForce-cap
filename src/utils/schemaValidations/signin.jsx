import * as Yup from "yup"

// Define validation schema using Yup
export const signinValidation = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("Email is can't be empty!"),
  password: Yup.string().required("Password can't be empty!"),
})
