import renderer from "react-test-renderer"
import RootLayout from "../RootLayout"

it("renders correctly", () => {
  const tree = renderer.create(<RootLayout />).toJSON()
  expect(tree).toMatchSnapshot()
})
