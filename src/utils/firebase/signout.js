import { getAuth, signOut } from "firebase/auth"
import { toast } from "react-toastify"

export default async function SignOut() {
  const auth = getAuth()
  try {
    await signOut(auth)
    toast.success("User signed out successfully")
  } catch (e) {
    toast.error("Failed to sign out user")
  }
}
