const baseResponse = require("../../config/response.status.js");
const {response, errResponse} = require("../../config/response.js");
const mypagesDao = require("./mypagesDao.js");
const authProvider = require('../auth/auth.provider.js');
const mypagesDto = require("./mypagesDto.js");

// Service: Create, Update, Delete 비즈니스 로직 처리

exports.alterProfile = async function (user_info) {
    const getNickName = await authProvider.checkNickNameExist(user_info[1]);
    const temp = await mypagesDto.getdontchangenicknameDTO(user_info);

    if (temp === user_info[1])
    {
        //body nickname == db nickname : 닉네임 변경x
        const alterProfileResult = await mypagesDao.updateMypages(user_info);// 덮어씌운다.
        return alterProfileResult;
    }
    else//, 닉네임 변경
    {
        if (!getNickName)//닉네임 중복이 아니면
        {
            const alterProfileResult = await mypagesDao.updateMypages(user_info);// 덮어씌운다.
            return alterProfileResult;
        }
        else//닉네임 중복이면
        {
            return null;
        }
    }
};

exports.alterPosting = async function (post_info) {
        const alterResult = await mypagesDao.updatePosting(post_info);
        return alterResult;
};

exports.alterLiked_posting = async function (like_post_info) {
    const alterLiked_postingResult = await mypagesDao.updateLiked_Posting(like_post_info);
    return alterLiked_postingResult;
}