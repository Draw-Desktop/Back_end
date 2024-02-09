const authController = require('./auth.controller.js');

module.exports = function (app) {
    // 1.회원가입
    app.post('/auth/join', authController.join);
};
