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
    try {
        let { user, score, set } = req.body;
        let reference = firestore.collection('MathGame')
                                .doc('Score')
                                .collection('set' + set)
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
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

MathGame.get('/scoreboard/:set', async (req, res) => {
    try {
        let { set } = req.params;
        let dataOBJ = {};
        let reference = firestore.collection('MathGame')
                                .doc('Score')
                                .collection('set' + set)
                                .orderBy('score', 'desc');
        await reference.get().then(snapshot => {
            if (snapshot.empty) {
                res.sendStatus(404)
            } else {
                snapshot.forEach(doc => {
                    dataOBJ[doc.id] = doc.data();
                })
                res.send(dataOBJ);
            }
        },
        (reject) => {
            console.log(reject);
            res.sendStatus(400);
        }).catch((e) => {
            console.log(e);
            res.sendStatus(500)
        });
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }

});

module.exports = MathGame;