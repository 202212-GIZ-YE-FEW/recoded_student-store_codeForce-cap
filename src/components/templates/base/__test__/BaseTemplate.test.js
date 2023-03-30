import renderer from "react-test-renderer"

import BaseTemplate from "../BaseTemplate"

it("renders correctly", () => {
  const tree = renderer.create(<BaseTemplate />).toJSON()
  expect(tree).toMatchSnapshot()
})
