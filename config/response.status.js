const { StatusCodes } = require('http-status-codes');

module.exports = {
    // success
    SUCCESS: { isSuccess: true, code: 2000, message: 'success!' },
    USER_CAN_SIGNUP: { isSuccess: true, code: 2001, message: '가입이 가능한 아이디입니다.' },
    SUCCESS_REGISTRATION: { isSuccess: true, code: 2002, message: '회원가입이 성공적으로 완료되었습니다.' },

    // member err
    JOIN_EMPTY: { isSuccess: false, code: 'MEMBER4004', message: '필수 정보가 누락되었습니다.' },
    MEMBER_ALREADY_EXISTS: { isSuccess: false, code: 'MEMBER4005', message: '이미 존재하는 회원입니다.' },
    INVALID_PASSWORD_RULES: {
        isSuccess: false,
        code: 'MEMBER4006',
        message: '비밀번호는 8자 이상이어야 하며, 영문과 숫자가 섞여 있어야 합니다.',
    },
};