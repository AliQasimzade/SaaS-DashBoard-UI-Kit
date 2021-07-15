import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBwE6VsuDodrixBsWn0nuAvBMAELAzR3b0",
  authDomain: "dashboard-database-af1ec.firebaseapp.com",
  databaseURL: "https://dashboard-database-af1ec-default-rtdb.firebaseio.com",
  projectId: "dashboard-database-af1ec",
  storageBucket: "dashboard-database-af1ec.appspot.com",
  messagingSenderId: "540361460565",
  appId: "1:540361460565:web:68e55cb51f0b0624817ddc",
  measurementId: "G-4F40NZ5Q6T",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
