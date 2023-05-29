import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXsmXG9wCNeCosh62yeoZjxX4z0II6h8g",
  authDomain: "chatapp-28fdd.firebaseapp.com",
  projectId: "chatapp-28fdd",
  storageBucket: "chatapp-28fdd.appspot.com",
  messagingSenderId: "365905967305",
  appId: "1:365905967305:web:77cc8a9a7a52aba46fb518"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();