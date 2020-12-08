import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID, */

  apiKey: "AIzaSyAgXH_NN0Z4blCzE-1gDPe9b0q2tL-nLaM",
  authDomain: "store-dev-95434.firebaseapp.com",
  projectId: "store-dev-95434",
  storageBucket: "store-dev-95434.appspot.com",
  messagingSenderId: "357915062348",
  appId: "1:357915062348:web:c14be9b82b63575702c4e9",
});

export const auth = app.auth();
export default app;
