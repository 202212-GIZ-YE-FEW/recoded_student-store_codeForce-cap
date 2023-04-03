const BUTTON_STYLES = {
  orangeSignIn:
    "h-10 w-40 lg:w-48 lg:px-5 p-1 px-4 rounded-lg border-1 bg-pumpkin text-md font-normal text-white shadow-sm",
  forgotPassword:
    "h-10 w-40 lg:w-48 p-1 rounded-lg border-2 border-pumpkin bg-transparent font-normal text-md text-pumpkin shadow-sm",
  orangeSignUp:
    "h-10 w-36 mb-2 p-1 bg-pumpkin hover:border-2 hover:border-white font-normal text-white text-md rounded-lg",
  purpleSignIn:
    "h-9 w-36 m-1 p-1 rounded-lg border-2 bg-darkPurple font-light text-sm text-white shadow-sm",
  purpleSignUp:
    "h-10 w-40 m-1 p-1 rounded-lg border-2 bg-darkPurple font-light text-15px text-white shadow-sm",
  listItem:
    "h-12 w-72 md:h-14 md:w-80 lg:h-14 lg:w-96 m-1 p-1 rounded-lg border-2 bg-pumpkin font-md text-17px text-white shadow-sm",
  saveChanges:
    "h-12 w-56 lg:h-14 lg:w-64 m-1 p-1 px-2 hover:bg-purple hover:shadow-lg rounded-lg border-2 bg-pumpkin font-md text-17px text-white shadow-sm",
}

function Button({
  buttonStyle = "orangeSignIn",
  type = "button",
  text = "",
  handleClick,
}) {
  return (
    <button
      className={BUTTON_STYLES[buttonStyle]}
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  )
}

export default Button
