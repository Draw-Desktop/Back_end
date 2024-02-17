const categoryDto = require('./category.dto');

// 전체 카테고리 가져오기 비즈니스 로직
module.exports.getAllCategories = async () => {
    try {
        // DAO를 통해 전체 카테고리를 가져옵니다.
        const categories = await categoryDto.getAllCategories();
        return categories;
    } catch (error) {
        throw error;
    }
};

