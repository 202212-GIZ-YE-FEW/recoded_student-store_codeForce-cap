import * as Yup from "yup"

export const listingsValidation = Yup.object().shape({
  // primaryImage: Yup.object().shape({
  //   file: Yup.mixed().optional(),
  //   url: Yup.string().url().optional(),
  // }),
  // secondaryImage: Yup.object().shape({
  //   file: Yup.mixed().optional(),
  //   url: Yup.string().url().optional(),
  // }),
  // tertiaryImage: Yup.object().shape({
  //   file: Yup.mixed().optional(),
  //   url: Yup.string().url().optional(),
  // }),
  type: Yup.string().required("Type is required"),
  category: Yup.string().required("Category is required"),
  productName: Yup.string()
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid School name"
    )
    .required("Product name is required"),
  description: Yup.string().required("Description is required"),
  location: Yup.string().required("Location is required"),
  price: Yup.number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
})
