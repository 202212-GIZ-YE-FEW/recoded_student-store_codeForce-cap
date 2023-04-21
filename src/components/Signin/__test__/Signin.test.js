import renderer from "react-test-renderer"

import Signin from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Signin />).toJSON()
  expect(tree).toMatchSnapshot()
})
