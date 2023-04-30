import { createContext, useContext, useEffect, useState } from "react"

import { auth } from "./firebase/config"

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      setIsLoggedIn(user !== null)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export const useAuth = () => {
  const { user, loading } = useContext(StoreContext)

  const isLoggedIn = user !== null

  return {
    user,
    loading,
    isLoggedIn,
  }
}
