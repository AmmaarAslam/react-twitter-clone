import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQ5vEX1zuvuh_jPEFQSd61MkilnrYR1bY",
    authDomain: "react-twitter-clone-fb0f2.firebaseapp.com",
    databaseURL: "https://react-twitter-clone-fb0f2.firebaseio.com",
    projectId: "react-twitter-clone-fb0f2",
    storageBucket: "react-twitter-clone-fb0f2.appspot.com",
    messagingSenderId: "516203216607",
    appId: "1:516203216607:web:e806a333af524a56feb36a",
    measurementId: "G-X6TQEKEFVG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;