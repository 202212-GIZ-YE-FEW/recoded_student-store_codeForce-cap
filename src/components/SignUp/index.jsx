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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
