const likeService = require('./like.service.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');

//좋아요 누르기
exports.like = async (req, res, next) => {
    try {
        const post_id = req.params.post_id;
        const user_id = res.locals.decoded.userId;
        if (!user_id || !post_id) {
            return res.send(errResponse(baseResponse.BAD_REQUEST));
        }
        const result = await likeService.createLike(post_id, user_id);
        return res.send(result);
    } catch (error) {
        console.error(error);
        return next(error);
    }
};

//좋아요 취소
exports.likeDel = async (req, res, next) => {
    try {
        const post_id = req.params.post_id;
        const user_id = res.locals.decoded.userId;
        console.log("post_id", post_id);
        console.log("user_id", user_id);
        if (!user_id || !post_id) {
            return res.send(errResponse(baseResponse.BAD_REQUEST));
        }
        const result = await likeService.deleteLike(post_id, user_id);
        return res.send(result);
    } catch (error) {
        console.error(error);
        return next(error);
    }
};