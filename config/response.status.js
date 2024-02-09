const { StatusCodes } = require('http-status-codes');

module.exports = {
    // success
    SUCCESS: { isSuccess: true, code: 2000, message: 'success!' },
    SUCCESS_CREATE_HELP: { isSuccess: true, code: 2002, message: '요청이 성공적으로 접수되었습니다.' },

    // create err
    PARAMETER_IS_EMPTY: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'NOTICE4002', message: '필수 내용이 누락되었습니다.' },
    CREATION_FAILED: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'NOTICE4003', message: '생성을 실패하였습니다.' },
};