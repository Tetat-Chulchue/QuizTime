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
        let {user, category, score} = req.body;
        let reference = firestore.collection('SpellingBee')
                                .doc('Score')
                                .collection(category.toLowerCase())
                                .doc(user.toLowerCase());
        await reference.set({'score': score}, {merge: true}).then((resolve) => {
            res.sendStatus(200);
        },
        (reject) => {
            res.sendStatus(400);
        }).catch(e => {
            console.log(e);
            res.sendStatus(500)
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }

})

spellingBee.get('/scoreboard/:category', async (req,res) => {
    try {
        let {category} = req.params;
        let dataOBJ = {}
        let reference = firestore.collection('SpellingBee')
                                .doc('Score')
                                .collection(category.toLowerCase())
                                .orderBy('score', 'desc');
        await reference.get().then((snapshot) => {
            if (snapshot.empty) {
                res.sendStatus(404);
            } else {
                snapshot.forEach(doc => {
                    dataOBJ[doc.id] = doc.data();
                })
                res.send(dataOBJ);
            }
        },
        (reject) => {
            res.sendStatus(400);
        }).catch(e => {
            console.log(e);
            res.sendStatus(500);
        })
    } catch (e) {
        console.log(e);
        res.sendStatus(500)
    }
})

module.exports = spellingBee;