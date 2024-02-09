const User = require('../../models/user.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');

//아이디 중복 확인
exports.checkLoginIdExist = async (login_id) => {
    const EX_USER = await User.findOne({ where: { login_id: login_id } });

    if (EX_USER) return EX_USER;
    else return null;
};
//User테이블에 사용자 추가
exports.createUser = async (userData) => {
    try {
        const newUser = await User.create(userData);
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};