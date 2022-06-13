import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNltjH0gzBZOrVRFFWf3SgvnSAX89qE0w",
    authDomain: "fir-login-9ef85.firebaseapp.com",
    projectId: "fir-login-9ef85",
    storageBucket: "fir-login-9ef85.appspot.com",
    messagingSenderId: "602039692424",
    appId: "1:602039692424:web:bd1ee0c26245e265d6433d",
    measurementId: "G-43QX8KCJ26"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;