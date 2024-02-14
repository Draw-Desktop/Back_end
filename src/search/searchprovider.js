const searchDto = require('./search.dto.js');

exports.getTitle = async (query) => {
    const title = query.title;
    return searchDto.searchTitleResponseDTO(title);
};

exports.getCategory = async (query) => {
    const categoryName = query.category_name;
    return searchDto.searchCategoryResponseDTO(categoryName);
};

exports.getUser = async (query) => {
    const loginId = query.nickname;
    return searchDto.searchUserResponseDTO(nickname);
};