{/* <script type="module"> */ }
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// import { initializeAppCheck, ReCaptchaV3Provider } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app-check.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js'
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0p1R4oTyAcyFbwaI6Yd1uq3gBC9BCgZM",
    authDomain: "sample-extension-a7f66.firebaseapp.com",
    projectId: "sample-extension-a7f66",
    storageBucket: "sample-extension-a7f66.appspot.com",
    messagingSenderId: "887558314333",
    appId: "1:887558314333:web:0423bcdbba3acab640b0b4",
    measurementId: "G-XYXSVX7Y5D"
};
let app, appChk, analytics, auth;
// if (typeof document !== "undefined") {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // appChk = initializeAppCheck(app, {
    //     provider: new ReCaptchaV3Provider('6Lfkx2knAAAAAEQND9OM7iPALvqky1t279ZUtX95'),

    //     // Optional argument. If true, the SDK automatically refreshes App Check
    //     // tokens as needed.
    //     isTokenAutoRefreshEnabled: true
    // });

    // Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
    // key is the counterpart to the secret key you set in the Firebase console.
    // appChk.activate(
    //     '6Le7LmcnAAAAAAg_L_m9CkzdPQFab0IC46c6zRBn',

    //     // Optional argument. If true, the SDK automatically refreshes App Check
    //     // tokens as needed.
    //     true);
    // console.log(appChk);
    auth = getAuth();
    analytics = getAnalytics(app);
// }
// console.log(auth);


export default {...{analytics:analytics, auth: auth}, ...{signInWithEmailAndPassword: signInWithEmailAndPassword}, ...{createUserWithEmailAndPassword: createUserWithEmailAndPassword}, ...{signOut:signOut}};
{/* </script> */ }