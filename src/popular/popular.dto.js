const Post = require('../../models/post.js');
const Category = require('../../models/category.js');
const likePost = require('../../models/like_post.js');
const likeDto = require('../like/like.dto.js');

exports.getPopularWallpaperResponseDTO = async () => {
    const EX_POST = await Post.findAll();

    const EX_POST_LIKE = await Promise.all(EX_POST.map(async (post) => {
        const like = await likePost.count({
            where: {
                post_id: post.post_id
            }
        });
    
        post.dataValues.like = like;
        
        return post;
    }));
    
    // EX_POST_LIKE를 post.like 기준으로 내림차순으로 정렬
    EX_POST_LIKE.sort((a, b) => b.dataValues.like - a.dataValues.like);

    if (EX_POST_LIKE === null) return false;
    else return EX_POST_LIKE;
};

exports.getPopularCategoryResponseDTO = async () => {
    const EX_CATEGORY = await Category.findAll();

    const EX_POST_CATEGORY = await Promise.all(EX_CATEGORY.map(async (category) => {
        const post = await Post.findAll({
            where: {
                category_id: category.category_id
            }
        });
    
        category.dataValues.post = post;
        category.dataValues.count = post.length;
        return category;
    }));
    
    // EX_POST_LIKE를 post.like 기준으로 내림차순으로 정렬
    EX_POST_CATEGORY.sort((a, b) => b.dataValues.count - a.dataValues.count);

    if (EX_POST_CATEGORY === null) return false;
    else return EX_POST_CATEGORY;
};