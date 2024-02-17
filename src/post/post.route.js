const { verifyAToken } = require('../middleware/index.js');
const imageUploader = require('../middleware/image.uploader.js');
const postController = require('./post.controller.js');

module.exports = function (app) {
    // 1.게시물 업로드
    app.post('/post/upload', verifyAToken, imageUploader.imageUploader.single('image'), postController.postUpload);
};
