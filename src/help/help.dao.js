const BaseError = require('../../config/error.js');
const status = require('../../config/response.status.js');
const Help = require('../../models/help.js');

exports.addHelp = async (body) => {
    try{
        //도움말 생성
        const newHelp = await Help.create(body);

        return newHelp;
    }catch (err) {
        console.error('Error creating notice:', err);
        throw new BaseError(status.CREATION_FAILED);
    }
}