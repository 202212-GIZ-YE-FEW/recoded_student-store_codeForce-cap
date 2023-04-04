function Input({ type, name, placeholder, className }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={`my-2 block w-full rounded-lg border border-gray-300 p-2.5 text-center ${className}`}
        required
      />
    </>
  )
}

export default Input
