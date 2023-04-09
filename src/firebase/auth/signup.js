import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth, db } from "../config"

export default async function signUp(
  name,
  surname,
  email,
  schoolName,
  password
) {
  const userRef = db.collection("users")

  let result = null,
    error = null
  try {
    result = await createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        // Get the user object
        const user = userCredential.user

        // Create a user document
        userRef
          .doc(user.uid)
          .set({
            uid: user.uid,
            username: email,
            name: name,
            surname: surname,
            email: email,
            schoolName: schoolName,
            password: password,
            createdAt: new Date().toISOString(),
          })
          .then(() => {
            console.log("User document created")
          })
          .catch((error) => {
            console.error("Error creating user document: ", error)
          })
      }
    )
  } catch (e) {
    error = e
  }

  return { result, error }
}
