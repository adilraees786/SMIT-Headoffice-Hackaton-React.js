import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDEbc4nAvTa1a-yT0vK5cbCSMaFg8LOC1s",
  authDomain: "chat-app-3c251.firebaseapp.com",
  projectId: "chat-app-3c251",
  storageBucket: "chat-app-3c251.appspot.com",
  messagingSenderId: "146164237690",
  appId: "1:146164237690:web:14b009ca22d8c332a042c3",
  measurementId: "G-ZM1JFE16PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app);
 const db = getFirestore(app);

export{auth,db}