// import modules

const express = require("express");
const cors = require("cors");
const admin = require("../config/admin");

// setup

const firestore = admin.firestore();
const spellingBee = express();

spellingBee.use(cors({ origin: true}));

spellingBee.post('/record', async (req, res) => {
    try {
        let {user, score, category} = req.body;
        let reference = firestore.collection('SpellingBee').doc(user);
        let payload = {};
        payload[category] = score;
        await reference.set(payload, {merge: true}).then(() => {
            res.sendStatus(200);
        },
        () => {
            res.sendStatus(400);
        });

    } catch (e) {
        console.log(e);
        res.send(500);
    }

})

module.exports = spellingBee;