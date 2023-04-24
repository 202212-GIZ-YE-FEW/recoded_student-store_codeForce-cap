// Importing the PropTypes module from prop-types library
import PropTypes from "prop-types"

// Defining a constant BUTTON_STYLES object that contains different button styles
const BUTTON_STYLES = {
  orangeSignIn:
    "h-10 w-40 lg:w-48 lg:px-5 p-1 px-4 rounded-lg border-1 bg-pumpkin text-md font-normal text-white shadow-sm",
  forgotPassword:
    "h-10 w-40 lg:w-48 p-1 rounded-lg border-2 border-pumpkin bg-transparent font-normal text-md text-pumpkin shadow-sm",
  orangeSignUp:
    "h-10 w-36 mb-2 p-1 bg-pumpkin hover:border-2 hover:border-white font-normal text-white text-md rounded-lg",
  purpleSignIn:
    "h-9 w-36 m-1 p-1 rounded-lg border-2 bg-purple-dark font-light text-sm text-white shadow-sm",
  purpleSignUp:
    "h-10 w-40 m-1 p-1 rounded-lg border-2 bg-purple-dark font-light text-[15px] text-white shadow-sm",
  listItem:
    "h-12 w-full md:h-14 lg:h-14 m-1 p-1 rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm",
  uploadImage:
    "h-12 w-full md:h-14 lg:h-14 m-1 p-1 rounded-lg border-2 bg-purple-dark font-md text-[17px] text-white shadow-sm",
  saveChanges:
    "h-12 w-56 lg:h-14 lg:w-64 m-1 p-1 px-2 hover:bg-purple hover:shadow-lg rounded-lg border-2 bg-pumpkin font-md text-[17px] text-white shadow-sm",
}

/**
 * This is a React functional component that renders a button element with different styles.
 * It accepts the following props:
 * @param {string} buttonStyle - Specifies the button style to be applied. Defaults to "orangeSignIn".
 * @param {string} type - Specifies the button type. Can be "button" or "submit". Defaults to "button".
 * @param {string} text - Specifies the text content of the button. Required.
 * @param {function} handleClick - Specifies the function to be executed on button click. Optional.
 * @param {string} icon - Specifies the icon class name to be added to the button. Optional.
 */
function Button({
  buttonStyle = "orangeSignIn",
  type = "button",
  text = "",
  handleClick,
  icon,
}) {
  return (
    <button
      className={BUTTON_STYLES[buttonStyle]}
      onClick={handleClick}
      type={type}
    >
      {icon && <i className={icon}></i>}
      {text}
    </button>
  )
}

// Defining propTypes for the Button component to specify the data types of its props
Button.propTypes = {
  buttonStyle: PropTypes.oneOf(Object.keys(BUTTON_STYLES)),
  type: PropTypes.oneOf(["button", "submit"]),
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  icon: PropTypes.string,
}

// Exporting the Button component as default
export default Button
