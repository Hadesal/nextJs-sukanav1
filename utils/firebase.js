// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sukanav1.firebaseapp.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: "sukanav1.appspot.com",
  messagingSenderId: "670053495123",
  appId: process.env.APPID,
  measurementId: "G-RWS6HMG3DS",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
