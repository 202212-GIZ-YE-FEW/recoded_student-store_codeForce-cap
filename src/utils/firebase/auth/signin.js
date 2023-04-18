import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

import { auth } from "../config"

// Google authentication provider

const googleProvider = new GoogleAuthProvider()

export default async function signIn(email, password) {
  let result = null,
    error = null

  // Attempt to sign in with the provided email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // Get the user's ID from the authentication result
      const userId = res.user.uid

      // Display a success message to the user
      console.log("User signed in successfully")
      alert("User signed in successfully")
    })
    .catch((e) => {
      // If the sign in fails, check the error code
      if (
        e.code === "auth/user-not-found" ||
        e.code === "auth/wrong-password"
      ) {
        // If the user does not exist or the password is incorrect, ask the user if they want to sign in with Google instead
        if (
          confirm(
            "User not found or wrong password. Do you want to sign in with Google?"
          )
        ) {
          // If the user agrees, sign in with Google using a popup
          signInWithPopup(auth, googleProvider)
            .then((res) => {
              // Get the user's ID from the authentication result
              const userId = res.user.uid

              // Display a success message to the user
              console.log("User signed in successfully with Google")
              alert("User signed in successfully with Google")
            })
            .catch((e) => {
              error = e
              console.error(error.message)
              // log the error message to the console
              alert(error.message)
              // display the error mess
            })
        }
      } else {
        error = e
        console.error(error.message)
        // log the error message to the console
        alert(error.message)
        // display the error mess
      }
    })

  return { result, error }
}
