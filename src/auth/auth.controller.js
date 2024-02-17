const authService = require('./auth.service.js');
const authProvider = require('./auth.provider.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');
const url = require('url');

//회원가입 요청
exports.join = async (req, res, next) => {
    const { login_id, password, name, nickname, email} = req.body;
    const userData = { login_id, password, name, nickname, email};

    try {
        const result = await authService.join(userData);
        return res.send(response(result));
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
    }
};

//닉네임 유효성 검사
exports.checkNickName = async (req, res, next) => {
    try {
        const getNickName = await authProvider.checkNickNameExist(url.parse(req.url, true).query.nickname);
        if(!getNickName){
            return res.send(response(baseResponse.USER_CAN_SIGNUP));
        } else {
            return res.send(response(baseResponse.NICKNAME_ALREADY_EXISTS));
        }
    } catch (error) {
        console.error('Error controler nickName:', error);
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

//로그아웃
// exports.login = async (req, res, next) => {
//     try {
//         const user_id = res.locals.decoded.userId;
//         const result = await authService.logout(user_id);
//         return res.send(response(baseResponse.SUCCESS_LOGOUT, result));
//     } catch (error) {
//         console.error(error);
//         return next(error);
//     }
// };