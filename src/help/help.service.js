const status = require('../../config/response.status.js');
const helpDao =  require('./help.dao.js');
const { response, errResponse } = require('../../config/response.js');

exports.createHelp = async (body) => {
    const { name, email, reason, detail } = body;
    try {
        // 필수 내용 누락 여부 체크
        if (!name || !email || !reason || !detail) {
            throw new Error(status.PARAMETER_IS_EMPTY.message);
        }
        
        //도움말 생성
        const newHelp = await helpDao.addHelp({
            name, 
            email, 
            reason, 
            detail
        });

        return response(status.SUCCESS_CREATE_HELP, newHelp);
    } catch (error) {
        throw error;
    }
};
