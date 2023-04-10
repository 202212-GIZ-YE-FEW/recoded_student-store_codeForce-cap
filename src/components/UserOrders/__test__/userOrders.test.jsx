import { render } from "@testing-library/react"

import UserOrders from "../UserOrders"

describe("UserOrders component", () => {
  test("renders correctly", () => {
    const wrapper = render(<UserOrders />)
    expect(wrapper).toMatchSnapshot()
  })
})
