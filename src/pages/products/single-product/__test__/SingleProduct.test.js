import { it } from "@jest/globals"
import renderer from "react-test-renderer"

import SingleProduct from "../single-product"

it("renders correctly", () => {
  const tree = renderer.create(<SingleProduct />).toJSON()
  expect(tree).toMatchSnapshot()
})
