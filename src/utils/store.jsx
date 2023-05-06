import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"

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

  return (
    <StoreContext.Provider value={value} isLoggedIn={isLoggedIn}>
      {children}
    </StoreContext.Provider>
  )
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

export const useProfileData = async () => {
  const { user } = useAuth()
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProfileData(docSnap.data())
        }
      }
    }

    fetchProfileData()
  }, [user])

  return profileData
}

export const useGeneralListings = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const generalCollection = collection(db, "generalListings")
    const unsubscribe = onSnapshot(
      generalCollection,
      (snapshot) => {
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setData(fetchedData)
        setLoading(false)
      },
      (error) => setError(error)
    )

    return () => unsubscribe()
  }, [])

  return { data, error, loading }
}

export const useUserListings = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const user = auth.currentUser
  const userId = user.uid
  useEffect(() => {
    const userCollection = collection(db, "users", userId, "userListings")
    const q = query(userCollection)
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedListings = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setData(fetchedListings)
        setLoading(false)
      },
      (error) => setError(error)
    )
    return () => unsubscribe()
  }, [userId])
  return { data, loading, error }
}
