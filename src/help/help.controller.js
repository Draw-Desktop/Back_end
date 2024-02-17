const helpService = require('./help.service.js');
const status = require('../../config/response.status.js');
const { response, errResponse } = require('../../config/response.js');

exports.helpCreate = async (req, res, next) => {
    try {
        const newHelp = await helpService.createHelp(req.body);
        return res.send(response(status.SUCCESS, newHelp));
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};