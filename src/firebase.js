// import firebase from 'firebase';
// import "firebase/auth";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3TEmTFKu_crkLVJF-D8s2G1UrszthnzE",
    authDomain: "discord-clone-a8003.firebaseapp.com",
    projectId: "discord-clone-a8003",
    storageBucket: "discord-clone-a8003.appspot.com",
    messagingSenderId: "400987985032",
    appId: "1:400987985032:web:d7235676628e24f88f3b3d",
    measurementId: "G-8J1DL1RMJB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth,provider};
  export default db;