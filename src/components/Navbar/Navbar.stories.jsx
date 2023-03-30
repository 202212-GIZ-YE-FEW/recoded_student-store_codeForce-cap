// Navbar.stories.js

import Navbar from "."

const NavbarStories = {
  title: "Navbar",
  component: Navbar,
  argTypes: {
    backgroundColor: {
      control: "string",
    },
  },
}

const Template = (args) => <Navbar {...args} />

export const Default = Template.bind({})
Default.args = {}

export const HoverTextTeal300 = Template.bind({})
HoverTextTeal300.args = {
  className: "hover:text-teal-300",
}

export default NavbarStories
