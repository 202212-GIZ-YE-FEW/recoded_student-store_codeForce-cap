import { createUserWithEmailAndPassword } from "firebase/auth"
import { collection, doc, setDoc } from "firebase/firestore"

import { auth, db } from "../config"

const userRef = collection(db, "users")

export default async function signUp(
  email,
  password,
  name,
  surname,
  schoolName
) {
  let result = null,
    error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password)
    const user = result.user
    await setDoc(doc(userRef, user.uid), {
      uid: user.uid,
      username: email,
      name: name,
      surname: surname,
      email: email,
      schoolName: schoolName,
      password: password,
      createdAt: new Date().toISOString(),
    })
  } catch (e) {
    error = e
  }

  return { result, error }
}
