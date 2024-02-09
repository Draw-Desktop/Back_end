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

//AUTH_CODE 업데이트
exports.saveVerificationCode = async (studentId, verificationCode) => {
    try {
        const user = await User.findOne({
            where: { studentId },
        });
        if (!user) {
            throw new Error(errResponse(baseResponse.MEMBER_NOT_FOUND));
        }
        const updateUser = await User.update(
            { verificationCode }, // Properties to be updated
            { where: { studentId } } // Where clause to identify the record
        );

        return updateUser ? true : false;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

//인증 상태 업데이트

exports.updateVerificationStatus = async (studentId) => {
    try {
        const updateStatus = await User.update(
            { isVerified: true },
            {
                where: { studentId },
            }
        );
        if (updateStatus[0] > 0) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
