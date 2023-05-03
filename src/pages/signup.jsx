import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { toast, ToastContainer } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth, useProfileData } from "@/utils/store"

import Signup from "../components/signup/index"

export default function SignUpPage() {
  const { t } = useTranslation("signup")
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const userName = useProfileData()
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/").then(() => {
        toast.info(
          t("hey") + ` ${userName?.firstName || t("you")} ` + t("signed")
        )
      })
    }
  }, [isLoggedIn, router, userName, t])
  return (
    <RootLayout>
      <ToastContainer pauseOnHover={false} newestOnTop={true} theme='colored' />
      <Signup />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signup", "common"])),
      // Will be passed to the page component as props
    },
  }
}
