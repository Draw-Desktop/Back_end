const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const moment = require('moment');

module.exports = {

    signAToken: (userId) => {
        const payload = {
            userId: userId,
        };
        return jwt.sign(payload, process.env.JWT_SECRET, {
            algorithm: process.env.JWT_SIGN_ALGORITHM,
            expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRESIN,
        });
    }
};
