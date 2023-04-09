import renderer from "react-test-renderer"

import Highlighter from "../Highlighter"

describe("Highlighter component", () => {
  test("category highlighter style snapshot", () => {
    const tree = renderer
      .create(<Highlighter highlighterStyle='category' text='Student store' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("priceFilter highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='priceFilter' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("singleProduct highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='singleProduct' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("productListing highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='productListing' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("donate highlighter style snapshot", () => {
    const tree = renderer
      .create(<Highlighter highlighterStyle='donate' text='Student store' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("donating highlighter style snapshot", () => {
    const tree = renderer
      .create(<Highlighter highlighterStyle='donating' text='Student store' />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("ordersPage highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='ordersPage' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("listingPage highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='listingPage' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("editProfile highlighter style snapshot", () => {
    const tree = renderer
      .create(
        <Highlighter highlighterStyle='editProfile' text='Student store' />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
