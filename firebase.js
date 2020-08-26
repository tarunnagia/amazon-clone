import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyDKtjbGv4vAhwLPgTD_YhZr7lVUbxQW6Ak",
    authDomain: "clone-b2241.firebaseapp.com",
    databaseURL: "https://clone-b2241.firebaseio.com",
    projectId: "clone-b2241",
    storageBucket: "clone-b2241.appspot.com",
    messagingSenderId: "37042863956",
    appId: "1:37042863956:web:157c8f18aeeade0aa8d2c1",
    measurementId: "G-MYN1QP0QM2"
};
const firebaseApp = firebase.initializeApp(config);
// const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { auth };