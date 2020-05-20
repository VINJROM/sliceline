// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers
const functions = require("firebase-functions");

// Pushes orders to function-database
exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate((order) => {
    console.log("Sending User Email...");
  });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
