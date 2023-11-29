import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDs7HQX65TVPCs0E9UV0oYw16wY2_FxSnU",
    authDomain: "firechat-558a4.firebaseapp.com",
    projectId: "firechat-558a4",
    storageBucket: "firechat-558a4.appspot.com",
    messagingSenderId: "819815620744",
    appId: "1:819815620744:web:941a54e8bd9849d0d7ff3d"
})

const db = firebase.firestore();

const auth = firebase.auth();

export {db, auth}