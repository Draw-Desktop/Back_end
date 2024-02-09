const bcrypt = require('bcrypt');
const authProvider = require('./auth.provider.js');
const { encrypt, decrypt } = require('../../util/crypter.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');

//회원가입
exports.join = async (userData) => {
    try {
        const { login_id, password, email} = userData;
        // 필수 정보 누락 여부 체크
        if (!login_id || !password || !email) {
            return errResponse(baseResponse.JOIN_EMPTY);
        }
        //회원 존재 확인
        const EX_ID = await authProvider.checkLoginIdExist(login_id);
        if (EX_ID) {
            return errResponse(baseResponse.MEMBER_ALREADY_EXISTS);
        }
        // 아이디 조건 확인
        if (!(await isValidLoginId(login_id))) {
            return errResponse(baseResponse.INVALID_LOGIN_ID_RULES);
        }
        // 비밀번호 조건 확인
        if (!(await isValidPassword(password))) {
            return errResponse(baseResponse.INVALID_PASSWORD_RULES);
        }
        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // 유저 생성
        const newUser = await authProvider.createUser({
            login_id, 
            password: hashedPassword,
            email
        });
        return response(baseResponse.SUCCESS_REGISTRATION, newUser);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

//아이디 유효성 검사
const isValidLoginId = (login_id) => {
    // 아이디는 4~12글자로 이루어진 영어 대소문자와 숫자로만 구성
    const loginIdRegex = /^(?=.*[A-Za-z])(?=.*\d)[a-zA-Z0-9]{4,12}$/;
    return loginIdRegex.test(login_id);
};

//비밀번호 유효성 검사
const isValidPassword = async (password) => {
    // 비밀번호는 8자 이상, 영문, 숫자, 특수문자가 최소 하나씩 포함
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};
