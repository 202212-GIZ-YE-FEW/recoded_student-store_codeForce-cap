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
  type: Yup.string().required(
    "Choose a Type the students need to know what you list for them !"
  ),
  category: Yup.string().required("What is the category of your list ?"),
  productName: Yup.string().required("What is the product name ?"),
  description: Yup.string().required("Please describe your listing"),
  location: Yup.string().required("Location is required"),
  price: Yup.number()
    .required("How much is it coast ?, pleas add a price")
    .min(3)
    .max(1000),
})
