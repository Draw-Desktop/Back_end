const categoryController = require('./category.controller');
const asyncHandler = require('express-async-handler');


module.exports = function (app) {
    app.get('/posting/category', asyncHandler(categoryController.getAllCategories));
};



