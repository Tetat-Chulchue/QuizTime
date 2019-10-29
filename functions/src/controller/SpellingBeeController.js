// import modules

const express = require("express");
const cors = require("cors");
const admin = require("../config/admin");
const _ = require('lodash');

// setup

const firestore = admin.firestore();
const spellingBee = express();

spellingBee.use(cors({ origin: true}));

spellingBee.post('/record', async (req, res) => {
    try {
        let {user, score, category} = req.body;
        let reference = firestore.collection('SpellingBee').doc(category.toLowerCase());
        let payload = {};
        payload[user.toLowerCase()] = score;
        await reference.set(payload, {merge: true}).then(() => {
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

spellingBee.get('/scoreboard/:category', async (req,res) => {
    try {
        let {category} = req.params;
        let reference = firestore.collection('SpellingBee').doc(category);
        let scoreboard = await reference.get().then((snapshot) => {
            return snapshot.data();
        },
        () => {
            res.sendStatus(404);
        });
        _.mapValues(_.invert(_.invert(scoreboard)),parseInt); // sort object by values
        res.sendStatus(200).send(scoreboard);
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

module.exports = spellingBee;