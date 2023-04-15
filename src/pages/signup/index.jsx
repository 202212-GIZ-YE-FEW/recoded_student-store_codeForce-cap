import bcrypt from "bcryptjs"
import DOMPurify from "dompurify"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"
import * as Yup from "yup"

import styles from "./Signup.module.css"

import Button from "@/components/button"
import Input from "@/components/input"

import signUp from "@/utils/firebase/auth/signup"
import RootLayout from "@/layout/root/RootLayout"

// Define validation schema using Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  email: Yup.string()
    .email("invalid email")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Please enter a valid email address"
    )
    .required("Email is required"),
  schoolName: Yup.string().required("School name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(64, "Password must be less than 64 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
})

/*
//! Define rate limit middleware to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
})
*/

function Signup() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    schoolName: "",
    password: "",
    passwordConfirm: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: DOMPurify.sanitize(value),
    }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    try {
      await validationSchema.validate(formData, { abortEarly: false })

      const { name, surname, email, schoolName, password } = formData

      // Hash password using bcrypt
      const hashedPassword = await bcrypt.hash(password, 10)

      // No validation errors, attempt to sign up the user
      const { result, error } = await signUp(
        email,
        hashedPassword,
        name,
        surname,
        schoolName
      )

      if (error) {
        return alert(error)
      }

      // else when successful
      alert(result)
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
    <RootLayout>
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
                className='container m-auto mb-6 flex  w-5/6 flex-col  '
              >
                <label htmlFor='firstName'>
                  <Input
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor='surname'>
                  <Input
                    id='surname'
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
                    id='email'
                    name='email'
                    placeholder='E-mail address'
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
                {errors.email && <p>{errors.email}</p>}
                <label htmlFor='schoolName'>
                  <Input
                    type='text'
                    id='schoolName'
                    name='schoolName'
                    placeholder='School name'
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor='password'>
                  <Input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
                {errors.password && <p>{errors.password}</p>}
                <Input
                  type='password'
                  id='passwordConfirm'
                  name='passwordConfirm'
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  placeholder='Re-enter password'
                />
                <div className='flex justify-center'>
                  <Button buttonStyle='purpleSignUp' text='Sign up' />
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
              <Button buttonStyle='purpleSignUp' text='Sign in' />
              <br />
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}

export default Signup
