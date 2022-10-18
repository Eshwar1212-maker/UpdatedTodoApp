import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getAuth, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDVo3wUsAjqRFwsrVbrdFaJ98WzZ3HxIfE",
  authDomain: "bettertodoapp.firebaseapp.com",
  projectId: "bettertodoapp",
  storageBucket: "bettertodoapp.appspot.com",
  messagingSenderId: "316516750882",
  appId: "1:316516750882:web:5fcf32027e172b6bfe9c7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth()
export const provider = new GoogleAuthProvider();