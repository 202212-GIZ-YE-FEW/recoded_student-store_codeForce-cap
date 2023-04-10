import { render } from "@testing-library/react"

import UserOrders from "../UserOrders"

describe("userOrders component", () => {
  test("renders correctly", () => {
    const wrapper = render(<UserOrders />)
    expect(wrapper).toMatchSnapshot()
  })
})
