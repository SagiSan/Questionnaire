const Token = require('./models/tokenModel');
const Utils = require('./utils');
var jwt = require('jsonwebtoken');

module.exports = {
    authentication: async (req, _, next) => {
        const authHeader = req.get("authorization");
        if (authHeader != undefined) {

            // Verify jwt token
            const jwtToken = authHeader.split(' ')[1];
            try {
                jwt.verify(jwtToken, Utils.secret);
            } catch(err) {
                console.err("Token verification failed");
                console.err(err);
                return next();
            }

            // Find token in database
            const foundToken = await Token.findOne({ token: jwtToken }).populate('user');
            if (foundToken) {
                req.user = foundToken.user;
                return next();
            } else {
                console.err("Token not found in database");
                return next();
            }
            
        } else {
            return next();
        }
    },

    authenticated: (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.status(401).send("unauthenticated");
        }
    }
}
