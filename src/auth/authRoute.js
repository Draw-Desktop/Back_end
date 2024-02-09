const authController = require('./authController.js');

module.exports = function (app) {
    // 1.회원가입
    app.post('/api/auth/join', authController.join);
};
