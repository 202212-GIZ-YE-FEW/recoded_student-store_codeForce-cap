import SideBar from "./SideBar"

export default {
  title: "Components/SideBar",
  component: SideBar,
  argTypes: {
    currentPage: {
      control: {
        type: "select",
        options: ["editProfile", "myListing", "myOrders"],
      },
    },
    img: { control: { type: "text" } },
    name: { control: { type: "text" } },
    email: { control: { type: "text" } },
    location: { control: { type: "text" } },
    link: { control: { type: "text" } },
    backgroundColor: { control: { type: "color" } },
  },
}

const Template = ({ backgroundColor, ...args }) => (
  <div style={{ backgroundColor }}>
    <SideBar {...args} />
  </div>
)

export const LargeScreen = Template.bind({})
LargeScreen.args = {
  currentPage: "editProfile",
  img: "/productImg.png",
  name: "John Doe",
  email: "john.doe@example.com",
  location: "New York",
  link: "/",
  backgroundColor: "#f5f5f5",
}

export const SmallScreen = Template.bind({})
SmallScreen.args = {
  currentPage: "editProfile",
  img: "/productImg.png",
  name: "John Doe",
  email: "john.doe@example.com",
  location: "New York",
  link: "/",
  backgroundColor: "#f5f5f5",
}
