import renderer from "react-test-renderer"

import UserOrders from "../UserOrders"

test("UserOrders component renders correctly", () => {
  const component = renderer.create(<UserOrders />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
