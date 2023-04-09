import renderer from "react-test-renderer"

import PhotosGallery from ".."

it("renders correctly", () => {
  const tree = renderer.create(<PhotosGallery />).toJSON()
  expect(tree).toMatchSnapshot()
})
