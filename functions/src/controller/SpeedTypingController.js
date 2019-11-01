// import modules

const express = require("express");
const cors = require("cors");
const admin = require("../config/admin");
const _ = require('lodash');

// setup

const firestore = admin.firestore();
const speedTyping = express();
const batch = firestore.batch();

speedTyping.use(cors({ origin: true}));

speedTyping.post('/record', async (req, res) => {
    try {
        let {user, wpm, accuracy} = req.body;
        let wpmRef = firestore.collection('SpeedTyping').doc(user.toLowerCase());
        wpmRef.set({ 'wpm': wpm, 'accuracy': accuracy}, {merge: true}).then(() => {
            res.sendStatus(200);
        },
        () => {
            res.sendStatus(400);
        });

    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

})

speedTyping.get('/scoreboard/wordperminute', async (req,res) => {
    try {
        let dataArray = [];
        let reference = firestore.collection('SpeedTyping').orderBy('wpm').limit(10);
        reference.get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data();
                console.log(doc.data());
                dataArray.push(data['wpm']);
            })
        })
        res.send(dataArray);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

speedTyping.get('/scoreboard/accuracy', async (req,res) => {
    try {
        let reference = firestore.collection('SpeedTyping').orderBy('accuracy').limit(10);

    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

module.exports = speedTyping;