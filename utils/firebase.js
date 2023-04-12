// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA3zdnw1iq3lDbIdCNwHvWp_iL6qb0spBM",
  authDomain: "sukana-8b39e.firebaseapp.com",
  projectId: "sukana-8b39e",
  storageBucket: "sukana-8b39e.appspot.com",
  messagingSenderId: "608838518175",
  appId: "1:608838518175:web:6323796b274ee671be29aa",
  measurementId: "G-RDNPQGW8KJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
