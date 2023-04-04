import Donation from "./Donation"

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Donation",
  component: Donation,
}

const Template = (args) => <Donation {...args} />

export const SmallHelp = Template.bind({})
SmallHelp.args = {
  cardType: "small",
  amount: "10",
  buttonText: "Donate",
}
