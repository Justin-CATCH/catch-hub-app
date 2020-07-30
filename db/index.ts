import * as firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDD6Rv7qcG-RH1D-ABcRFBu1ifDnJQdp2E",
  authDomain: "catchhubapp.firebaseapp.com",
  databaseURL: "https://catchhubapp.firebaseio.com",
  projectId: "catchhubapp",
  storageBucket: "catchhubapp.appspot.com",
  messagingSenderId: "1006264468393",
  appId: "1:1006264468393:web:bcd3cbe22278a0a37cbab8",
  measurementId: "G-3ZNNMN2055",
};

firebase.initializeApp(firebaseConfig);

export const dbInstance = firebase.firestore();
