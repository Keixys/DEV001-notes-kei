// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzLEdBNDM3S5Qmb0wTOLZMeqi-sSqu1kw",
  authDomain: "daily-note-d9033.firebaseapp.com",
  projectId: "daily-note-d9033",
  storageBucket: "daily-note-d9033.appspot.com",
  messagingSenderId: "819879962411",
  appId: "1:819879962411:web:e55d36a9db7fa3d18c476e",
  measurementId: "G-JM30S1QLHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const database = getFirestore(app);

