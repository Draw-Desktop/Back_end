const mypages = require('./mypagesController.js');
const { verifyAToken }= require('../middleware/index.js');
const imageUploader = require('../middleware/image.uploader.js');

module.exports = function(app){
    // 나의 정보 조회하기 API
    app.get('/mypages/profile', verifyAToken, mypages.GetProfile);

    // 나의 정보 변경하기 API
    app.post('/mypages/profile/modify', verifyAToken, imageUploader.imageUploader.single('image'), mypages.ModifyProfile);
    
    // 나의 게시물 조회하기 API
    app.get('/mypages/posting', verifyAToken, mypages.GetPosting);

    // 나의 게시물 수정하기 API
    app.post('/mypages/posting/modify', verifyAToken, mypages.ModifyPosting);

    // 좋아요 누른 게시물 조회하기 API
    app.get('/mypages/liked_posting', verifyAToken, mypages.GetLiked_posting);

    // 좋아요 누른 게시물 수정하기 API
    app.post('/mypages/liked_posting/modify', verifyAToken, mypages.ModifyLiked_posting);
};