const categoryDao = require('./category.dao');

// 전체 카테고리 가져오기 비즈니스 로직
exports.getAllCategories = async () => {
    try {
        // DAO를 통해 전체 카테고리를 가져옵니다.
        const categories = await categoryDao.getAllCategories();
        return categories;
    } catch (error) {
        throw error;
    }
};

// 다른 서비스 메서드들도 추가할 수 있습니다.
