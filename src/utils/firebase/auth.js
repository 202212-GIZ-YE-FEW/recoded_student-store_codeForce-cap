import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"

import { auth, facebookProvider, googleProvider } from "./config"

export const signUpWithEmail = async (email, password) => {
  const res = await createUserWithEmailAndPassword(auth, email, password)
  return res.user
}

export const signInWithEmail = async (email, password) => {
  const res = await signInWithEmailAndPassword(auth, email, password)
  return res.user
}

export const signInWithFacebook = async () => {
  const res = await signInWithPopup(auth, facebookProvider)
  return res.user
}

export const signInWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider)
  return res.user
}
