import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore"

import { db } from "./config"

const userRef = collection(db, "users")

export const createUserDoc = async (
  userId,
  firstName,
  surname,
  email,
  schoolName,
  password
) => {
  await setDoc(doc(userRef, userId), {
    uid: userId,
    username: email,
    firstName: firstName,
    surname: surname,
    email: email,
    schoolName: schoolName,
    password: password,
    createdAt: serverTimestamp(),
  })
}

export const getUserDoc = async (userId) => {
  const userDoc = await getDoc(doc(userRef, userId))
  return userDoc
}
