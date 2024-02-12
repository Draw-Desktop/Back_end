const BaseError = require('../../config/error.js');
const status = require('../../config/response.status.js');
const likePost = require('../../models/like_post.js');

exports.addLike = async (body) => {
    try{
        const newLike = await likePost.create(body);

        console.log("newLike", newLike);
        return newLike;
    }catch (err) {
        console.error('Error like post:', err);
        throw new BaseError(status.CREATION_FAILED);
    }
};

exports.destroyLike = async (post_id, user_id) => {
    try {
        const deletePostLike = await likePost.findOne({
            attributes: ['post_id'],
            where: {
                post_id: post_id,
                user_id: user_id
            }
        });
        await likePost.destroy({
            where: {
                post_id: post_id,
                user_id: user_id
            }
        });

        return deletePostLike;
    } catch (error) {
        throw error;
    }
};