import Image from "next/image"

import styles from "./Signin.module.css"

import Button from "../button"
import Input from "../input"
function Signin() {
  return (
    <>
      <div className={`flex justify-center  md:flex-row  bg-[#f1f6fa] `}>
        <div className={` ${styles.handbox_background}   w-3/5 `}>
          <div className=' p-20 '>
            <Image
              src='/images/hands_box.png'
              alt='handbox'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className='container m-auto flex w-5/6 flex-col items-center'>
          <h1 className='my-2 py-6 text-4xl font-semibold text-[#FF8A57] md:my-3 md:text-5xl'>
            Sign-in
          </h1>
          <form className='container m-auto mb-6 flex w-5/6 flex-col items-center'>
            <Input
              type='text'
              name='firstName'
              placeholder='Name'
              className='lg:w-96 md:w-72'
            />
            <Input
              type='text'
              name='surname'
              placeholder='Surname'
              className='lg:w-96 md:w-64'
            />
            <Button className='orangeSignIn' text='Sign in' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin
