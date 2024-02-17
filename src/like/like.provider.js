const likeDto = require('./like.dto.js');

exports.searchLike = async (post_id, user_id) => {
    return likeDto.getPostLikeResponseDTO(post_id, user_id);
};