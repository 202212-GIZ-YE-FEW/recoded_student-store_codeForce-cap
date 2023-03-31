import renderer from "react-test-renderer"

import Signup from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Signup />).toJSON()
  expect(tree).toMatchSnapshot()
})
