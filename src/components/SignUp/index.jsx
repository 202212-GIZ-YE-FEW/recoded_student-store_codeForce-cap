import Image from "next/image"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"

import styles from "./Signup.module.css"

function Signup() {
  return (
    <div>
      <div className={`flex justify-center   md:flex-row  bg-[#f1f6fa] `}>
        <div className={` ${styles.handbox_background}   w-3/6 `}>
          <div className=' p-20 '>
            <Image
              src='/images/hands_box.png'
              alt='handbox'
              width={500}
              height={500}
            />
          </div>
        </div>
        <div
          className={` container ${styles.form_mobile}   w-3/6 items-center`}
        >
          <div className='container m-auto flex w-5/6 flex-col items-center'>
            <h1 className='my-2 py-6 text-4xl font-semibold text-[#485DCF] md:my-3 md:text-5xl'>
              Sign-Up
            </h1>
            <form className='container m-auto mb-6 flex w-5/6 flex-col items-center'>
              <input
                placeholder='Name'
                type='text'
                name='firstName'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='Surname'
                type='text'
                name='surname'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='E-mail address'
                type='email'
                name='email'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='School name'
                type='text'
                name='schoolname'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center  
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='Password'
                type='password'
                name='password'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center  
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <input
                placeholder='Re-enter password'
                type='password'
                name='password'
                className=' my-2 block w-full rounded-lg
                border border-gray-300  p-2.5 
                text-center 
              focus:ring-blue-500 focus:border-blue-500 '
              />
              <button
                className=' bg-[#585785] font-light h-10 w-40 m-1 p-1 rounded-lg  text-[15px] text-white shadow-sm'
                type='submit'
              >
                Sign up
              </button>
            </form>
            <div className='flex items-center'>
              <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
              <p>Or</p>
              <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
            </div>
            <p className='text-md m-1 text-[#647581]'>Sign-up-with</p>
            <div className='m-1 mb-8 flex flex-row  '>
              <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
                <BsGoogle
                  color='#F26F6F'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>Google</p>
              </button>
              <button className='color-darkPurple m-1  flex items-center rounded-3xl border border-[#485DCF] p-1 text-[#485DCF]'>
                <BsFacebook
                  color='#485DCF'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>Facebook</p>
              </button>
              <button className=' m-1 flex justify-around rounded-3xl border border-[#28C7FA]  p-1 text-[#28C7FA] '>
                <BsTwitter
                  color='#28C7FA'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>Twitter</p>
              </button>
            </div>
            <div className='mb-4 text-xl text-[#647581]'>
              <p>Already have an account?</p>
            </div>
            <button
              className='bg-[#585785] h-10 w-40 mb-20 p-1 rounded-lg  font-light text-[15px] text-white shadow-sm'
              type='submit'
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
