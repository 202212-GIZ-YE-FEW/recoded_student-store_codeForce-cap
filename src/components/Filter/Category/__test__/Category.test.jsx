import renderer from "react-test-renderer"

import Category from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Category />).toJSON()
  expect(tree).toMatchSnapshot()
})
