import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXnCQRpZlcm66VcAR_hAlEfApB0LYPQbA",
  authDomain: "photoapp-1bfb2.firebaseapp.com",
  projectId: "photoapp-1bfb2",
  storageBucket: "photoapp-1bfb2.appspot.com",
  messagingSenderId: "731785653720",
  appId: "1:731785653720:web:3d9393029220f9a12a56ad",
};

//init firebase
initializeApp(firebaseConfig);

//init firebase auth
const auth = getAuth();

//init firestore

const database = getFirestore();

//init storage

const fbStorage = getStorage();
export { database, auth, fbStorage };
