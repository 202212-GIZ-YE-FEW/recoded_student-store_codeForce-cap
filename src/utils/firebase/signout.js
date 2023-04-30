import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "next/router"
import { TbLogout } from "react-icons/tb"
import { toast } from "react-toastify"

function SignOut() {
  const router = useRouter()
  const auth = getAuth()

  const handleSignOut = async () => {
    try {
      toast.warn("Please wait")
      await signOut(auth)
        .then(() => {
          router.push("/")
        })
        .then(() => {
          toast.success("User signed out successfully")
        })
    } catch (e) {
      toast.error("Failed to sign out user")
    }
  }

  return (
    <span className='block px-4 py-2 hover:bg-gray-100 w-full text-left cursor-pointer'>
      <span className='flex items-center gap-2'>
        <button onClick={handleSignOut}>Logout</button>
        <TbLogout />
      </span>
    </span>
  )
}

export default SignOut
