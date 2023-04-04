import { auth } from "firebase.config"
import { useAuthState } from "react-firebase-hooks/auth"

export const AuthProvider = ({ children }) => {
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

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  )
}
