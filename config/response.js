const response = ({ isSuccess, code, message }, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result,
    };
};

const errResponse = ({ isSuccess, code, message }) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
    };
};

const getSuccessSignInJson = (userId, aToken) => {
    return {
        status_code: 200,
        message: '로그인이 성공했습니다.',
        user_id: userId,
        access_token: aToken
    };
};

module.exports = { response, errResponse, getSuccessSignInJson };
