// import modules

const express = require("express");
const cors = require("cors");
const admin = require("../config/admin");
const _ = require('lodash');

// setup

const firestore = admin.firestore();
const speedtyping = express();

speedtyping.use(cors({ origin: true}));

speedtyping.post('/record', async (req, res) => {
    try {
        let {user01, wordPM} = req.body;
        let wpmDoc = firestore.collection('speedtyping').doc('wordPerMinute');
        let {user02, accuracy} = req.body;//ระเบิดแน่ๆ
        let accDoc = firestore.collection('speedtyping').doc('Accuracy');
        let payloadPM = {};
        let payloadAC = {};
        payloadPM[user01.toLowerCase()] = wordPM;
        payloadAC[user02.toLowerCase()] = accuracy;
        await wpmDoc.set(payloadPM, {merge: true}).then(() => {
            res.sendStatus(200);
        },
        () => {
            res.sendStatus(400);
        });
        await accDoc.set(payloadAC, {merge: true}).then(() => {
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

speedtyping.get('/scoreboard/wordperminute', async (req,res) => {
    try {
        let reference = firestore.collection('speedtyping').doc('wordPerMinute');
        let scoreboard = await reference.get().then((snapshot) => {
            return snapshot.data();
        },
        () => {
            res.sendStatus(404);
        });
        _.mapValues(_.invert(_.invert(scoreboard)),parseInt);
        res.send(scoreboard);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

speedtyping.get('/scoreboard/accuracy', async (req,res) => {
    try {
        let reference = firestore.collection('speedtyping').doc('Accuracy');
        let scoreboard = await reference.get().then((snapshot) => {
            return snapshot.data();
        },
        () => {
            res.sendStatus(404);
        });
        _.mapValues(_.invert(_.invert(scoreboard)),parseInt);
        res.send(scoreboard);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

module.exports = speedtyping;