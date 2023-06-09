import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { withTranslation } from "next-i18next"
import { TbLogout } from "react-icons/tb"
import { toast } from "react-toastify"

function SignOut({ t }) {
  const router = useRouter()
  const auth = getAuth()

  const handleSignOut = async () => {
    try {
      await signOut(auth)
        .then(() => {
          // Remove first sign in from local storage
          localStorage.removeItem("firstSignIn")
          router.push("/")
        })
        .then(() => {
          toast.success(t("signout"))
        })
    } catch (e) {
      toast.error(t("fSignout"))
    }
  }

  return (
    <span className='block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-pointer'>
      <span className='flex items-center gap-2'>
        <button onClick={handleSignOut}>{t("logout")}</button>
        <TbLogout />
      </span>
    </span>
  )
}

export default withTranslation("common")(SignOut)
