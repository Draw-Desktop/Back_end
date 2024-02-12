const { verifyAToken } = require('../middleware/index.js');
const likeController = require('./like.controller.js');

module.exports = function (app) {
    // 1.좋아요 누르기
    app.post('/like/:post_id', verifyAToken, likeController.like);
    // 2.좋아요 취소
    app.delete('/like/:post_id', verifyAToken, likeController.likeDel);
};
