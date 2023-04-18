import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

import { auth } from "../config"

// Google authentication provider
const googleProvider = new GoogleAuthProvider()

export default async function signIn(email, password) {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log("User signed in successfully")
    alert("User signed in successfully")
    return { result, error: null }
  } catch (e) {
    let error = e
    console.error(error.message)
    if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") {
      if (
        confirm(
          "User not found or wrong password. Do you want to sign in with Google?"
        )
      ) {
        try {
          const result = await signInWithPopup(auth, googleProvider)
          console.log("User signed in successfully with Google")
          alert("User signed in successfully with Google")
          return { result, error: null }
        } catch (e) {
          error = e
        }
      }
    }
    alert(error.message)
    return { result: null, error }
  }
}
