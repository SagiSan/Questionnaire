var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const User = require("../models/userModel");
const Token = require('../models/tokenModel');

const Utils = require("../utils");

router.post('/login', async (req, res) => {
    var user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.send({
            error: "User not found"
        });
    }
    // if (!bcrypt.compareSync(req.body.password, user.password))
    if (req.body.password != user.password)
    {
        return res.send({
            error: "Invalid password"
        });
    }
    const token = jwt.sign({}, Utils.secret);
    Token.create({
        token,
        user
    });

    res.send({
        isAdmin: user.isAdmin,
        token
    });
});

router.post("/register", async (req, res) => {
    req.body.isAdmin = false;
    try {
        // req.body.password = bcrypt.hashSync(req.body.password, 10);
        await User.create(req.body);
        res.send(true);
    } catch(err) {
        Utils.handleException(res, err);
    }
});

module.exports = router;