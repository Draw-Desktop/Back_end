const status = require('../../config/response.status.js');
const likeDao =  require('./like.dao.js');
const likeProvider =  require('./like.provider.js');
const { response, errResponse } = require('../../config/response.js');

exports.createLike = async (post_id, user_id) => {
    try {
        const existenceLike = await likeProvider.searchLike(post_id, user_id);
        if(existenceLike){
            return errResponse(status.LIKE_ALREADY_EXISTS);
        }
        //좋아요 생성
        const newLike = await likeDao.addLike({
            post_id,
            user_id
        });
        
        return response(status.SUCCESS_CREATE_LIKE, newLike);
    } catch (error) {
        throw error;
    }
};

exports.deleteLike = async (post_id, user_id) => {
    try {
        const existenceLike = likeProvider.searchLike(post_id, user_id);
        if(!existenceLike){
            return errResponse(status.LIKE_NOT_FOUND);
        }

        const deletedLike = await likeDao.destroyLike(post_id, user_id);

        return response(status.SUCCESS_DELETE_LIKE, deletedLike);
    } catch (error) {
        throw error;
    }
};