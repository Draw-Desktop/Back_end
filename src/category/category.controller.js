const categoryProvider = require('./category.provider');
const { errResponse } = require('../../config/response');

// 전체 카테고리 가져오기
module.exports.getAllCategories = async (req, res, next) => {
    try {
        // 카테고리 서비스를 호출하여 전체 카테고리를 가져옵니다.
        const categories = await categoryProvider.getAllCategories();
        
        // 성공적으로 카테고리를 가져온 경우 응답을 보냅니다.
        res.status(200).json({
            success: true,
            message: "전체 카테고리를 성공적으로 불러왔습니다.",
            data: categories
        });
    } catch (error) {
        // 오류가 발생한 경우 오류 응답을 보냅니다.
        console.error('Error fetching categories:', error);
        res.status(500).json(errResponse({ code: 500, message: "카테고리를 불러오는 데 실패했습니다." }));
    }
};
