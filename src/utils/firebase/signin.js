import { createUserDoc, getUserDoc } from "./add-user"
import { signInWithEmail, signInWithFacebook, signInWithGoogle } from "./auth"
import SignOut from "./signout"

export default async function signIn(email, password, method = "email") {
  let result = null,
    error = null

  try {
    if (method === "email") {
      const user = await signInWithEmail(email, password)
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        alert("User not found")
      } else if (!user.emailVerified) {
        alert("Please verify your email before logging in")
        await SignOut()
      } else {
        console.log("User signed in successfully")
        alert("User signed in successfully")
        SignOut()
        alert("Auto sign out triggered.")
        result = { email: user.email, verified: user.emailVerified }
      }
    } else if (method === "facebook") {
      const user = await signInWithFacebook()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        await createUserDoc(userId, user.displayName, "", user.email, "")
      }

      console.log("User signed in successfully")
      alert("User signed in successfully")
    } else if (method === "google") {
      const user = await signInWithGoogle()
      const userId = user.uid
      const userDoc = await getUserDoc(userId)

      if (!userDoc.exists()) {
        await createUserDoc(userId, user.displayName, "", user.email, "")
      }

      console.log("User signed in successfully")
      alert("User signed in successfully")
    }
  } catch (e) {
    error = e
    console.error(error.message)
    alert(error.message)
  }

  return { result, error }
}
