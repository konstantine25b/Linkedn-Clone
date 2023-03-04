import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCoYqgqIIWNLmkWykuOGuK2kJah9C7abfk",
    authDomain: "linkedn-clone-f8bb4.firebaseapp.com",
    projectId: "linkedn-clone-f8bb4",
    storageBucket: "linkedn-clone-f8bb4.appspot.com",
    messagingSenderId: "350819345398",
    appId: "1:350819345398:web:e874f0ab84cb1309bd5dd7"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export  { db, auth}