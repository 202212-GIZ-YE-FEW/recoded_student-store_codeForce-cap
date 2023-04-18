/**
 * Imports the Google authentication provider, the sign-in functions and the auth object from firebase
 */
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

import { auth } from "../config"

// Google authentication provider
const googleProvider = new GoogleAuthProvider()

/**
 * Signs in a user with email and password or with Google if the user is not found or the password is wrong
 * @param {string} email - The email of the user
 * @param {string} password - The password of the user
 * @returns {Object} An object with the result of the sign-in operation and an error if any
 */
export default async function signIn(email, password) {
  try {
    // Tries to sign in with email and password
    const result = await signInWithEmailAndPassword(auth, email, password)
    console.log("User signed in successfully")
    alert("User signed in successfully")
    return { result, error: null }
  } catch (e) {
    let error = e
    console.error(error.message)
    if (e.code === "auth/user-not-found" || e.code === "auth/wrong-password") {
      // Asks the user if they want to sign in with Google instead
      if (
        confirm(
          "User not found or wrong password. Do you want to sign in with Google?"
        )
      ) {
        try {
          // Tries to sign in with Google
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
