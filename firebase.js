import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-analytics.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcF2AwUJZE3ZIAP_Ah4PM8k5LfNuCgZDI",
  authDomain: "eatcode-f2fb6.firebaseapp.com",
  projectId: "eatcode-f2fb6",
  storageBucket: "eatcode-f2fb6.appspot.com",
  messagingSenderId: "11084962812",
  appId: "1:11084962812:web:6b9d2187cc9a2bb544b079",
  measurementId: "G-G4ERG4ZFSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
