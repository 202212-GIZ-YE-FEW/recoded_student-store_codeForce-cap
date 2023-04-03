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
