module.exports = function (app) {
    const asyncHandler = require('express-async-handler');
    const helpController = require('./help.controller.js');

    //도움말 보내기
    app.post('/help', asyncHandler(helpController.helpCreate));
};