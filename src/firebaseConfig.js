import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBy_x8SbpI-Optado69puGIi85_6w28kDs",
    authDomain: "react-firebase-auth-b799d.firebaseapp.com",
    projectId: "react-firebase-auth-b799d",
    storageBucket: "react-firebase-auth-b799d.firebasestorage.app",
    messagingSenderId: "1079154021160",
    appId: "1:1079154021160:web:ee33147bae27a4b57ef61d",
    measurementId: "G-PLFVMD7VND"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export default auth