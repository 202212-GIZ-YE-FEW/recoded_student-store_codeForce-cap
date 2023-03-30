import renderer from "react-test-renderer"

import Buttons from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Buttons />).toJSON()
  expect(tree).toMatchSnapshot()
})
