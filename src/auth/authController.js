const authService = require('./authService.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');

//회원가입 요청
exports.join = async (req, res, next) => {
    const { login_id, password, email} = req.body;
    const userData = { login_id, password, email};

    try {
        const result = await authService.join(userData);
        return res.send(response(baseResponse.SUCCESS, result));
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
};
