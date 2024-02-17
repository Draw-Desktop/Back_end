const { verifyAToken } = require('../middleware/index.js');
const popularController = require('./popular.controller.js');

module.exports = function (app) {
    // 1.인기 바탕화면 가져오기
    app.get('/popular/wallpaper',popularController.popularWallpaper);
    // 2.인기 카테고리 가져오기
    app.get('/popular/category',popularController.popularCategory);
};
