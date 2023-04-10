// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDqP2miVcDdF7kPrk087JFGHHtXQlZIj60",
  authDomain: "sukana-572af.firebaseapp.com",
  projectId: "sukana-572af",
  storageBucket: "sukana-572af.appspot.com",
  messagingSenderId: "866650692120",
  appId: "1:866650692120:web:35b84603c6fd75db43c16d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
