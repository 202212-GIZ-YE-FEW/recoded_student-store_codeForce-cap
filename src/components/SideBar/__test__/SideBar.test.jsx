import { render } from "@testing-library/react"

import SideBar from "../SideBar"

describe("SideBar", () => {
  it("renders large screen version correctly", () => {
    const { container } = render(
      <SideBar
        img='/productImg.png'
        name='Test Name'
        email='test@test.com'
        location='Test Location'
        link='/testLink'
        currentPage='editProfile'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders small screen version correctly", () => {
    const { container } = render(
      <SideBar
        img='/productImg.png'
        name='Test Name'
        email='test@test.com'
        location='Test Location'
        link='/testLink'
        currentPage='otherPage'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it("does not render the image in small screen if not on edit profile page", () => {
    const { container } = render(
      <SideBar
        img='/productImg.png'
        name='Test Name'
        email='test@test.com'
        location='Test Location'
        link='/testLink'
        currentPage='otherPage'
      />
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
