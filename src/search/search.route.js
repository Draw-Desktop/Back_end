const { verifyAToken } = require('../middleware/index.js');
const searchController = require('./search.controller.js');

module.exports = function (app) {
    // 1.제목 검색
    app.get('/search/title',searchController.searchTitle);
    // 2.카테고리 검색
    app.get('/search/category',searchController.searchCategory);
    // 2.작성자 검색
    app.get('/search/user',searchController.searchUser);
};
