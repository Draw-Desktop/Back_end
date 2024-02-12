const { StatusCodes } = require('http-status-codes');

module.exports = {
    // success
    SUCCESS: { isSuccess: true, code: 2000, message: 'success!' },
    SUCCESS_CREATE_HELP: { isSuccess: true, code: 2002, message: '요청이 성공적으로 접수되었습니다.' },
    USER_CAN_SIGNUP: { isSuccess: true, code: 2001, message: '가입이 가능한 아이디입니다.' },
    SUCCESS_REGISTRATION: { isSuccess: true, code: 2002, message: '회원가입이 성공적으로 완료되었습니다.' },

    // create err
    PARAMETER_IS_EMPTY: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'NOTICE4002', message: '필수 내용이 누락되었습니다.' },
    CREATION_FAILED: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'NOTICE4003', message: '생성을 실패하였습니다.' },

    // member err
    JOIN_EMPTY: { isSuccess: false, code: 'MEMBER4001', message: '필수 정보가 누락되었습니다.' },
    MEMBER_ALREADY_EXISTS: { isSuccess: false, code: 'MEMBER4002', message: '이미 존재하는 회원입니다.' },
    INVALID_LOGIN_ID_RULES: {
        isSuccess: false,
        code: 'MEMBER4003',
        message: '아이디는 4~12글자 영어 대소문자와 숫자가 섞여 있어야 합니다.',
    },
    INVALID_PASSWORD_RULES: {
        isSuccess: false,
        code: 'MEMBER4004',
        message: '비밀번호는 8자 이상이어야 하며, 영문과 숫자, 특수문자(!@#$%^&*_-)가 섞여 있어야 합니다.',
    },
};