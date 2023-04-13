import PropTypes from "prop-types"

function Input({
  id,
  name,
  type,
  value,
  placeholder,
  autoComplete,
  onChange,
  onBlur,
  onFocus,
  className,
  required,
  minLength,
  maxLength,
  pattern,
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      className={`my-2 block w-full rounded-lg border border-gray-300 p-2.5 text-center ${className}`}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      pattern={pattern}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number", "tel"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  required: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  pattern: PropTypes.string,
}

Input.defaultProps = {
  type: "text",
  autoComplete: "off",
  className: "",
  required: false,
}

export default Input
