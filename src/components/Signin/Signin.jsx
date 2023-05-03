import { withTranslation } from "next-i18next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BsFacebook, BsGoogle, BsTwitter } from "react-icons/bs"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"
import styles from "./Signin.module.css"

import signIn from "@/utils/firebase/signin"
import { signinValidation } from "@/utils/schemaValidations/signin"

import Button from "../button"
import Input from "../input"

function Signin({ t }) {
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
      await signinValidation.validate(formData, { abortEarly: false })
      toast.warn("Please wait")
      const { email, password } = formData

      const { error } = await signIn(email, password)

      if (error) {
        return toast.error(error)
      }

      // else when successful
      return router.replace("/").then(() => {
        toast.success("Welcome back")
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
    <>
      <ToastContainer pauseOnHover={false} newestOnTop={true} />
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
            {t("sign-in")}
          </h1>
          <form
            onSubmit={handleSubmit}
            className='container m-auto mb-6 flex w-5/6 flex-col items-center'
          >
            <label htmlFor='email'>
              <Input
                type='text'
                name='email'
                placeholder={t("email")}
                className='lg:w-96 md:w-72'
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            {toast.error(errors.email).email}
            <label htmlFor='password'>
              <Input
                type='password'
                name='password'
                placeholder={t("password")}
                className='lg:w-96 md:w-64'
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {toast.error(errors.password).password}
            <div className='my-4 gap-1 flex-row flex lg:justify-center'>
              <Button
                className='orangeSignIn'
                text={t("sign-in")}
                type='submit'
              />
              <Button className='forgotPassword' text={t("forgot-password")} />
            </div>
          </form>
          <div className='flex items-center'>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
            <p>{t("or")}</p>
            <div className='my-1 mr-2 h-px mt-[10px] w-[164px] bg-[#9dafbd]'></div>
          </div>
          <p className='text-md m-1 text-[#647581]'>{t("sign-in-with")}</p>
          <div className='m-1 mb-8 flex flex-row  '>
            <button className=' m-1 flex items-center rounded-3xl border border-[#F26F6F] p-1  text-[#F26F6F]'>
              <BsGoogle color='#F26F6F' size={24} style={{ padding: "1px" }} />
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
              <BsTwitter color='#28C7FA' size={24} style={{ padding: "1px" }} />
              <p className='mx-2 text-sm md:mx-3'>{t("twitter")}</p>
            </button>
          </div>
          <div className='mb-4 text-xl text-[#647581]'>
            <p>{t("dont-have-an-account")}</p>
          </div>
          {/* <Button className='orangeSignIn ' text='Sign-up' /> */}
          <Link
            href='/signup'
            className='h-10 w-40 lg:w-48 lg:px-5 p-1 px-4 rounded-lg border-1 bg-pumpkin text-md font-normal text-white shadow-sm text-center'
          >
            {t("sign-up")}
          </Link>
        </div>
      </div>
    </>
  )
}

export default withTranslation("signin")(Signin)
