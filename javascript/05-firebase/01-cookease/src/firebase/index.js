// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} = import.meta.env;
const firebaseConfig = {
  apiKey: "AIzaSyBr3Iv8TCLUx0XKRkMCfvkDPrHWFSHcUgI",
  authDomain: "cookease-57cac.firebaseapp.com",
  projectId: "cookease-57cac",
  storageBucket: "cookease-57cac.appspot.com",
  messagingSenderId: "674473447381",
  appId: "1:674473447381:web:0adaee165af6134544f75c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// console.log(db);
