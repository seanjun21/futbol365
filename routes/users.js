const express = require('express');
const User = require('../models/user-model');

const router = express.Router();

router.post('/', (req, res) => {
    console.log(req, 'REq');
    User.create({
        username: req.body.username,
        password: req.body.password,
        league: req.body.league
    }, function(err, item) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(201).json(item);
    });
});

router.get('/', (req, res) => {
    User.find((err, users) => {
        if (err) {
            return res.status(400).json(err);
        }

        return res.status(200).json(users);
    });
});

router.delete('/:userId', (req, res) => {
    const userId = req.params.userId;
    User.findByIdAndRemove(userId, (err, user) => {
        if (err) {
            return res.status(400).json(err);
        }

        return res.status(200).json(user);
    });
});

module.exports = router;