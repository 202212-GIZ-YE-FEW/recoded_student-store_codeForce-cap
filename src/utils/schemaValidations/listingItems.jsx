import * as Yup from "yup"

export const listingsValidation = Yup.object().shape({
  type: Yup.string().required(
    "Choose a Type the students need to know what you list for them !"
  ),
  category: Yup.string().required("What is the category of your list ?"),
  productName: Yup.string().required("What is the product name ?"),
  description: Yup.string().required("Please describe your listing"),
  location: Yup.string().required("Location is required"),
  price: Yup.number()
    .required("How much is it coast ?, pleas add a price")
    .min(10)
    .max(1000),
})
