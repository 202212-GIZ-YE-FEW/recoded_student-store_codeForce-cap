import { doc, getDoc } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"

import { auth, db } from "./firebase/config"

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

export const useProfileData = () => {
  const { user } = useAuth()
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProfileData(docSnap.data())
        } else {
          toast.error("No such document!")
        }
      }
    }

    fetchProfileData()
  }, [user])

  return profileData
}
