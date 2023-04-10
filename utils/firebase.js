// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "sukana-572af.firebaseapp.com",
  projectId: process.env.PROJECT_ID,
  storageBucket: "sukana-572af.appspot.com",
  messagingSenderId: "866650692120",
  appId: process.env.APPID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
