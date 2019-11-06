// import modules

const express = require("express");
const cors = require("cors");
const admin = require("../config/admin");
const _ = require('lodash');

// setup

const firestore = admin.firestore();
const MathGame = express();
const batch = firestore.batch();

MathGame.use(cors({ origin: true}));

MathGame.post('/record', async (req, res) => {
    let { user, score, set } = req.body;
    let reference = firestore.collection('MathGame')
                            .doc(set)
                            .collection('Users')
                            .doc(user.toLowerCase());
    await reference.set({'score': score}, {merge: true}).then((resolve) => {
        res.sendStatus(200);
    },
    (reject) => {
        console.log(reject);
        res.sendStatus(400);
    }).catch(e => {
        console.log(e);
        res.sendStatus(500);
    })
});

MathGame.get('/scoreboard/:set', async (req, res) => {
    let { set } = req.params;

});

module.exports = MathGame;