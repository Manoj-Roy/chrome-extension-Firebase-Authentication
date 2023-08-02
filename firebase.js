{/* <script type="module"> */ }
// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from './firebase/firebase-auth.js'
// import { getAnalytics } from "./firebase/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "", // add Your own
    authDomain: "sample-extension-a7f66.firebaseapp.com",
    projectId: "", // add Your own
    storageBucket: "sample-extension-a7f66.appspot.com",
    messagingSenderId: "887558314333",
    appId: "", // add Your own
    measurementId: ""
};
let app, appChk, analytics, auth;
// if (typeof document !== "undefined") {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

   
    auth = getAuth();
    // analytics = getAnalytics(app);
// }
// console.log(auth);
// globalThis.analytics = analytics;
globalThis.auth = auth;
globalThis.signInWithEmailAndPassword = signInWithEmailAndPassword;
globalThis.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
globalThis.signOut = signOut;


window.fb = {...{ auth: auth}, ...{signInWithEmailAndPassword: signInWithEmailAndPassword}, ...{createUserWithEmailAndPassword: createUserWithEmailAndPassword}, ...{signOut:signOut}};
export default fb;
{/* </script> */ }