import renderer from "react-test-renderer"

import ProductList from "../index"

it("renders correctly", () => {
  const tree = renderer.create(<ProductList />).toJSON()
  expect(tree).toMatchSnapshot()
})
