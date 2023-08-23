
import { initializeApp } from "firebase/app";
import firebace from "firebase";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFXHW7bXDXOnvucAFASHLGSCYQJZSECdo",
  authDomain: "fir-accd0.firebaseapp.com",
  projectId: "fir-accd0",
  storageBucket: "fir-accd0.appspot.com",
  messagingSenderId: "994607356439",
  appId: "1:994607356439:web:9ce829cec02641b9105a52",
  measurementId: "G-46B545QC9C"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);