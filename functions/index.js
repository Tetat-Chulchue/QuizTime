const functions = require('firebase-functions');
const spellingBee = require("./src/controller/SpellingBeeController");
const speedTyping = require("./src/controller/SpeedTypingController");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.spellingBee = functions.https.onRequest(spellingBee);
exports.speedTyping = functions.https.onRequest(speedTyping);
