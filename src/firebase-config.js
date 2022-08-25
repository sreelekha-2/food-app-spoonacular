
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDAT4FWBGepPoMWuXV8vEuT_Nv-PPEGcic",
  authDomain: "react-crud-aa515.firebaseapp.com",
  projectId: "react-crud-aa515",
  storageBucket: "react-crud-aa515.appspot.com",
  messagingSenderId: "333516032935",
  appId: "1:333516032935:web:9945911ff339a0e054c482",
  measurementId: "G-TEFTTTT3M7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
