import { createUserWithEmailAndPassword } from "firebase/auth"
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore"

import { auth, db } from "../config"

// Create a reference to the users collection
const userRef = collection(db, "users")

export default async function signUp(
  email,
  password,
  firstName,
  surname,
  schoolName
) {
  let result = null,
    error = null

  // Attempt to create a new user with the provided email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // Get the user's ID from the authentication result
      const userId = res.user.uid

      // Check if the user already exists in the Firestore collection
      getDoc(doc(userRef, email)).then((userDoc) => {
        if (userDoc.exists()) {
          // If the user already exists, display an error message to the user
          alert("User already exists")
        } else {
          // Otherwise, add the user to the Firestore collection with default values
          setDoc(doc(userRef, userId), {
            uid: userId,
            username: email,
            firstName: firstName,
            surname: surname,
            email: email,
            schoolName: schoolName,
            password: password,
            createdAt: serverTimestamp(),
          })
            .then(() => {
              // Display a success message to the user
              console.log("User added successfully")
              alert("User added successfully")
            })
            .catch((e) => {
              console.error(e.message)
              alert(e.message)
            })
        }
      })
    })
    .catch((e) => {
      error = e
      console.error(error.message)
      // log the error message to the console
      alert(error.message)
      // display the error message to the user
    })

  return { result, error }
}
