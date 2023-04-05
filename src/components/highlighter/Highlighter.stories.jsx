import Highlighter from "./Highlighter"

export default {
  title: "Components/Highlighter",
  component: Highlighter,
}

const Template = (args) => <Highlighter {...args} />

export const CategoryHighlighter = Template.bind({})
CategoryHighlighter.args = {
  highlighterStyle: "category",
  text: "Student store",
  className: "",
}

export const PriceFilterHighlighter = Template.bind({})
PriceFilterHighlighter.args = {
  highlighterStyle: "priceFilter",
  text: "Price filter",
  className: "",
}

export const SingleProductHighlighter = Template.bind({})
SingleProductHighlighter.args = {
  highlighterStyle: "singleProduct",
  text: "Product name",
  className: "",
}

export const ProductListingHighlighter = Template.bind({})
ProductListingHighlighter.args = {
  highlighterStyle: "productListing",
  text: "Product name",
  className: "",
}

export const DonateHighlighter = Template.bind({})
DonateHighlighter.args = {
  highlighterStyle: "donate",
  text: "Donate now",
  className: "",
}

export const DonatingHighlighter = Template.bind({})
DonatingHighlighter.args = {
  highlighterStyle: "donating",
  text: "Donate now",
  className: "",
}

export const OrdersPageHighlighter = Template.bind({})
OrdersPageHighlighter.args = {
  highlighterStyle: "ordersPage",
  text: "Orders",
  className: "",
}

export const ListingPageHighlighter = Template.bind({})
ListingPageHighlighter.args = {
  highlighterStyle: "listingPage",
  text: "Product listing",
  className: "",
}

export const EditProfileHighlighter = Template.bind({})
EditProfileHighlighter.args = {
  highlighterStyle: "editProfile",
  text: "Edit profile",
  className: "",
}
