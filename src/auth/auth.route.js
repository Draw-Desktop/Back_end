const authController = require('./auth.controller.js');

module.exports = function (app) {
    // 1.회원가입
    app.post('/auth/join', authController.join);
    // 2.닉네임 유효성 검사
    app.get('/auth/nick_name', authController.checkNickName);
    // 3.로그인
    app.post('/auth/login', authController.login);
};
