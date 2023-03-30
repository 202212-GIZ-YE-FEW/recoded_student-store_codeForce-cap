import renderer from "react-test-renderer"

import ProductFilter from "."

it("renders correctly", () => {
  const tree = renderer.create(<ProductFilter />).toJSON()
  expect(tree).toMatchSnapshot()
})
