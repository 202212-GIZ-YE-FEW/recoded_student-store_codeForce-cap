// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWAgEvOGM7HuTtO2po_vbQquHybtJM56A",
  authDomain: "student-store-share-for-care.firebaseapp.com",
  projectId: "student-store-share-for-care",
  storageBucket: "student-store-share-for-care.appspot.com",
  messagingSenderId: "897141379966",
  appId: "1:897141379966:web:3ec9668e4cb433c98d992f",
  measurementId: "G-YJMKF4HNSL",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
