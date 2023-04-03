function Input({ type, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className=' my-2 block w-full rounded-lg
    border border-gray-300  p-2.5 
    text-center 
  focus:ring-blue-500 focus:border-blue-500 '
        required
      />
    </>
  )
}

export default Input
