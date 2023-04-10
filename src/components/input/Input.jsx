function Input({ type, name, value, placeholder, className, onChange }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`my-2 block w-full rounded-lg border border-gray-300 p-2.5 text-center ${className}`}
        value={value}
        onChange={onChange}
        required
      />
    </>
  )
}

export default Input
