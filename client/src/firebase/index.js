import firebase from "firebase/app";
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyCCvvDj4Z-LNz24m0Xn0Zfp9ggg2T2wMU8",
    authDomain: "travel-6b6b3.firebaseapp.com",
    databaseURL: "https://travel-6b6b3.firebaseio.com",
    projectId: "travel-6b6b3",
    storageBucket: "travel-6b6b3.appspot.com",
    messagingSenderId: "314844228823",
    appId: "1:314844228823:web:1c7bae7ad903f41578d492",
    measurementId: "G-F2ZFF541BP"
  };
firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export {storage,firebase as default};