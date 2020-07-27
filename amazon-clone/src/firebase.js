import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDio3dG6QwPkZrqXjdrpLwG0jWspnOI30k",
  authDomain: "clone-d36a0.firebaseapp.com",
  databaseURL: "https://clone-d36a0.firebaseio.com",
  projectId: "clone-d36a0",
  storageBucket: "clone-d36a0.appspot.com",
  messagingSenderId: "957859410702",
  appId: "1:957859410702:web:e589f945d92b1b62765d5f",
  measurementId: "G-9E90PPQE69"
};


const firebaseApp = firebase.initializeApp (firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


export {db, auth};