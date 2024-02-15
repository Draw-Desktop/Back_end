const Category = require('../../models/category');

// 데이터베이스에서 전체 카테고리 가져오기
exports.getAllCategories = async () => {
    try {
        // 데이터베이스에서 모든 카테고리를 조회합니다.
        const categories = await Category.find();
        return categories;
    } catch (error) {
        throw error;
    }
};

// 다른 DAO 메서드들도 추가할 수 있습니다.
