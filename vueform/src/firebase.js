import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";
import "firebase/compat/storage";

let firebaseConfig = {
    apiKey: "AIzaSyBnCu6xam3f6JtM_ZiGYyVqyhFUBH1XqQQ",
    authDomain: "parq03-e5011.firebaseapp.com",
    projectId: "parq03-e5011",
    storageBucket: "parq03-e5011.appspot.com",
    messagingSenderId: "768549343474",
    appId: "1:768549343474:web:d1b757d9509a586c65c06b",
    measurementId: "G-F6VKKFP7YG"
  };

firebase.initializeApp(firebaseConfig);
export const FirebaseStorage=firebase.storage();
export default firebase.firestore();

