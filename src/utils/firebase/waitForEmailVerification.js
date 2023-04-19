import { getAuth, onAuthStateChanged } from "firebase/auth"

export default async function waitForEmailVerification() {
  return new Promise((resolve, reject) => {
    const auth = getAuth()
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          unsubscribe()
          resolve()
        }
      } else {
        unsubscribe()
        reject(new Error("User is not signed in"))
      }
    })
  })
}
