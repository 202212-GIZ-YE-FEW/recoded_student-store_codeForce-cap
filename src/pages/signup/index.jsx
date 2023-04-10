import DOMPurify from "dompurify"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"

import styles from "./Signup.module.css"

import Input from "@/components/input"

import signUp from "@/firebase/auth/signup"

function Signup() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    surname: "",
    email: "",
    schoolName: "",
    password: "",
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: DOMPurify.sanitize(value),
    }))
  }

  const validateFormData = () => {
    const { username, name, surname, email, schoolName, password } = formData
    const errors = {}

    // Validate required fields
    if (!username) errors.username = "Username is required"
    if (!name) errors.name = "Name is required"
    if (!surname) errors.surname = "Surname is required"
    if (!email) errors.email = "Email is required"
    if (!schoolName) errors.schoolName = "School name is required"
    if (!password) errors.password = "Password is required"

    // Validate email format
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format"
    }

    // Validate password length
    if (password && password.length < 8) {
      errors.password = "Password must be at least 8 characters long"
    }

    return errors
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    console.log(formData)
    // No validation errors, attempt to sign up the user
    const { result, error } = await signUp(
      formData.name,
      formData.surname,
      formData.email,
      formData.schoolName,
      formData.password
    )

    if (error) {
      return console.log(error)
    }

    // else when successful
    return router.push("/")
  }

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

            <form
              onSubmit={handleFormSubmit}
              className='container m-auto mb-6 flex w-5/6 flex-col items-center'
            >
              <label htmlFor='firstName'>
                <Input
                  type='text'
                  name='firstName'
                  placeholder='Name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='surname'>
                <Input
                  type='text'
                  name='surname'
                  placeholder='Surname'
                  value={formData.surname}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='email'>
                <Input
                  type='email'
                  name='email'
                  placeholder='E-mail address'
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='schoolName'>
                <Input
                  type='text'
                  name='schoolName'
                  placeholder='School name'
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </label>
              <label htmlFor='password'>
                <Input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              <Input
                type='password'
                name='passwordConfirm'
                placeholder='Re-enter password'
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
