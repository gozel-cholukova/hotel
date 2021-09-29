import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAFqs-2CQB-VtvV1DmQyA6amOvHSLgZIEA",
  authDomain: "yyldyz-hotel-demo.firebaseapp.com",
  databaseURL: "https://yyldyz-hotel-demo-default-rtdb.firebaseio.com",
  projectId: "yyldyz-hotel-demo",
  storageBucket: "yyldyz-hotel-demo.appspot.com",
  messagingSenderId: "494551316093",
  appId: "1:494551316093:web:7e6f28f0e1e88cb69aa314"
})


var db = firebaseApp.firestore();

export { db };