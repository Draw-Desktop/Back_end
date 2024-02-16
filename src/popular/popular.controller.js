const popularProvider = require('./popular.provider.js');
const status = require('../../config/response.status.js');
const { response, errResponse } = require('../../config/response.js');

exports.popularWallpaper = async (req, res, next) => {
    try {
        const getPWallpaper = await popularProvider.getPWallpaper();

        console.log("getPWallpaper", getPWallpaper);
        return res.send(response(status.SUCCESS, getPWallpaper));
    } catch (error) {
        console.error('Error controler popularWallpaper:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.popularCategory = async (req, res, next) => {
    try {
        const getPCategory = await popularProvider.getPCategory();
        
        return res.send(response(status.SUCCESS, getPCategory));
    } catch (error) {
        console.error('Error controler popularCategory:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};