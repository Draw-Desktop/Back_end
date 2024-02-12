const authService = require('./auth.service.js');
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

//로그인
exports.login = async (req, res, next) => {
    try {
        const { login_id, password } = req.body;
        if (!login_id || !password) {
            return res.send(errResponse(baseResponse.JOIN_EMPTY));
        }
        const result = await authService.login(login_id, password);
        return res.send(result);
    } catch (error) {
        console.error(error);
        return next(error);
    }
};