import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"

import Signin from "@/components/Signin"

import RootLayout from "@/layout/root/RootLayout"
import { useAuth, useProfileData } from "@/utils/store"

export default function SignInPage() {
  const { t } = useTranslation("signup")
  const router = useRouter()
  const { isLoggedIn } = useAuth()
  const userName = useProfileData()
  const [firstSignIn, setFirstSignIn] = useState(
    localStorage.getItem("firstSignIn") === "true"
  )

  useEffect(() => {
    if (isLoggedIn && firstSignIn) {
      router.replace("/").then(() => {
        toast.info(
          t("hey") + ` ${userName?.firstName || t("you")} ` + t("signed")
        )
      })
      setFirstSignIn(false)
    }
  }, [isLoggedIn, router, userName, t, firstSignIn])

  return (
    <RootLayout>
      <Signin />
    </RootLayout>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["signin", "common", "signup"])),
      // Will be passed to the page component as props
    },
  }
}
