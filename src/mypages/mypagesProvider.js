const baseResponse = require("../../config/response.status.js");
const {response, errResponse} = require("../../config/response.js");
const mypagesDao = require("./mypagesDao.js");

// Provider: Read 비즈니스 로직 처리

exports.inquireProfile = async function (user_id) {
        const inquireProfileResult = await mypagesDao.selectMypages(user_id);
        return inquireProfileResult;
};

exports.inquirePosting = async function (user_id) {
        const inquirePostingResult = await mypagesDao.selectPosting(user_id);
        return inquirePostingResult;
};  

exports.inquireLiked_posting = async function (user_id) {
        const inquireLiked_postingResult = await mypagesDao.selectLiked_posting(user_id);
        return inquireLiked_postingResult;
}