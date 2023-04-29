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
    .required("How much is it coast ?")
    .min(0, "Price must be greater than or equal to 0")
    .max(1000, "Price must be less than or equal to 1000 $"),
})
