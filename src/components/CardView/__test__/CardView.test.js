import renderer from "react-test-renderer"

import CardView from ".."

it("renders correctly", () => {
  const tree = renderer.create(<CardView />).toJSON()
  expect(tree).toMatchSnapshot()
})
