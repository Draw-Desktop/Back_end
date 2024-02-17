const status = require('../../config/response.status.js');
const postDao =  require('./post.dao.js');
const { response, errResponse } = require('../../config/response.js');

exports.createPost = async (user_id, body, image) => {
    const { category_id, title, explanation, link, tag} = body;
    const directory = "post";
    try {
        // 필수 내용 누락 여부 체크
        if (!category_id || !title) {
            throw new Error(status.PARAMETER_IS_EMPTY.message);
        }

        const newPost = await postDao.addPost({
            user_id,
            img_url: image.location,
            category_id,
            title,
            explanation
        });
        
        const postId = newPost.post_id;

        link.forEach(link => {
            postDao.addPostLink({
                post_id: postId,
                link_url: link
            });
        });

        tag.forEach(tag => {
            postDao.addPostTag({
                post_id: postId,
                tagging: tag
            });
        });
        
        return response(status.SUCCESS_CREATE_POST, newPost);
    } catch (error) {
        throw error;
    }
};