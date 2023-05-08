import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { toast } from "react-toastify"

import { auth, facebookProvider, googleProvider } from "./config"

export async function signUpWithEmail(email, password) {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  return res.user
}

export async function signInWithEmail(email, password) {
  const res = await signInWithEmailAndPassword(auth, email, password)
  return res.user
}

export async function signInWithFacebook() {
  const res = await signInWithPopup(auth, facebookProvider)
  return res.user
}

export async function signInWithGoogle() {
  try {
    // Use signInWithPopup to sign in with Google and get the result
    const result = await signInWithPopup(auth, googleProvider)

    // Get the credential and token from the result
    // const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken

    // Get the user info from the result
    const user = result.user

    // Get the additional IdP data from the result
    // const additionalInfo = getAdditionalUserInfo(result)

    // Do something with the user, token and additional info
    // ...

    // Return the user object
    return user
  } catch (error) {
    toast.error(error)
    // Handle errors here
    // const errorCode = error.code
    // const errorMessage = error.message
    // const email = error.customData.email
    // const credential = GoogleAuthProvider.credentialFromError(error)

    // Do something with the error info
    // ...

    // Throw or return the error
    throw error
  }
}

/**
export async function SignOut() {
  try {
    await signOut(auth)
    console.log("User signed out successfully")
    alert("User signed out successfully")
  } catch (e) {
    console.error(e)
    alert("Failed to sign out user")
  }
}
 */
