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

exports.postShow = async (req, res, next) => {
    try {
        const post_id = req.params.post_id;
        const getPost = await postProvider.getPost(post_id);
        return res.send(response(baseResponse.SUCCESS, getPost));
    } catch (error) {
        console.error('Error controler post:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};

exports.postUploader = async (req, res, next) => {
    try {
        const user_id = req.params.user_id;
        const getUploader = await postProvider.getUploader(user_id);
        return res.send(response(baseResponse.SUCCESS, getUploader));
    } catch (error) {
        console.error('Error controler uploader:', error);
        res.status(400).json({ success: false, message: error.message });
    }
};