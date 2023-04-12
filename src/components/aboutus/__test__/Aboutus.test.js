import renderer from "react-test-renderer"

import Aboutus from ".."

it("renders correctly", () => {
  const tree = renderer.create(<Aboutus />).toJSON()
  expect(tree).toMatchSnapshot()
})
