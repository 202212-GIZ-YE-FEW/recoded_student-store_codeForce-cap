import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

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
  const res = await signInWithPopup(auth, googleProvider)
  return res.user
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
