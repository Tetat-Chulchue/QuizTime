const functions = require('firebase-functions');
const spellingBee = require("./src/controller/SpellingBeeController");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.spellingBee = functions.https.onRequest(spellingBee);
