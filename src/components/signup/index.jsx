import DOMPurify from "dompurify"
import { withTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"
import { toast } from "react-toastify"

import styles from "./Signup.module.css"

import signUp from "@/utils/firebase/signup"
import { signupValidation } from "@/utils/schemaValidations/signup"

import Button from "../button"
import Input from "../input"

/*
//! Define rate limit middleware to prevent brute-force attacks
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
})
*/

function Signup({ t }) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    schoolName: "",
    password: "",
    passwordConfirm: "",
  })

  const [isSuccess, setIsSuccess] = useState(false)
  // const [errorMessage, setErrorMessage] = useState("") // * Note to the future
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
      await signupValidation.validate(formData, { abortEarly: false })
      toast.warning("Pleas wait") // set loading state to true while the API call is in progress
      const { firstName, surname, email, schoolName, password } = formData

      // Hash password using bcrypt
      // const hashedPassword = await bcrypt.hash(password, 10)
      const hashedPassword = password

      // No validation errors, attempt to sign up the user
      const { result, error } = await signUp(
        email,
        hashedPassword,
        firstName,
        surname,
        schoolName
      )

      // if (result) {
      //   // Wait for the user to verify their email address
      //   await waitForEmailVerification()
      //   setIsSuccess(true)
      //   toast.success("Sign up successful!")
      //   toast.warn(
      //     "Email verification sent! Please check your inbox.",
      //     "\n email:",
      //     result.email,
      //     "\n email verification status:",
      //     result.verified
      //   )
      // }

      if (error) {
        return
      }

      // else when successful
      router.replace("/").then(() => {
        toast.success("Welcome to our website. You are logged in directly")
      })
    } catch (err) {
      const validationErrors = {}
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message
      })
      setErrors(validationErrors)
    }
  }

  return (
    <div>
      <div className={`flex justify-center   md:flex-row  bg-[#f1f6fa] `}>
        <div className={` ${styles.handbox_background}   w-3/6 `}>
          <div className='p-20'>
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
              {t("sign-up")}
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
                  placeholder={t("name")}
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              {errors.firstName}
              <label htmlFor='surname'>
                <Input
                  id='surname'
                  type='text'
                  name='surname'
                  placeholder={t("surname")}
                  value={formData.surname}
                  onChange={handleChange}
                />
              </label>
              {errors.surname}
              <label htmlFor='email'>
                <Input
                  type='email'
                  id='email'
                  name='email'
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              {errors.email}
              <label htmlFor='schoolName'>
                <Input
                  type='text'
                  id='schoolName'
                  name='schoolName'
                  placeholder={t("school")}
                  value={formData.schoolName}
                  onChange={handleChange}
                />
              </label>
              {errors.schoolName}
              <label htmlFor='password'>
                <Input
                  type='password'
                  id='password'
                  name='password'
                  placeholder={t("password")}
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              {errors.password}
              <Input
                type='password'
                id='passwordConfirm'
                name='passwordConfirm'
                value={formData.passwordConfirm}
                onChange={handleChange}
                placeholder={t("password-confirm")}
              />
              {errors.passwordConfirm}
              <div className='flex justify-center'>
                <Button
                  buttonStyle='purpleSignUp'
                  text={t("sign-up")}
                  type='submit'
                />
              </div>
            </form>
            <div className='mb-4 text-xl text-[#647581]'>
              <p>
                {t("have-an-account")}{" "}
                <Link href='/signin' className='underline'>
                  {t("sign-in")}
                </Link>
              </p>
            </div>
            <div className='flex items-center'>
              <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
              <p>{t("or")}</p>
              <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
            </div>
            <p className='text-md m-1 text-[#647581]'>{t("sign-up-with")}</p>
            <div className='m-1 mb-8 flex flex-row  '>
              <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
                <BsGoogle
                  color='#F26F6F'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>{t("google")}</p>
              </button>
              <button className='color-darkPurple m-1  flex items-center rounded-3xl border border-[#485DCF] p-1 text-[#485DCF]'>
                <BsFacebook
                  color='#485DCF'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>{t("facebook")}</p>
              </button>
              <button className=' m-1 flex justify-around rounded-3xl border border-[#28C7FA]  p-1 text-[#28C7FA] '>
                <BsTwitter
                  color='#28C7FA'
                  size={24}
                  style={{ padding: "1px" }}
                />
                <p className='mx-2 text-sm md:mx-3'>{t("twitter")}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withTranslation("signup")(Signup)
