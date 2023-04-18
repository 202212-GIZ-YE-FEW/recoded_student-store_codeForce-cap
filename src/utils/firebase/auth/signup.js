/**
This module exports a function signUp that signs up a new user using Firebase Auth,
and stores the user's data in a Firestore collection.
@module signUp
*/

import { createUserWithEmailAndPassword } from "firebase/auth"
import {
  collection,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore"

import { auth, db } from "../config"

// A reference to the users collection in Firestore.
const userRef = collection(db, "users")

/**
 * Signs up a user with the given email, password, first name, surname, and school name.
 * @async
 * @function signUp
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @param {string} firstName - The user's first name.
 * @param {string} surname - The user's surname.
 * @param {string} schoolName - The user's school name.
 * @returns {Promise<{result: null, error: Error}|{result: any, error: null}>} A Promise that resolves to an object with a `result` property set to `null` and an `error` property set to an `Error` object if an error occurred during sign-up, or an object with a `result` property set to the sign-up result and an `error` property set to `null` if sign-up was successful.
 */

export default async function signUp(
  email,
  password,
  firstName,
  surname,
  schoolName
) {
  // Initialize variables
  let result = null,
    error = null

  try {
    // Attempt to sign up the user
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const userId = res.user.uid

    // Check if the user already exists
    const userDoc = await getDoc(doc(userRef, email))
    if (userDoc.exists()) {
      alert("User already exists")
    } else {
      // Add the user to the database
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
      console.log("User added successfully")
      alert("User added successfully")
    }
  } catch (e) {
    // Handle errors
    error = e
    console.error(error.message)
    alert(error.message)
  }

  // Return the result
  return { result, error }
}
