import renderer from "react-test-renderer"

import UserOrders from "../UserOrders"

it("renders correctly", () => {
  const tree = renderer.create(<UserOrders />).toJSON()
  expect(tree).toMatchSnapshot()
})
