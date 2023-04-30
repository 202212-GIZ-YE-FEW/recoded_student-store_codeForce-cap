import { toast } from "react-toastify"

import { createUserDoc, getUserDoc } from "./add-user"
import { signInWithEmail, signInWithFacebook, signInWithGoogle } from "./auth"

export default async function signIn(email, password, method = "email") {
  let result = null,
    error = null

  try {
    if (method === "email") {
      const user = await signInWithEmail(email, password)
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        toast.warn("User not found")
      } else {
        toast.success("Welcome back")
      }
    } else if (method === "facebook") {
      const user = await signInWithFacebook()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        await createUserDoc(userId, user.displayName, "", user.email, "")
      }

      toast.success("Welcome back")
    } else if (method === "google") {
      const user = await signInWithGoogle()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        await createUserDoc(userId, user.displayName, "", user.email, "")
      }

      toast.success("Welcome back")
    }
  } catch (e) {
    error = e
    toast(error.message)
  }

  return { result, error }
}
