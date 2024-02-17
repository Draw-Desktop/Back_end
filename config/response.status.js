const { StatusCodes } = require('http-status-codes');

module.exports = {
    // success
    SUCCESS: { isSuccess: true, code: 2000, message: 'success!' },
    SUCCESS_CREATE_HELP: { isSuccess: true, code: 2002, message: '요청이 성공적으로 접수되었습니다.' },
    USER_CAN_SIGNUP: { isSuccess: true, code: 2001, message: '사용 가능한 닉네임입니다.' },
    SUCCESS_REGISTRATION: { isSuccess: true, code: 2002, message: '회원가입이 성공적으로 완료되었습니다.' },
    SUCCESS_LOAD_ALL_CATEGORY: { isSuccess: true, code: 2003, message: '전체 카테고리 게시물을 성공적으로 불러왔습니다.' },
    SUCCESS_LOAD_POPULAR_CATEGORY: { isSuccess: true, code: 2004, message: '인기 카테고리 게시물을 성공적으로 불러왔습니다.' },
    SUCCESS_LOAD_POPULAR_WALLPAPER: { isSuccess: true, code: 2005, message: '인기 바탕화면 게시물을 성공적으로 불러왔습니다.' },
    SUCCESS_POST: { isSuccess: true, code: 2006, message: '게시물이 성공적으로 작성되었습니다.' },
    SUCCESS_SEARCH_TITLE: { isSuccess: true, code: 2007, message: '제목 검색으로 게시물을 불러왔습니다.' },
    SUCCESS_SEARCH_CATEGORY: { isSuccess: true, code: 2008, message: '카테고리 검색으로 게시물을 불러왔습니다.' },
    SUCCESS_SEARCH_USER: { isSuccess: true, code: 2009, message: '작성자 검색으로 게시물을 불러왔습니다.' },
    SUCCESS_CREATE_LIKE: { isSuccess: true, code: 2010, message: '좋아요를 눌렀습니다.' },
    SUCCESS_DELETE_LIKE: { isSuccess: true, code: 2011, message: '좋아요를 취소했습니다.' },
    SUCCESS_LOGOUT: { isSuccess: true, code: 2012, message: '로그아웃에 성공했습니다.' },
    SUCCESS_CREATE_POST: { isSuccess: true, code: 2013, message: '게시물이 성공적으로 작성되었습니다.' },
    SUCCESS_UPDATE_USER: { isSuccess: true, code: 2014, message: '사용자 정보가 성공적으로 수정되었습니다.' },
    SUCCESS_POST_DELETE: { isSuccess: true, code: 2015, message: '게시물이 성공적으로 삭제되었습니다.' },
    SUCCESS_LIKE_DELETE: { isSuccess: true, code: 2016, message: '좋아요가 성공적으로 취소되었습니다.' },

    //jwt
    JWT_TOKEN_NOT_FOUND: { isSuccess: false, code: 'JWT000', message: '토큰을 찾지 못해 사용자 인증을 할 수 없습니다.' },
    JWT_TOKEN_WRONG: { isSuccess: false, code: 'JWT001', message: '잘못된 토큰입니다.' },
    JWT_TOKEN_EXPIRED: { isSuccess: false, code: 'JWT002', message: '토큰이 만료되었습니다.' },
    JWT_ACCESS_TOKEN_EXPIRESIN: { isSuccess: false, code: 'JWT003', message: 'Access 토큰이 만료되었습니다.' },

    JWT_GET_ACCESS_TOKEN_SUCCESS: { isSuccess: true, code: 'JWT004', message: 'Access 토큰이 발급되었습니다. ' },

    // common err
    BAD_REQUEST: { isSuccess: false, code: 'COMMON001', message: '잘못된 요청입니다.' },

    // member err
    MEMBER_NOT_FOUND: { isSuccess: false, code: 'MEMBER4001', message: '사용자가 없습니다.' },
    JOIN_EMPTY: { isSuccess: false, code: 'MEMBER4002', message: '필수 정보가 누락되었습니다.' },
    MEMBER_ALREADY_EXISTS: { isSuccess: false, code: 'MEMBER4003', message: '이미 존재하는 회원입니다.' },
    INVALID_LOGIN_ID_RULES: {
        isSuccess: false,
        code: 'MEMBER4004',
        message: '아이디는 4~12글자 영어 대소문자와 숫자가 섞여 있어야 합니다.',
    },
    INVALID_PASSWORD_RULES: {
        isSuccess: false,
        code: 'MEMBER4005',
        message: '비밀번호는 8자 이상이어야 하며, 영문과 숫자, 특수문자(!@#$%^&*_-)가 섞여 있어야 합니다.',
    },
    WRONG_PASSWORD: { isSuccess: false, code: 'MEMBER4006', message: '비밀번호가 틀렸습니다.' },
    NICKNAME_ALREADY_EXISTS: { isSuccess: false, code: 'MEMBER4007', message: '이미 존재하는 닉네임입니다.' },

    // post err
    CREATION_FAILED: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'POST4001', message: '생성을 실패하였습니다.' },
    PARAMETER_IS_EMPTY: { status: StatusCodes.BAD_REQUEST, isSuccess: false, code: 'POST4002', message: '필수 내용이 누락되었습니다.' },

    // like err
    LIKE_ALREADY_EXISTS: { isSuccess: false, code: 'LIKE4001', message: '이미 좋아요를 눌렀습니다.' },
    LIKE_NOT_FOUND: { isSuccess: false, code: 'LIKE4002', message: '사용자가좋아요를 누르지 않았습니다' },
};