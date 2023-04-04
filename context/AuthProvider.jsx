import { auth } from "firebase.config"
import { createContext, useContext } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, loading] = useAuthState(auth)

  const signUp = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
  }

  const signIn = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
  }

  const signOut = async () => {
    await auth.signOut()
  }

  const value = {
    user,
    signUp,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
