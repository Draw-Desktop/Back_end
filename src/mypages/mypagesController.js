const mypagesProvider = require("./mypagesProvider.js");   
const mypagesService = require("./mypagesService.js");
const baseResponse = require("../../config/response.status.js");
const {response, errResponse} = require("../../config/response.js");

/**
 * API Name : 나의 정보 조회하기 API
 * [GET] /mypages/profile
 */
exports.GetProfile = async function (req, res) {
    const user_id = res.locals.decoded.userId;
    const GetProfileResult = await mypagesProvider.inquireProfile(user_id);
    return res.send(response(baseResponse.SUCCESS, GetProfileResult));
};

/**
 * API Name : 나의 정보 변경하기 API
 * [POST] /mypages/profile/modify
 */
exports.ModifyProfile = async function (req, res) {
    try {
        const user_id = res.locals.decoded.userId;
        const image = req.file;
        const { nickname, name, email, introduction} = typeof req.body.data === 'object' ? req.body.data : JSON.parse(req.body.data);
        const user_info = [user_id, nickname, name, email, introduction, image];
        const ModifyProfileResult = await mypagesService.alterProfile(user_info);

        if (ModifyProfileResult)
            return res.send(response(baseResponse.SUCCESS_UPDATE_USER, ModifyProfileResult));
        else
            return res.status(400).send(response(baseResponse.NICKNAME_ALREADY_EXISTS, ModifyProfileResult));

    } catch (error) {
        console.error('Error in ModifyProfile controller:', error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};


/**
 * API Name : 나의 게시물 조회하기 API
 * [GET] /mypages/posting
 */
exports.GetPosting = async function (req, res) {
    const user_id = res.locals.decoded.userId;
    const GetPostingResult = await mypagesProvider.inquirePosting(user_id);
    return res.send(response(baseResponse.SUCCESS, GetPostingResult));
};

/**
 * API Name : 나의 게시물 수정하기 API
 * [POST] /mypages/posting/modify
 */
exports.ModifyPosting = async function (req, res) {
    const user_id = res.locals.decoded.userId;
    const { post_id } = req.body;
    const post_info = [user_id, post_id];
    const ModifyPostingResult = await mypagesService.alterPosting(post_info);
    return res.send(response(baseResponse.SUCCESS_POST_DELETE, ModifyPostingResult));
};

/**
 * API Name : 좋아요 누른 게시물 조회하기 API
 * [GET] /mypages/liked_posting
 */
exports.GetLiked_posting = async function (req, res) {
    const user_id = res.locals.decoded.userId;
    const GetLiked_postingResult = await mypagesProvider.inquireLiked_posting(user_id);
    return res.send(response(baseResponse.SUCCESS, GetLiked_postingResult));
};

/**
 * API Name : 좋아요 누른 게시물 수정하기 API
 * [POST] /mypages/liked_posting/modify
 */
exports.ModifyLiked_posting = async function (req, res) {
    const user_id = res.locals.decoded.userId;
    const { post_id } = req.body;
    const like_post_info = [user_id, post_id];
    const ModifyLiked_postingResult = await mypagesService.alterLiked_posting(like_post_info);
    return res.send(response(baseResponse.SUCCESS_LIKE_DELETE, ModifyLiked_postingResult));
};