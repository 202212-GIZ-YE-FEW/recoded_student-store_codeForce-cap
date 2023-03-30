import renderer from "react-test-renderer"

import Price from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Price />).toJSON()
  expect(tree).toMatchSnapshot()
})
