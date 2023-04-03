import renderer from "react-test-renderer"

import SingleProduct from ".."

it("renders correctly", () => {
  const tree = renderer.create(<SingleProduct />).toJSON()
  expect(tree).toMatchSnapshot()
})
