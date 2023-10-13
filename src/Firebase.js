

import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/* import { getDatabase } from "firebase/database"; */
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";



 
const firebaseConfig = {
  apiKey: "AIzaSyBY28aLrhCEImkjYVXufx1BC2Ow3q5DtR0",
  authDomain: "clone-14a7c.firebaseapp.com",
  projectId: "clone-14a7c",
  storageBucket: "clone-14a7c.appspot.com",
  messagingSenderId: "107695047521",
  appId: "1:107695047521:web:e5985cef0f4d0b1413fb20",
  measurementId: "G-QZZ2KBQT2E"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const db = getFirestore(app);
const googleprovider= new GoogleAuthProvider();


export {db, auth,googleprovider };



