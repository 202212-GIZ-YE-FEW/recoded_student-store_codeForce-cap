import styles from "./Signup.module.css"
function Signup() {
  return (
    <div>
      <div
        className={`flex justify-center md:flex-row ${styles.signup_background} `}
      >
        <div className={` my-5 ${styles.handbox_image} w-3/6 `}></div>
        <div className={`container ${styles.form_mobile}   w-3/6 items-center`}>
          <div className='container m-auto flex w-5/6 flex-col items-center'>
            <h1 className='my-2 py-6 text-4xl text-white md:my-3 md:text-5xl'>
              Sign-Up
            </h1>
            <form className='container m-auto mb-6 flex w-5/6 flex-col items-center'>
              <input
                placeholder='name'
                type='text'
                name='firstName'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='surname'
                type='text'
                name='surname'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='E-mail address'
                type='email'
                name='email'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='School name'
                type='text'
                name='schoolname'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='Password'
                type='password'
                name='password'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='re-enter password'
                type='password'
                name='password'
                className=' my-3.5 block w-full rounded-lg
                border border-gray-300 bg-gray-50 p-2.5 
                text-center text-xl 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <button
                class=' bg-[#585785] font-light h-10 w-40 m-1 p-1 rounded-lg  text-[15px] text-white shadow-sm'
                type='submit'
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
