// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM5M9e5A76Mz14JnkN1Lq313Vf303sLws",
    authDomain: "router-firebase-integ.firebaseapp.com",
    projectId: "router-firebase-integ",
    storageBucket: "router-firebase-integ.appspot.com",
    messagingSenderId: "311677110300",
    appId: "1:311677110300:web:6a6a71647fe9dbcda237d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;