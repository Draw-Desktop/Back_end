const postService = require('./post.service.js');
const postProvider = require('./post.provider.js');
const { response, errResponse } = require('../../config/response.js');
const baseResponse = require('../../config/response.status.js');

//게시물 업로드
exports.postUpload = async (req, res, next) => {
    try {
        const user_id = res.locals.decoded.userId;
        const image = req.file;
        if (!user_id ) {
            return res.send(errResponse(baseResponse.BAD_REQUEST));
        }
        if (!image || image.length === 0) {
            return res.status(400).json({ success: false, message: "실패" });
        }
        const result = await postService.createPost(user_id, typeof req.body.data === 'object' ? req.body.data : JSON.parse(req.body.data), image);
        return res.send(result);
    } catch (error) {
        console.error(error);
        return next(error);
    }
};