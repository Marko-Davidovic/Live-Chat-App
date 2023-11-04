import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeI7VJ7KJdqfrwTSqWBt2sW0v1JagWPwo",
  authDomain: "live-chat-ec3fb.firebaseapp.com",
  projectId: "live-chat-ec3fb",
  storageBucket: "live-chat-ec3fb.appspot.com",
  messagingSenderId: "58760043689",
  appId: "1:58760043689:web:bb87e6c4d19dbf32199db8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);