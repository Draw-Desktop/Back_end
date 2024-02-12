const likePost = require('../../models/like_post.js');
const Post = require('../../models/post.js');

//사용자가 게시물에 좋아요를 눌렀는지 여부
exports.getPostLikeResponseDTO = async (post_id, user_id) => {
    const EX_LIKE = await likePost.findOne({
        where: {
            post_id: post_id,
            user_id: user_id
        }
    });

    if (EX_LIKE === null) return false;
    else return EX_LIKE;
};

//게시물에 눌린 좋아요 수 받아오기
exports.getAllPostLikeLengthResponseDTO = async (post_id) => {
    const EX_LIKE = await likePost.count({
        where: {
            post_id: post_id
        }
    });

    if (EX_LIKE === null) return 0;
    else return EX_LIKE;
};

//사용자가 좋아요 누른 게시물 전부 받아오기
exports.getAllPostLikeResponseDTO = async (user_id) => {
    const EX_LIKE = await likePost.findAll({
        where: {
            user_id: user_id
        }
    });

    const EX_LIKE_POST = await Promise.all(EX_LIKE.map(async (like_post) => {
        const post = await Post.findAll({
            where: {
                contentId: like_post.id
            },
        });

        return post;
    }));

    if (EX_LIKE === null) return false;
    else return EX_LIKE_POST;
};