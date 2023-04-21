import { sendEmailVerification } from "firebase/auth"

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
        console.log("User already exists")
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
      console.log("User added successfully")
      // alert("User added successfully")
    } else if (method === "facebook") {
      const user = await signInWithFacebook()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (userDoc.exists()) {
        console.log("User already exists")
      } else {
        await createUserDoc(userId, firstName, surname, user.email, schoolName)
        console.log("User added successfully")
        // alert("User added successfully")
      }
    } else if (method === "google") {
      const user = await signInWithGoogle()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (userDoc.exists()) {
        alert("User already exists")
      } else {
        await createUserDoc(userId, firstName, surname, user.email, schoolName)
        console.log("User added successfully")
        alert("User added successfully")
      }
    }
  } catch (e) {
    error = e
    console.error(error.message)
    alert(error.message)
  }

  return { result, error }
}
