import { GoogleAuthProvider, signInWithCredential } from "firebase/auth"
import NextAuth from "next-auth"
import Providers from "next-auth/providers"

import { auth } from "@/utils/firebase/config"

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_FIREBASE_GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (account.provider === "google") {
        try {
          // Sign in with Firebase
          const credential = GoogleAuthProvider.credential(account.accessToken)
          const firebaseUser = await signInWithCredential(auth, credential)

          // Set the Firebase user ID on the user object
          user.id = firebaseUser.uid

          // Return true to allow sign in
          return true
        } catch (error) {
          console.error("Firebase authentication error:", error)
          return false
        }
      }

      // Return true to allow sign in for other providers
      return true
    },
  },
})
