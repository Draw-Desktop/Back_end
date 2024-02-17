const User = require('../../models/user');
const Post = require('../../models/post');
const Category = require('../../models/category.js');
const Link = require('../../models/link.js');
const Tag = require('../../models/tag.js');
const likePost = require('../../models/like_post.js');

exports.previewPostResponseDTO = async (post_id) => {
    
    const EX_POST = await Post.findOne({
        where: {
            post_id: post_id
        },
        include: [
            {
                model: Category,
                attributes: ['category_id', 'category_name'],
            },
            {
                model: Link,
                attributes: ['link_url'],
            },
            {
                model: Tag,
                attributes: ['tagging'],
            }
        ],
    });

    const EX_POST_LIKE = await likePost.count({
        where: {
            post_id: post_id
        },
    });

    EX_POST.dataValues.like = EX_POST_LIKE;

    // 공지사항 미존재
    if (EX_POST === null) return false;
    else return EX_POST;
};