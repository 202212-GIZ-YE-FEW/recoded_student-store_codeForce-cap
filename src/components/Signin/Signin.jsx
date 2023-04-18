import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"
import * as Yup from "yup"

import styles from "./Signin.module.css"

import signIn from "@/utils/firebase/auth/signin"

import Button from "../button"
import Input from "../input"

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("Email is can't be empty!"),
  password: Yup.string().required("Password can't be empty!"),
})

function Signin() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await validationSchema.validate(formData, { abortEarly: false })
      const { email, password } = formData

      const { result, error } = await signIn(email, password)

      console.log(formData)

      if (error) {
        return console.log(error)
      }

      // else when successful
      console.log(result)
      return router.push("/")
    } catch (err) {
      const validationErrors = {}
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message
      })
      setErrors(validationErrors)
    }
  }

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
          <form
            onSubmit={handleSubmit}
            className='container m-auto mb-6 flex w-5/6 flex-col items-center'
          >
            <label htmlFor='email'>
              <Input
                type='text'
                name='email'
                placeholder='e-mail address'
                className='lg:w-96 md:w-72'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            {errors.email && <p>{errors.email}</p>}
            <label htmlFor='password'>
              <Input
                type='password'
                name='password'
                placeholder='Password'
                className='lg:w-96 md:w-64'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {errors.password && <p>{errors.password}</p>}
            <div className='my-4 gap-1 flex-row flex lg:justify-center'>
              <Button className='orangeSignIn' text='Sign in' type='submit' />
              <Button className='forgotPassword' text='forgotPassword ' />
            </div>
          </form>
          <div className='flex items-center'>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
            <p>Or</p>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
          </div>
          <p className='text-md m-1 text-[#647581]'>Sign-up-with</p>
          <div className='m-1 mb-8 flex flex-row  '>
            <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
              <BsGoogle color='#F26F6F' size={24} style={{ padding: "1px" }} />
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
              <BsTwitter color='#28C7FA' size={24} style={{ padding: "1px" }} />
              <p className='mx-2 text-sm md:mx-3'>Twitter</p>
            </button>
          </div>
          <div className='mb-4 text-xl text-[#647581]'>
            <p>Don’t have an account??</p>
          </div>
          <Button className='orangeSignIn ' text='Sign-up' />
        </div>
      </div>
    </>
  )
}

export default Signin
