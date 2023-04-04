import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"

import { auth } from "../config/firebase"

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    uid: "",
    email: "",
    displayName: "",
  })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser({
          uid: "",
          email: "",
          displayName: "",
        })
      }
      setLoaded(true)
    })

    return () => unsubscribe()
  }, [])

  const signup = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      return result
    } catch (error) {
      console.log(error)
      throw new Error("Error signing up. Please try again.")
    }
  }

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)
      return result
    } catch (error) {
      console.log(error)
      throw new Error("Error logging in. Please try again.")
    }
  }

  const logout = () => {
    signOut(auth)
      .then(() => setUser({ uid: "", email: "", displayName: "" }))
      .catch((error) => console.log(error))
  }

  const values = {
    user,
    login,
    signup,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {loaded ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  )
}
