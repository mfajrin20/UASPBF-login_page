import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCEfLZBsIE3jAPpDCcvg4k2I8WU7aYLm1Y",
    authDomain: "reactfirestore-d57d0.firebaseapp.com",
    projectId: "reactfirestore-d57d0",
    storageBucket: "reactfirestore-d57d0.appspot.com",
    messagingSenderId: "613967462455",
    appId: "1:613967462455:web:7bc6e41b0d74522bfb3fb2",
    measurementId: "G-ELV5NTHWDZ"
  };
  
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
