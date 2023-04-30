import { createContext, useEffect, useState } from "react"

import { auth } from "./firebase/config"

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
