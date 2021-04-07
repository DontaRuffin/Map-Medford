// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database";

const firebaseConfig = {
  apiKey: "AIzaSyBDTwVH7Yd8QsWoQacVfVC5zhKRh4tAT2A",
  authDomain: "harrisonburgmap.firebaseapp.com",
  databaseURL: "https://harrisonburgmap-default-rtdb.firebaseio.com",
  projectId: "harrisonburgmap",
  storageBucket: "harrisonburgmap.appspot.com",
  messagingSenderId: "671354177553",
  appId: "1:671354177553:web:40acc63072a1bee01889b0",
  measurementId: "G-37V888SPNC"
};

// dev database
// const firebaseConfig = {
//     apiKey: "AIzaSyBHK7CbNQvc_em3RHXJim3bpGJDfzi7cSo",
//     authDomain: "landau-midtown.firebaseapp.com",
//     databaseURL: "https://landau-midtown.firebaseio.com",
//     projectId: "landau-midtown",
//     storageBucket: "landau-midtown.appspot.com",
//     messagingSenderId: "760561157010",
//     appId: "1:760561157010:web:d809b584f48d9f2414b74b",
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
