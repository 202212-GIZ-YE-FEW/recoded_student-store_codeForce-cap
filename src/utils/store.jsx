import { collection, doc, getDoc, onSnapshot, query } from "firebase/firestore"
import { createContext, useContext, useEffect, useState } from "react"

import { auth, db } from "./firebase/config"

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [initialAuthCheck, setInitialAuthCheck] = useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
      setIsLoggedIn(user !== null)
      setInitialAuthCheck(true)
    })

    return () => unsubscribe()
  }, [])

  const value = {
    user,
    loading,
    initialAuthCheck,
  }

  return (
    <StoreContext.Provider value={value} isLoggedIn={isLoggedIn}>
      {children}
    </StoreContext.Provider>
  )
}

export const useAuth = () => {
  const { user, loading, initialAuthCheck } = useContext(StoreContext)

  const isLoggedIn = user !== null

  return {
    user,
    loading,
    isLoggedIn,
    initialAuthCheck,
  }
}

export const useProfileData = () => {
  const { user } = useAuth()
  const [profileData, setProfileData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProfileData = async () => {
      if (user) {
        setIsLoading(true)
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          setProfileData(docSnap.data())
          setIsLoading(false)
        }
      }
    }

    fetchProfileData()
  }, [user])

  return { profileData, isLoading }
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
  const userId = user ? user.uid : null
  useEffect(() => {
    if (!userId) {
      setLoading(false)
      return
    }
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

export const useProduct = (productId) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const generalDocRef = doc(db, "generalListings", productId)
        const generalDocSnapshot = await getDoc(generalDocRef)

        if (generalDocSnapshot.exists()) {
          setData({ id: generalDocSnapshot.id, ...generalDocSnapshot.data() })
          setLoading(false)
        } else {
          const userId = auth.currentUser?.uid

          if (userId) {
            const userDocRef = doc(
              db,
              "users",
              userId,
              "userListings",
              productId
            )
            const userDocSnapshot = await getDoc(userDocRef)

            if (userDocSnapshot.exists()) {
              setData({ id: userDocSnapshot.id, ...userDocSnapshot.data() })
            } else {
              setError("Product not found")
            }
          } else {
            setError("Product not found")
          }

          setLoading(false)
        }
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [productId])

  return { data, error, loading }
}
