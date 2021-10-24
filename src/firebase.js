// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from `firebase`;

const firebaseConfig = {
    apiKey: "AIzaSyDkdgxdLEmJoY59TQqgGRzQXpTxAOTnsB0",
    authDomain: "snapchat-app-e5bc9.firebaseapp.com",
    projectId: "snapchat-app-e5bc9",
    storageBucket: "snapchat-app-e5bc9.appspot.com",
    messagingSenderId: "117213416696",
    appId: "1:117213416696:web:17cb67a25cdd6db400bf0d",
    measurementId: "G-V5PXMB1T4G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
// this allows for that google sign in option
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };