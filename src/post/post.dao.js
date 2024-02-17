const BaseError = require('../../config/error.js');
const status = require('../../config/response.status.js');
const Post = require('../../models/post.js');
const Image = require('../../models/image.js');
const Link = require('../../models/link.js');
const Tag = require('../../models/tag.js');

exports.addPost = async (body) => {
    try{
        const newPost = await Post.create(body);
        return newPost;
    }catch (err) {
        console.error('Error creating post:', err);
        throw new BaseError(status.CREATION_FAILED);
    }
}

exports.addPostLink = async (body) => {
    try{
        const newPostLink = await Link.create(body);
        return newPostLink;
    }catch (err) {
        console.error('Error creating postLink:', err);
        throw new BaseError(status.CREATION_FAILED);
    }
}


exports.addPostTag = async (body) => {
    try{
        const newPostTag = await Tag.create(body);
        return newPostTag;
    }catch (err) {
        console.error('Error creating postTag:', err);
        throw new BaseError(status.CREATION_FAILED);
    }
}
