const postDto = require('./post.dto.js');

exports.getPost = async (post_id) => {
    return postDto.previewPostResponseDTO(post_id);
};