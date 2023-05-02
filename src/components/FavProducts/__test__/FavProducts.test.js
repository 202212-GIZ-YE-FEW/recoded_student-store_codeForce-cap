import renderer from "react-test-renderer"

import FavProducts from "../FavProducts"

it("renders correctly", () => {
  const tree = renderer.create(<FavProducts />).toJSON()
  expect(tree).toMatchSnapshot()
})
