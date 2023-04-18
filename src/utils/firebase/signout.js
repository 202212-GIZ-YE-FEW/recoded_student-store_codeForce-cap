import { getAuth, signOut } from "firebase/auth"

export default async function SignOut() {
  const auth = getAuth()
  try {
    await signOut(auth)
    console.log("User signed out successfully")
    alert("User signed out successfully")
  } catch (e) {
    console.error(e)
    alert("Failed to sign out user")
  }
}
