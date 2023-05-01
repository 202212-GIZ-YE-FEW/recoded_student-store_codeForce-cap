import * as Yup from "yup"

// Define validation schema using Yup
export const signupValidation = Yup.object().shape({
  firstName: Yup.string()
    .required("First name is required")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid first name"
    ),
  surname: Yup.string()
    .required("Surname is required")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid surname"
    ),
  email: Yup.string()
    .email("Invalid email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  schoolName: Yup.string()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid School name"
    )
    .required("School name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be less than 64 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
})
