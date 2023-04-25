import renderer from "react-test-renderer"

import ListingItems from "../ListingItems"

it("renders correctly", () => {
  const tree = renderer.create(<ListingItems />).toJSON()
  expect(tree).toMatchSnapshot()
})
