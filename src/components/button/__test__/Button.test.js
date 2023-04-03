import { fireEvent, render } from "@testing-library/react"
import renderer from "react-test-renderer"

import Button from "../Button"

describe("Button component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Button text='test' />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("calls handleClick function when button is clicked", () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button text='test' handleClick={handleClick} />
    )
    const button = getByText("test")
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it("applies the correct button style based on the buttonStyle prop", () => {
    const { getByText } = render(
      <Button text='test' buttonStyle='orangeSignUp' />
    )
    const button = getByText("test")
    expect(button.classList.contains("bg-pumpkin")).toBe(true)
    expect(button.classList.contains("rounded-lg")).toBe(true)
    expect(button.classList.contains("text-white")).toBe(true)
  })

  it("renders the correct button text based on the text prop", () => {
    const { getByText } = render(<Button text='test' />)
    const button = getByText("test")
    expect(button).toBeInTheDocument()
  })

  // it("renders the correct icon based on the icon prop", () => {
  //   const { getByTestId } = render(<Button text='test' icon='fa fa-plus' />)
  //   const icon = getByTestId("button-icon")
  //   expect(icon).toBeInTheDocument()
  // })

  it("renders with default props when no props are provided", () => {
    const { getByText } = render(<Button text='submit' />)
    const button = getByText("submit")
    expect(button.classList.contains("bg-pumpkin")).toBe(true)
    expect(button.classList.contains("rounded-lg")).toBe(true)
    expect(button.classList.contains("text-white")).toBe(true)
  })
})
