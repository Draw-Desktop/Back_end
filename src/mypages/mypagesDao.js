const user = require('../../models/user.js');
const Post = require('../../models/post.js');
const likePost = require('../../models/like_post.js');

exports.selectMypages = async function(user_id) {
    try {
        const userInfo = await user.findOne({
            where: { user_id: user_id },
            attributes: ['nickname', 'name', 'email', 'introduction', 'profile_img']
        });
        return userInfo;
    } catch (error) {
        console.error('Error in selectMypages:', error);
        throw error;
    }
};

exports.selectPosting = async function(user_id) {
    try {
        // 사용자의 게시물 정보 조회
        const postInfo = await Post.findAll({
            where: { user_id: user_id },
            attributes: ['post_id', 'title', 'user_id', 'createdAt']
        });

        // 각 게시물에 대한 좋아요 수를 가져오고 결과를 post_id를 기반으로 병합하여 JSON 형식으로 반환
        const mergedResult = await Promise.all(postInfo.map(async post => {
            const likeCount = await likePost.count({
                where: { post_id: post.post_id }
            });
            return {
                post_id: post.post_id,
                title: post.title,
                user_id: post.user_id,
                createdAt: post.createdAt,
                like_count: likeCount
            };
        }));

        return mergedResult;
    } catch (error) {
        console.error('Error in selectPosting:', error);
        throw error;
    }
};

exports.selectLiked_posting = async function(user_id) {
    try {
        // like_post 테이블에서 user_id가 주어진 user_id와 같은 행들의 post_id 추출
        const likedPosts = await likePost.findAll({
            where: { user_id: user_id },
            attributes: ['post_id']
        });

        // 추출된 post_id들을 배열로 변환
        const likedPostIds = likedPosts.map(post => post.post_id);

        // post 테이블에서 위에서 추출한 post_id와 일치하는 행들 가져오기
        const like_postInfo = await Post.findAll({
            where: { post_id: likedPostIds },
            attributes: ['post_id', 'title', 'user_id', 'createdAt']
        });

        // 각 게시물에 대한 좋아요 수를 가져오고 결과를 post_id를 기반으로 병합하여 JSON 형식으로 반환
        const mergedResult = await Promise.all(like_postInfo.map(async post => {
            const likeCount = await likePost.count({
                where: { post_id: post.post_id }
            });
            return {
                post_id: post.post_id,
                title: post.title,
                user_id: post.user_id,
                createdAt: post.createdAt,
                like_count: likeCount
            };
        }));

        return mergedResult;
    } catch (error) {
        console.error('Error in selectLiked_posting:', error);
        throw error;
    }
};


exports.updateMypages = async function(user_info) {
    try {
        const num = await user.update(
            {
                nickname: user_info[1],
                name: user_info[2],
                email: user_info[3],
                introduction: user_info[4],
                profile_img: user_info[5].location
            },
            {
                where: { user_id: user_info[0] }
            }
        );
        return user_info[0];
    } catch (error) {
        console.error('Error in updateMypages:', error);
        throw error;
    }
};

exports.updatePosting = async function(post_info) {
    try {
        await Post.destroy({
            where: {
                user_id: post_info[0], 
                post_id: post_info[1] 
            }
        });
    } catch (error) {
        console.error('Error in deletePosting:', error);
        throw error;
    }
};

exports.updateLiked_Posting = async function(like_post_info) {
    try {
        await likePost.destroy({
            where: {
                user_id: like_post_info[0],
                post_id: like_post_info[1] // like_post_info 배열의 두 번째 요소가 post_id
            }
        });
    } catch (error) {
        console.error('Error in updateLiked_Posting:', error);
        throw error;
    }
};
