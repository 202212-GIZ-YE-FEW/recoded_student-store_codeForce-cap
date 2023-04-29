import renderer from "react-test-renderer"

import Aboutus from "../Aboutus"

it("renders correctly", () => {
  const tree = renderer.create(<Aboutus />).toJSON()
  expect(tree).toMatchSnapshot()
})
