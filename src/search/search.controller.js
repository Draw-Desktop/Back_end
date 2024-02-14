const searchProvider = require('./search.provider.js');
const status = require('../../config/response.status.js');
const { response, errResponse } = require('../../config/response.js');
const url = require('url');

exports.searchTitle = async (req, res, next) => {
    try {
        const getTitle = await searchProvider.getTitle(url.parse(req.url, true).query);
        
        return res.send(response(status.SUCCESS, getTitle));
    } catch (error) {
        console.error('Error controler searchTitle:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.searchCategory = async (req, res, next) => {
    try {
        const getCategory = await searchProvider.getCategory(url.parse(req.url, true).query);
        
        return res.send(response(status.SUCCESS, getCategory));
    } catch (error) {
        console.error('Error controler searchCategory:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.searchUser = async (req, res, next) => {
    try {
        const getUser = await searchProvider.getUser(url.parse(req.url, true).query);
        
        return res.send(response(status.SUCCESS, getUser));
    } catch (error) {
        console.error('Error controler searchUser:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};