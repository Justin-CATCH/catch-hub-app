const firebase = require("firebase");
require("firebase/database");

const yaml = require("yaml");

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

const firestore = firebase.firestore();

fetch(
  "https://api.docs.cgws.com.au/services/knowledge-base/branches/catch-hub-app/files/docs/people/people.yaml?r=raw"
)
  .then((res) => res.text())
  .then(async (data) => {
    //  Parse YAML
    const json = yaml.parse(data);

    // Format data into an array
    const people = json.sections
      .map(({ title, people }) => {
        if (!people) {
          return null;
        }

        return people.map((person) => ({
          ...person,
          role: title,
        }));
      })
      .filter(Boolean)
      .flat();

    // Remove old data
    await firestore
      .collection("people")
      .get()
      .then((querySnapshot) => {
        const batch = firestore.batch();

        querySnapshot.forEach(function (doc) {
          batch.delete(doc.ref);
        });

        return batch.commit();
      });

    // Save new data
    const batch = firestore.batch();

    people.forEach((person) => {
      batch.set(firestore.collection("people").doc(), person);
    });

    await batch.commit();

    console.log("Done!");
  });
