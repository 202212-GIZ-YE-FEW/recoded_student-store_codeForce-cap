import { createContext, useEffect, useState } from "react"

const AuthContext = createContext({})

const USER_KEY = "user"

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
      }
    } catch (error) {
      console.error("Error saving user to localStorage:", error)
    }

    // Cleanup function to remove data from localStorage
    return () => {
      try {
        localStorage.removeItem(USER_KEY)
      } catch (error) {
        console.error("Error removing user from localStorage:", error)
      }
    }
  }, [user])

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem(USER_KEY))
      if (storedUser) {
        setUser(storedUser)
      }
    } catch (error) {
      console.error("Error loading user from localStorage:", error)
    }
  }, [])

  const auth = {
    user,
    setUser,
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default AuthContext
