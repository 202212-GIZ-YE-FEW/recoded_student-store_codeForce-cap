import { sendEmailVerification } from "firebase/auth"
import { toast } from "react-toastify"

import { createUserDoc, getUserDoc } from "./add-user"
import { signInWithFacebook, signInWithGoogle, signUpWithEmail } from "./auth"

export default async function signUp(
  email,
  password,
  firstName,
  surname,
  schoolName,
  method = "email"
) {
  let result = null,
    error = null

  try {
    if (method === "email") {
      const user = await signUpWithEmail(email, password)
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (userDoc.exists()) {
        toast.error("User already exists")
      } else {
        await createUserDoc(
          userId,
          firstName,
          surname,
          email,
          schoolName,
          password
        )

        // Send email verification
        await sendEmailVerification(user)
        result = { email: user.email, verified: user.emailVerified }
      }

      // Signed in successfully
      toast.success("Welcome to our website")
    } else if (method === "facebook") {
      const user = await signInWithFacebook()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (userDoc.exists()) {
        toast.error("User already exists")
      } else {
        await createUserDoc(userId, firstName, surname, user.email, schoolName)
        toast.success("Welcome to our website")
      }
    } else if (method === "google") {
      const user = await signInWithGoogle()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (userDoc.exists()) {
        toast.error("User already exists")
      } else {
        await createUserDoc(userId, firstName, surname, user.email, schoolName)
        toast.success("Welcome to our website")
      }
    }
  } catch (e) {
    error = e
    toast.error(error.message, "Your email is already signed in ")
  }

  return { result, error }
}
